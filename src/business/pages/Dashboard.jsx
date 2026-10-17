import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Stat, Bars, Funnel, HBars } from '../components/ui'
import { fmt } from '../../data/demo'
import { useBiz } from '../store'
import { fetchEvents } from '../../services/analytics'
import { compute, productStats, RANGES } from '../../utils/metrics'
import { buildInsights } from '../../utils/insights'
import { BRAND } from '../../config'
export default function Dashboard() {
  const { products, orders, customers } = useBiz()
  const [range, setRange] = useState(7), [metric, setMetric] = useState('orders'), [events, setEvents] = useState([]), [loading, setLoading] = useState(true)
  const refresh = () => fetchEvents().then((e) => { setEvents(e); setLoading(false) })
  useEffect(() => { refresh() }, [])
  const d = compute(events, orders, range), S = d.stats, ps = productStats(events, orders)
  const top = products.map((p) => ({ ...p, ...(ps[p.id] || { views: 0, clicks: 0, orders: 0, revenue: 0 }) }))
  const mostViewed = [...top].sort((a, b) => b.views - a.views).filter((p) => p.views > 0).slice(0, 3), mostOrdered = [...top].sort((a, b) => b.orders - a.orders || b.revenue - a.revenue).filter((p) => p.orders > 0).slice(0, 3)
  const insights = buildInsights({ products, customers, orders, events }).slice(0, 3)
  const conv = S.visitors ? ((S.orders / S.visitors) * 100).toFixed(1).replace('.', ',') + ' %' : '—'
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between"><div><h1 className="text-2xl font-bold">Bonjour 👋</h1><p className="text-sm text-slate-500">Voici les performances de {BRAND.shopName}.</p></div><button onClick={refresh} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold">↻ Actualiser</button></div>
      <div className="flex flex-wrap gap-1">{RANGES.map(([l, n]) => <button key={n} onClick={() => setRange(n)} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${range === n ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200'}`}>{l}</button>)}</div>
      {!loading && d.empty && <div className="rounded-2xl bg-indigo-50 p-4 text-sm text-indigo-900">Aucune donnée pour l'instant. Partagez le lien de votre boutique : chaque visite et chaque clic WhatsApp apparaîtra ici. Quand un client confirme sur WhatsApp, créez sa commande dans « Commandes ».</div>}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <Stat label="Visiteurs" value={S.visitors} delta={d.delta.visitors} /><Stat label="Clics WhatsApp" value={S.clicks} delta={d.delta.clicks} />
        <Stat label="Commandes" value={S.orders} delta={d.delta.orders} /><Stat label="Chiffre d'affaires" value={fmt(S.revenue)} delta={d.delta.revenue} />
        <Stat label="Taux de conversion" value={conv} hint="commandes / visiteurs" />
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Tunnel de conversion">{S.visitors ? <Funnel steps={[{ label: 'Visiteurs', value: S.visitors }, { label: 'Consultations produits', value: S.views }, { label: 'Clics WhatsApp', value: S.clicks }, { label: 'Commandes', value: S.orders }]} /> : <p className="text-sm text-slate-400">En attente de visiteurs.</p>}
          <p className="mt-3 rounded-xl bg-indigo-50 p-3 text-xs text-indigo-800">Un clic WhatsApp n'est pas une commande : seules les commandes que vous créez dans ITN Business comptent.</p></Card>
        <Card title="Évolution des ventes" right={<div className="flex gap-1">{[['revenue', 'CA'], ['orders', 'Cmd']].map(([k, l]) => <button key={k} onClick={() => setMetric(k)} className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${metric === k ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}>{l}</button>)}</div>}><Bars data={d.series} metric={metric} /></Card>
        <Card title="Origine des visiteurs">{d.sources.length ? <HBars rows={d.sources} /> : <p className="text-sm text-slate-400">Pas encore de visites.</p>}
          <p className="mt-3 text-xs text-slate-400">Astuce : mettez <b>votresite.com/?src=instagram</b> dans votre bio Instagram (idem <b>tiktok</b>, <b>facebook</b>) pour mesurer chaque réseau.</p></Card>
        <Card title="Produits les plus consultés">{mostViewed.length ? mostViewed.map((p) => <div key={p.id} className="flex items-center gap-3 border-b border-slate-100 py-2 last:border-0"><img src={p.image} className="h-10 w-10 rounded-lg object-cover" alt="" /><span className="flex-1 text-sm">{p.name}</span><b className="text-sm">{p.views} vues</b></div>) : <p className="text-sm text-slate-400">Aucune consultation pour l'instant.</p>}</Card>
        <Card title="Produits les plus commandés">{mostOrdered.length ? mostOrdered.map((p) => <div key={p.id} className="flex items-center justify-between border-b border-slate-100 py-2 text-sm last:border-0"><span>{p.name}</span><span><b>{p.orders} cmd</b> · {fmt(p.revenue)}</span></div>) : <p className="text-sm text-slate-400">Aucune commande pour l'instant.</p>}</Card>
        <Card title="ITN Insights" right={<Link to="/business/insights" className="text-xs font-semibold text-indigo-600">Tout voir</Link>}>{insights.map((i, k) => <p key={k} className="mb-2 rounded-xl bg-slate-50 p-3 text-sm">💡 <b>{i.k} :</b> {i.t}</p>)}</Card>
      </div>
    </div>)
}
