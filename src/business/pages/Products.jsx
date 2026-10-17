import { useState, useEffect } from 'react'
import { fetchEvents } from '../../services/analytics'
import { productStats } from '../../utils/metrics'
import { Card, Pill, Btn, Ghost, inputCls } from '../components/ui'
import { useBiz } from '../store'
import { fmt } from '../../data/demo'
const lvl = (s) => (s === 0 ? ['🔴 Rupture', 'text-rose-600'] : s <= 2 ? ['🟠 Stock faible', 'text-orange-600'] : ['🟢 Disponible', 'text-emerald-600'])
export default function Products() {
  const { products, orders, setStock, setPrice, addProduct } = useBiz(); const [events, setEvents] = useState([]); useEffect(() => { fetchEvents().then(setEvents) }, []); const ps = productStats(events, orders); const [open, setOpen] = useState(false), [f, setF] = useState({ name: '', category: 'Chambre à coucher', price: '', stock: 1, ref: '' })
  const low = products.filter((p) => p.stock <= 2)
  const save = () => { if (!f.name) return; addProduct({ ...f, id: 'p-' + Date.now(), price: +f.price || 0, stock: +f.stock, ref: f.ref || 'ITN-NEW', image: '' }); setOpen(false) }
  return (
    <div className="space-y-4"><div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold">Produits & stock</h1><p className="text-sm text-slate-500">Vos photos, vos prix, votre stock — au même endroit.</p></div><Btn onClick={() => setOpen(true)}>+ Ajouter un produit</Btn></div>
      {low.length > 0 && <div className="rounded-2xl bg-orange-50 p-3 text-sm text-orange-800">⚠ {low.length} produit(s) à surveiller : {low.slice(0, 4).map((p) => p.name).join(' · ')}</div>}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{products.map((p) => { const [l, c] = lvl(p.stock); const st = ps[p.id] || { views: 0, clicks: 0, orders: 0 }
        return <Card key={p.id}><div className="flex gap-3">{p.image ? <img src={p.image} className="h-20 w-20 rounded-xl object-cover" alt="" /> : <div className="h-20 w-20 rounded-xl bg-slate-100" />}<div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">{p.name}</p><p className="text-xs text-slate-500">{p.category} · {p.ref}</p><label className="flex items-center gap-1 text-xs text-slate-500">Prix<input defaultValue={p.price || ''} placeholder="à définir" inputMode="numeric" onBlur={(e) => +e.target.value !== p.price && setPrice(p.id, e.target.value)} className="w-24 rounded-lg border border-slate-200 px-2 py-1 text-sm font-bold text-slate-900" />FCFA</label><p className={`text-xs font-semibold ${c}`}>{l}</p></div></div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500"><span>{st.views} vues · {st.clicks} clics WA · {st.orders} cmd</span>
            <span className="flex items-center gap-1"><button className="h-7 w-7 rounded-lg bg-slate-100 font-bold" onClick={() => setStock(p.id, p.stock - 1)}>−</button><b className="w-6 text-center text-sm text-slate-900">{p.stock}</b><button className="h-7 w-7 rounded-lg bg-slate-100 font-bold" onClick={() => setStock(p.id, p.stock + 1)}>+</button></span></div></Card> })}</div>
      {open && <div className="fixed inset-0 z-50 grid place-items-end bg-black/40 sm:place-items-center" onClick={() => setOpen(false)}><div onClick={(e) => e.stopPropagation()} className="w-full max-w-md space-y-2 rounded-t-3xl bg-white p-5 sm:rounded-3xl"><h3 className="font-bold">Nouveau produit</h3>
        <input className={inputCls} placeholder="Nom" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /><select className={inputCls} value={f.category} onChange={(e) => setF({ ...f, category: e.target.value })}><option>Chambre à coucher</option><option>Salon</option></select>
        <div className="grid grid-cols-3 gap-2"><input className={inputCls} placeholder="Prix" inputMode="numeric" value={f.price} onChange={(e) => setF({ ...f, price: e.target.value })} /><input className={inputCls} placeholder="Stock" inputMode="numeric" value={f.stock} onChange={(e) => setF({ ...f, stock: e.target.value })} /><input className={inputCls} placeholder="Réf." value={f.ref} onChange={(e) => setF({ ...f, ref: e.target.value })} /></div>
        <p className="text-xs text-slate-400">Les photos se gèrent dans src/data/products.js (version démo).</p><div className="flex gap-2"><Ghost className="flex-1" onClick={() => setOpen(false)}>Annuler</Ghost><Btn className="flex-1" onClick={save}>Ajouter</Btn></div></div></div>}
    </div>)
}
