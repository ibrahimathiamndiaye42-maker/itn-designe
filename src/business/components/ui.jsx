import { fmt } from '../../data/demo'
export const Card = ({ title, children, className = '', right }) => (
  <section className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 ${className}`}>
    {(title || right) && <div className="mb-3 flex items-center justify-between"><h3 className="text-sm font-semibold text-slate-800">{title}</h3>{right}</div>}
    {children}
  </section>)
export const Stat = ({ label, value, delta, hint }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <p className="text-xs font-medium text-slate-500">{label}</p>
    <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
    {delta != null && <p className={`mt-1 text-xs font-semibold ${delta >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{delta >= 0 ? '▲ +' : '▼ '}{delta} %</p>}
    {hint && <p className="mt-1 text-xs text-slate-400">{hint}</p>}
  </div>)
const TONE = { Nouvelle: 'bg-blue-50 text-blue-700', Confirmée: 'bg-indigo-50 text-indigo-700', 'En préparation': 'bg-amber-50 text-amber-700', 'En livraison': 'bg-violet-50 text-violet-700', Livrée: 'bg-emerald-50 text-emerald-700', Annulée: 'bg-rose-50 text-rose-700', Payé: 'bg-emerald-50 text-emerald-700', 'En attente': 'bg-amber-50 text-amber-700', 'Paiement partiel': 'bg-orange-50 text-orange-700' }
export const Pill = ({ children }) => <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold ${TONE[children] || 'bg-slate-100 text-slate-600'}`}>{children}</span>
export const Btn = ({ children, className = '', ...p }) => <button {...p} className={`rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95 ${className}`}>{children}</button>
export const Ghost = ({ children, className = '', ...p }) => <button {...p} className={`rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 ${className}`}>{children}</button>
export const inputCls = 'w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
export function Bars({ data, metric }) {
  const max = Math.max(...data.map((d) => d[metric])) || 1
  return (<div className="flex h-44 items-end gap-1.5">{data.map((d, i) => (
    <div key={i} className="flex flex-1 flex-col items-center gap-1" title={`${d.label}: ${metric === 'revenue' ? fmt(d.revenue) : d.orders}`}>
      <div className="w-full rounded-t-md bg-gradient-to-t from-indigo-600 to-indigo-400 transition-all duration-500" style={{ height: `${(d[metric] / max) * 100}%` }} />
      <span className="text-[10px] text-slate-400">{d.label}</span></div>))}</div>)
}
export function Funnel({ steps }) {
  return (<div className="space-y-2">{steps.map((s, i) => (
    <div key={s.label}>
      <div className="flex items-center justify-between text-xs text-slate-600"><span>{s.label}</span>
        <span className="font-semibold text-slate-900">{s.value}{i > 0 && <em className="ml-2 font-normal not-italic text-slate-400">{Math.round((s.value / steps[i - 1].value) * 100)} % de l'étape précédente</em>}</span></div>
      <div className="mt-1 h-6 rounded-lg bg-slate-100"><div className="h-6 rounded-lg bg-indigo-600 transition-all duration-700" style={{ width: `${(s.value / steps[0].value) * 100}%`, opacity: 1 - i * 0.18 }} /></div>
    </div>))}</div>)
}
export const HBars = ({ rows }) => (<div className="space-y-2.5">{rows.map(([k, v]) => (
  <div key={k}><div className="flex justify-between text-xs"><span className="text-slate-600">{k}</span><span className="font-semibold">{v} %</span></div>
    <div className="mt-1 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-indigo-500" style={{ width: `${v * 2.4}%` }} /></div></div>))}</div>)
