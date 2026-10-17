// Calculs du tableau de bord à partir des VRAIS événements et commandes.
const DAY = 864e5
export const RANGES = [["Aujourd'hui", 1], ['7 jours', 7], ['30 jours', 30], ['3 mois', 90], ['12 mois', 365]]
const valid = (o) => o.status !== 'Annulée'
const sum = (a) => a.reduce((s, o) => s + (+o.amount || 0), 0)
export function compute(events, orders, days) {
  const now = Date.now(), start = days === 1 ? new Date().setHours(0, 0, 0, 0) : now - days * DAY, prevStart = start - (now - start)
  const ev = (a, b) => events.filter((e) => e.t >= a && e.t < b), od = (a, b) => orders.filter((o) => valid(o) && o.date >= a && o.date < b)
  const n = (arr, t) => arr.filter((e) => e.type === t).length
  const mk = (e, o) => ({ visitors: n(e, 'visit'), views: n(e, 'view'), clicks: n(e, 'wa_click'), orders: o.length, revenue: sum(o) })
  const cur = ev(start, now + 1), stats = mk(cur, od(start, now + 1)), prev = mk(ev(prevStart, start), od(prevStart, start))
  const delta = Object.fromEntries(Object.keys(stats).map((k) => [k, prev[k] > 0 ? Math.round(((stats[k] - prev[k]) / prev[k]) * 100) : null]))
  const bucket = days === 1 ? 36e5 : days <= 30 ? DAY : days <= 90 ? 7 * DAY : 30 * DAY, count = Math.max(1, Math.ceil((now - start) / bucket))
  const series = Array.from({ length: count }, (_, i) => { const a = start + i * bucket, o = od(a, a + bucket), d = new Date(a)
    return { label: days === 1 ? d.getHours() + 'h' : days > 90 ? d.toLocaleDateString('fr-FR', { month: 'short' }) : d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }), orders: o.length, revenue: sum(o) } })
  const vis = cur.filter((e) => e.type === 'visit'), m = {}; vis.forEach((e) => { const k = e.src || 'Direct'; m[k] = (m[k] || 0) + 1 })
  const sources = Object.entries(m).map(([k, v]) => [k, Math.round((v / vis.length) * 100)]).sort((a, b) => b[1] - a[1])
  return { stats, delta, series, sources, empty: !events.length && !orders.length }
}
export function productStats(events, orders) {
  const m = {}, g = (id) => (m[id] ||= { views: 0, clicks: 0, orders: 0, revenue: 0 })
  events.forEach((e) => { if (e.product) { if (e.type === 'view') g(e.product).views++; if (e.type === 'wa_click') g(e.product).clicks++ } })
  orders.filter(valid).forEach((o) => { const s = g(o.productId); s.orders++; s.revenue += +o.amount || 0 })
  return m
}
