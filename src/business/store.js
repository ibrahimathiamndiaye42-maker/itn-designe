import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PRODUCTS } from '../data/products'
import { supabase } from '../services/supabase'
import { loadAll, saveRow, saveMany, wipeAll } from '../services/db'
// Catalogue réel du site. Prix et stock se renseignent dans ITN Business (le site public n'affiche pas de prix).
const catalog = () => PRODUCTS.map((p) => ({ id: p.id, ref: p.ref, name: p.name, category: p.category === 'salon' ? 'Salon' : 'Chambre à coucher', image: p.images[0], price: 0, stock: 1, active: true }))
const ordersWith = (st, id, fn) => st.orders.map((o) => (o.id === id ? fn(o) : o))
export const useBiz = create(persist((set, get) => ({
  orders: [], customers: [], invoices: [], products: catalog(), ready: !supabase,
  hydrate: async () => {
    if (!supabase) return
    try {
      let d = await loadAll()
      // Nettoie d'anciennes données de démonstration éventuelles
      if (d.customers.length === 50 && d.customers[0]?.id === 'CL-001') { await wipeAll(); d = { orders: [], customers: [], invoices: [], products: [] } }
      const have = new Set(d.products.map((p) => p.id)), missing = catalog().filter((p) => !have.has(p.id))
      if (missing.length) { await saveMany('products', missing); d.products.push(...missing) }
      const cat = catalog().map((p) => p.id), order = (p) => { const i = cat.indexOf(p.id); return i < 0 ? -1 : i }
      set({ ...d, products: d.products.sort((a, b) => order(a) - order(b)), orders: d.orders.sort((a, b) => b.date - a.date), invoices: d.invoices.sort((a, b) => b.date - a.date), ready: true })
    } catch (e) { console.error(e); set({ ready: true }) }
  },
  addCustomer: (c) => { const cust = { id: 'CL-' + Date.now().toString(36).toUpperCase(), since: Date.now(), source: 'WhatsApp', ...c }; set((st) => ({ customers: [cust, ...st.customers] })); saveRow('customers', cust); return cust },
  addOrder: (o) => { const order = { ...o, id: 'CMD-' + Date.now().toString(36).toUpperCase(), date: Date.now() }; set((st) => ({ orders: [order, ...st.orders] })); saveRow('orders', order) },
  setStatus: (id, status) => { set((st) => ({ orders: ordersWith(st, id, (o) => ({ ...o, status })) })); saveRow('orders', get().orders.find((o) => o.id === id)) },
  setStock: (id, stock) => { set((st) => ({ products: st.products.map((p) => (p.id === id ? { ...p, stock: Math.max(0, stock) } : p)) })); saveRow('products', get().products.find((p) => p.id === id)) },
  setPrice: (id, price) => { set((st) => ({ products: st.products.map((p) => (p.id === id ? { ...p, price: +price || 0 } : p)) })); saveRow('products', get().products.find((p) => p.id === id)) },
  addInvoice: (i) => { set((st) => ({ invoices: [i, ...st.invoices] })); saveRow('invoices', i) },
}), { name: 'itn-business-v2', partialize: (s) => ({ orders: s.orders, products: s.products, customers: s.customers, invoices: s.invoices }) }))
