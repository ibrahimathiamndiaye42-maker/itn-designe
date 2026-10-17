// DONNÉES DE DÉMONSTRATION — fictives. Ne jamais les présenter comme les vraies performances.
import { PRODUCTS } from './products'
let s = 42; const r = () => (s = (s * 16807) % 2147483647) / 2147483647
const pick = (a) => a[Math.floor(r() * a.length)]
export const DAY = 864e5, NOW = new Date('2026-10-17T12:00:00').getTime()
const PRICES = [450000, 420000, 480000, 520000, 550000, 500000, 380000, 600000, 360000, 400000, 900000, 650000, 620000, 580000, 600000, 700000, 330000]
const STOCK = [3, 2, 0, 1, 4, 2, 5, 1, 2, 0, 3, 2, 6, 1, 2, 4, 3]
export const DEMO_PRODUCTS = PRODUCTS.map((p, i) => ({
  id: p.id, ref: p.ref, name: p.name, category: p.category === 'salon' ? 'Salon' : 'Chambre à coucher',
  image: p.images[0], price: PRICES[i % PRICES.length], stock: STOCK[i % STOCK.length],
  views: Math.round(180 + r() * 1000), clicks: Math.round(20 + r() * 90), active: true,
}))
const FN = ['Mamadou', 'Awa', 'Fatou', 'Ibrahima', 'Aminata', 'Cheikh', 'Khady', 'Ousmane', 'Mariama', 'Moussa', 'Seynabou', 'Abdoulaye', 'Ndeye', 'Modou', 'Astou', 'Pape', 'Rokhaya', 'Alioune', 'Bineta', 'Samba']
const LN = ['Diallo', 'Ndiaye', 'Sow', 'Fall', 'Diop', 'Ba', 'Sy', 'Gueye', 'Faye', 'Sarr', 'Mbaye', 'Cissé', 'Thiam', 'Kane']
export const SOURCES = ['Instagram', 'WhatsApp', 'TikTok', 'Facebook', 'Google', 'Direct']
export const STATUSES = ['Nouvelle', 'Confirmée', 'En préparation', 'En livraison', 'Livrée', 'Annulée']
export const PAYMENTS = ['Wave', 'Orange Money', 'Espèces', 'Virement']
export const DEMO_CUSTOMERS = Array.from({ length: 50 }, (_, i) => ({
  id: 'CL-' + String(i + 1).padStart(3, '0'), name: `${FN[i % 20]} ${LN[(i * 3) % 14]}`,
  phone: `7${pick([7, 8, 6])} XXX XX ${String(10 + i)}`, source: pick(['Instagram', 'Instagram', 'TikTok', 'WhatsApp', 'Facebook', 'Google']),
  since: NOW - Math.round(30 + r() * 300) * DAY,
}))
export const DEMO_ORDERS = Array.from({ length: 40 }, (_, i) => {
  const c = DEMO_CUSTOMERS[Math.floor(r() * 50)], p = pick(DEMO_PRODUCTS), age = Math.floor(r() * 90)
  return { id: 'CMD-' + String(209 + i).padStart(5, '0'), customerId: c.id, customer: c.name, phone: c.phone, productId: p.id, product: p.name,
    amount: p.price, payment: pick(PAYMENTS), status: age < 3 ? pick(['Nouvelle', 'Confirmée', 'En préparation']) : age < 10 ? pick(['En livraison', 'Livrée', 'Confirmée']) : r() < 0.08 ? 'Annulée' : 'Livrée',
    paid: pick(['Payé', 'Payé', 'En attente', 'Paiement partiel']), date: NOW - age * DAY, source: pick(['WhatsApp', 'WhatsApp', 'Instagram', 'TikTok']) }
}).sort((a, b) => b.date - a.date)
export const DEMO_STATS = { visitors: 327, views: 142, clicks: 51, orders: 18, revenue: 2850000,
  growth: { visitors: 18, clicks: 24, orders: 12, revenue: 21 } }
export const DEMO_SOURCES = [['Instagram', 37], ['WhatsApp', 29], ['TikTok', 18], ['Facebook', 8], ['Google', 5], ['Direct', 3]]
export function salesSeries(days) {
  const n = days === 1 ? 12 : days <= 7 ? 7 : days <= 30 ? 10 : days <= 90 ? 12 : 12
  const g = (() => { let q = days * 7 + 3; return () => (q = (q * 16807) % 2147483647) / 2147483647 })()
  return Array.from({ length: n }, (_, i) => { const o = Math.max(1, Math.round((days / n) * (0.5 + g()) * 0.9 + i * 0.15)); return { label: days === 1 ? `${8 + i}h` : `P${i + 1}`, orders: o, revenue: o * (380000 + Math.round(g() * 120000)) } })
}
export const fmt = (n) => new Intl.NumberFormat('fr-FR').format(n) + ' FCFA'
export const fdate = (t) => new Date(t).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
