import { useState } from 'react'
import { Card } from '../components/ui'
import { useBiz } from '../store'
import { inactive } from '../../utils/insights'
export default function Marketing() {
  const { customers, orders } = useBiz(); const list = inactive(customers, orders)
  const [msg, setMsg] = useState("Bonjour 👋\n\nITN Design & Création vient de recevoir de nouveaux modèles de chambres et salons.\n\nDécouvrez la nouvelle collection.")
  const link = (c) => `https://wa.me/${String(c.phone || '').replace(/\D/g, '').replace(/^(7\d{8})$/, '221$1')}?text=${encodeURIComponent(msg)}`
  return (<div className="space-y-4"><div><h1 className="text-2xl font-bold">Marketing</h1><p className="text-sm text-slate-500">Relancez vos clients qui n'ont pas commandé depuis 30 jours.</p></div>
    <Card title="Clients à relancer"><p className="text-4xl font-extrabold text-indigo-600">{list.length} <span className="text-base font-medium text-slate-500">client(s)</span></p>
      <textarea rows={6} className="mt-3 w-full rounded-xl border border-slate-200 p-3 text-sm" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <div className="mt-3 divide-y divide-slate-100">{list.map((c) => <div key={c.id} className="flex items-center justify-between py-2 text-sm"><span>{c.name}<br /><span className="text-xs text-slate-500">{c.phone}</span></span><a target="_blank" rel="noreferrer" href={link(c)} className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold text-white">Envoyer sur WhatsApp</a></div>)}
        {!list.length && <p className="py-2 text-sm text-slate-400">Aucun client à relancer pour l'instant.</p>}</div>
      <p className="mt-3 text-xs text-slate-400">Chaque bouton ouvre WhatsApp avec votre message prêt : vous l'envoyez en un clic. L'envoi groupé automatique viendra plus tard.</p></Card></div>)
}
