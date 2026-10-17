import { useState } from 'react'
import { Card, Pill, Btn, Ghost, inputCls } from '../components/ui'
import { useBiz } from '../store'
import { STATUSES, PAYMENTS, fmt, fdate } from '../../data/demo'
export default function Orders() {
  const { orders, products, customers, addOrder, addCustomer, setStatus } = useBiz()
  const [f, setF] = useState('Tous'), [open, setOpen] = useState(false)
  const [form, setForm] = useState({ customerId: customers[0]?.id || '__new', newName: '', newPhone: '', productId: products[0].id, amount: products[0].price || '', payment: 'Wave', paid: 'En attente', source: 'WhatsApp' })
  const list = orders.filter((o) => f === 'Tous' || o.status === f)
  const paid = orders.filter((o) => o.paid === 'Payé' && o.status !== 'Annulée').reduce((s, o) => s + o.amount, 0)
  const wait = orders.filter((o) => o.paid !== 'Payé' && o.status !== 'Annulée').reduce((s, o) => s + o.amount, 0)
  const submit = () => { let c = customers.find((x) => x.id === form.customerId); if (!c) { if (!form.newName) return; c = addCustomer({ name: form.newName, phone: form.newPhone, source: form.source }) }
    const p = products.find((x) => x.id === form.productId); addOrder({ customerId: c.id, customer: c.name, phone: c.phone, productId: p.id, product: p.name, amount: +form.amount || 0, payment: form.payment, paid: form.paid, source: form.source, status: 'Confirmée' }); setOpen(false) }
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold">Commandes & paiements</h1><p className="text-sm text-slate-500">Quand un client confirme sur WhatsApp, créez la commande en 10 secondes.</p></div><Btn onClick={() => setOpen(true)}>+ Nouvelle commande</Btn></div>
      <div className="grid grid-cols-2 gap-3"><Card><p className="text-xs text-slate-500">Encaissé </p><b className="text-lg text-emerald-600">{fmt(paid)}</b></Card><Card><p className="text-xs text-slate-500">En attente de paiement</p><b className="text-lg text-amber-600">{fmt(wait)}</b></Card></div>
      <div className="flex gap-1 overflow-x-auto">{['Tous', ...STATUSES].map((s) => <button key={s} onClick={() => setF(s)} className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${f === s ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200'}`}>{s}</button>)}</div>
      <Card className="overflow-x-auto !p-0"><table className="w-full min-w-[820px] text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{['Commande', 'Client', 'Téléphone', 'Produit', 'Montant', 'Paiement', 'Statut', 'Date'].map((h) => <th key={h} className="px-3 py-2.5 font-semibold">{h}</th>)}</tr></thead>
        <tbody>{list.slice(0, 40).map((o) => <tr key={o.id} className="border-t border-slate-100"><td className="px-3 py-2.5 font-semibold">{o.id}<div className="text-[10px] font-normal text-slate-400">{o.source}</div></td><td className="px-3">{o.customer}</td><td className="px-3 text-slate-500">{o.phone}</td><td className="px-3">{o.product}</td><td className="px-3 font-semibold">{fmt(o.amount)}</td>
          <td className="px-3"><div className="text-xs">{o.payment}</div><Pill>{o.paid}</Pill></td>
          <td className="px-3"><select value={o.status} onChange={(e) => setStatus(o.id, e.target.value)} className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs">{STATUSES.map((s) => <option key={s}>{s}</option>)}</select></td><td className="px-3 text-xs text-slate-500">{fdate(o.date)}</td></tr>)}</tbody></table></Card>
      {open && <div className="fixed inset-0 z-50 grid place-items-end bg-black/40 sm:place-items-center" onClick={() => setOpen(false)}><div onClick={(e) => e.stopPropagation()} className="w-full max-w-md space-y-3 rounded-t-3xl bg-white p-5 sm:rounded-3xl">
        <h3 className="font-bold">Nouvelle commande</h3>
        <select className={inputCls} value={form.customerId} onChange={(e) => setForm({ ...form, customerId: e.target.value })}>{customers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}<option value="__new">+ Nouveau client</option></select>
        {form.customerId === '__new' && <div className="grid grid-cols-2 gap-2"><input className={inputCls} placeholder="Nom du client" value={form.newName} onChange={(e) => setForm({ ...form, newName: e.target.value })} /><input className={inputCls} placeholder="Téléphone" inputMode="tel" value={form.newPhone} onChange={(e) => setForm({ ...form, newPhone: e.target.value })} /></div>}
        <select className={inputCls} value={form.productId} onChange={(e) => setForm({ ...form, productId: e.target.value, amount: products.find((x) => x.id === e.target.value)?.price || '' })}>{products.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}</select>
        <input className={inputCls} placeholder="Montant convenu (FCFA)" inputMode="numeric" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
        <select className={inputCls} value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })}>{['WhatsApp', 'Instagram', 'TikTok', 'Facebook', 'Boutique', 'Autre'].map((x) => <option key={x}>{x}</option>)}</select>
        <div className="grid grid-cols-2 gap-2"><select className={inputCls} value={form.payment} onChange={(e) => setForm({ ...form, payment: e.target.value })}>{PAYMENTS.map((p) => <option key={p}>{p}</option>)}</select><select className={inputCls} value={form.paid} onChange={(e) => setForm({ ...form, paid: e.target.value })}>{['Payé', 'En attente', 'Paiement partiel'].map((p) => <option key={p}>{p}</option>)}</select></div>
        <div className="flex gap-2"><Ghost className="flex-1" onClick={() => setOpen(false)}>Annuler</Ghost><Btn className="flex-1" onClick={submit}>Enregistrer</Btn></div></div></div>}
    </div>)
}
