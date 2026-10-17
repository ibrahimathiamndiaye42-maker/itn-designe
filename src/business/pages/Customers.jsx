import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Pill, Btn, Ghost, inputCls } from '../components/ui'
import { useBiz } from '../store'
import { customerStats } from '../../utils/insights'
import { fmt, fdate } from '../../data/demo'
import { buildSimpleWhatsAppLink } from '../../utils/whatsapp'
export default function Customers() {
  const { customers, orders } = useBiz(); const [q, setQ] = useState(''), [sel, setSel] = useState(null)
  const rows = customers.map((c) => ({ ...c, ...customerStats(c, orders) })).filter((c) => c.name.toLowerCase().includes(q.toLowerCase())).sort((a, b) => b.total - a.total)
  const c = sel && rows.find((r) => r.id === sel)
  return (
    <div className="space-y-4"><div><h1 className="text-2xl font-bold">Clients</h1><p className="text-sm text-slate-500">{customers.length} client(s) · ils sont créés automatiquement quand vous enregistrez une commande.</p></div>
      <input className={inputCls} placeholder="Rechercher un client…" value={q} onChange={(e) => setQ(e.target.value)} />
      <Card className="overflow-x-auto !p-0"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr>{['Nom', 'Téléphone', 'Cmd', 'Total dépensé', 'Dernière commande', 'Source', 'Statut'].map((h) => <th key={h} className="px-3 py-2.5">{h}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r.id} onClick={() => setSel(r.id)} className="cursor-pointer border-t border-slate-100 hover:bg-indigo-50/40"><td className="px-3 py-2.5 font-semibold">{r.name}</td><td className="px-3 text-slate-500">{r.phone}</td><td className="px-3">{r.n}</td><td className="px-3 font-semibold">{fmt(r.total)}</td><td className="px-3 text-xs">{r.last ? fdate(r.last.date) : '—'}</td><td className="px-3">{r.source}</td><td className="px-3"><Pill>{r.n >= 2 ? 'Livrée' : r.n === 1 ? 'Confirmée' : 'Nouvelle'}</Pill><span className="ml-1 text-[11px] text-slate-500">{r.n >= 2 ? 'Fidèle' : r.n === 1 ? 'Client' : 'Prospect'}</span></td></tr>)}</tbody></table>{!rows.length && <p className="p-4 text-sm text-slate-400">Aucun client pour l'instant. Créez votre première commande dans « Commandes ».</p>}</Card>
      {c && <div className="fixed inset-0 z-50 grid place-items-end bg-black/40 sm:place-items-center" onClick={() => setSel(null)}><div onClick={(e) => e.stopPropagation()} className="w-full max-w-md space-y-2 rounded-t-3xl bg-white p-5 sm:rounded-3xl">
        <h3 className="text-xl font-bold">{c.name}</h3><p className="text-sm text-slate-500">Téléphone : {c.phone} · Client depuis {fdate(c.since)}</p>
        <div className="grid grid-cols-2 gap-2 text-sm"><Card><p className="text-xs text-slate-500">Commandes</p><b>{c.n}</b></Card><Card><p className="text-xs text-slate-500">Total dépensé</p><b>{fmt(c.total)}</b></Card><Card><p className="text-xs text-slate-500">Source</p><b>{c.source}</b></Card><Card><p className="text-xs text-slate-500">Dernière commande</p><b>{c.last?.product || '—'}</b></Card></div>
        <div className="flex flex-wrap gap-2 pt-1"><a target="_blank" rel="noreferrer" href={buildSimpleWhatsAppLink(`Bonjour ${c.name}, ici ITN Design & Création 👋`)} className="rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white">Contacter sur WhatsApp</a><Link to="/business/commandes" className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold">Voir les commandes</Link><Link to={`/business/factures?client=${c.id}`} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold">Créer une facture</Link></div></div></div>}
    </div>)
}
