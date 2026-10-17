import { useEffect, useState } from 'react'
import { useBiz } from '../store'
import { fetchEvents } from '../../services/analytics'
import { buildInsights } from '../../utils/insights'
const C = { amber: 'border-amber-300 bg-amber-50', emerald: 'border-emerald-300 bg-emerald-50', indigo: 'border-indigo-300 bg-indigo-50', orange: 'border-orange-300 bg-orange-50', rose: 'border-rose-300 bg-rose-50', violet: 'border-violet-300 bg-violet-50', sky: 'border-sky-300 bg-sky-50' }
export default function Insights() {
  const s = useBiz(), [events, setEvents] = useState([]); useEffect(() => { fetchEvents().then(setEvents) }, [])
  return (<div className="space-y-4"><div><h1 className="text-2xl font-bold">ITN Insights</h1><p className="text-sm text-slate-500">ITN Business ne vous montre pas seulement des chiffres. Il vous aide à les comprendre.</p></div>
    {buildInsights({ ...s, events }).map((i, k) => <div key={k} className={`rounded-2xl border p-4 ${C[i.c]}`}><p className="text-xs font-bold uppercase tracking-wide text-slate-600">💡 {i.k}</p><p className="mt-1 text-sm text-slate-800">{i.t}</p></div>)}
    <p className="text-xs text-slate-400">Conseils calculés par des règles simples sur vos données réelles (pas d'intelligence artificielle).</p></div>)
}
