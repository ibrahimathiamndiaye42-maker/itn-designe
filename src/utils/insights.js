// ITN Insights : règles simples appliquées à vos données réelles (pas d'IA).
import { compute, productStats } from './metrics'
import { fmt } from '../data/demo'
const DAY = 864e5
export const lastOrderDate = (c, orders) => Math.max(c.since || 0, ...orders.filter((o) => o.customerId === c.id && o.status !== 'Annulée').map((o) => o.date))
export const inactive = (customers, orders) => customers.filter((c) => Date.now() - lastOrderDate(c, orders) > 30 * DAY)
export const customerStats = (c, orders) => { const os = orders.filter((o) => o.customerId === c.id && o.status !== 'Annulée'); return { n: os.length, total: os.reduce((s, o) => s + (+o.amount || 0), 0), last: os[0] } }
export function buildInsights({ products, customers, orders, events }) {
  const out = [], ps = productStats(events, orders), w = compute(events, orders, 7), m = compute(events, orders, 30)
  const name = (id) => products.find((p) => p.id === id)?.name || id
  if (m.stats.clicks > 0) out.push({ k: 'Conversion', c: 'amber', t: `Sur 30 jours : ${m.stats.visitors} visiteurs, ${m.stats.clicks} clics WhatsApp, ${m.stats.orders} commande(s). ${m.stats.clicks > m.stats.orders ? 'Relancez les personnes qui vous ont écrit sans acheter.' : ''}` })
  const weak = Object.entries(ps).filter(([, s]) => s.views >= 10 && s.orders === 0).sort((a, b) => b[1].views - a[1].views)[0]
  if (weak) out.push({ k: 'Opportunité', c: 'amber', t: `${name(weak[0])} a reçu ${weak[1].views} vues et ${weak[1].clicks} clics WhatsApp mais aucune commande. Essayez de meilleures photos ou un prix promotionnel.` })
  if (w.delta.revenue != null) out.push({ k: w.delta.revenue >= 0 ? 'Bonne performance' : 'Attention', c: w.delta.revenue >= 0 ? 'emerald' : 'rose', t: `Votre chiffre d'affaires ${w.delta.revenue >= 0 ? 'a augmenté' : 'a baissé'} de ${Math.abs(w.delta.revenue)} % par rapport à la semaine précédente.` })
  if (m.sources[0]) out.push({ k: 'Marketing', c: 'indigo', t: `${m.sources[0][0]} génère actuellement ${m.sources[0][1]} % de vos visiteurs (30 jours).` })
  products.filter((p) => p.stock === 0).slice(0, 2).forEach((p) => out.push({ k: 'Stock', c: 'rose', t: `${p.name} est en rupture : les clients ne peuvent plus le commander.` }))
  products.filter((p) => p.stock > 0 && p.stock <= 2).slice(0, 2).forEach((p) => out.push({ k: 'Stock', c: 'orange', t: `${p.name} risque d'être en rupture (${p.stock} restant${p.stock > 1 ? 's' : ''}).` }))
  const nop = products.filter((p) => !p.price).length
  if (nop) out.push({ k: 'À compléter', c: 'sky', t: `${nop} produit(s) n'ont pas de prix dans ITN Business : renseignez-les pour calculer votre chiffre d'affaires.` })
  const n = inactive(customers, orders).length
  if (n) out.push({ k: 'Client', c: 'violet', t: `${n} client(s) n'ont pas commandé depuis plus de 30 jours. Une relance WhatsApp pourrait être intéressante.` })
  const top = Object.entries(ps).sort((a, b) => b[1].views - a[1].views)[0]
  if (top && top[1].views > 0) out.push({ k: 'Produit star', c: 'sky', t: `${name(top[0])} est votre produit le plus consulté (${top[1].views} vues).` })
  if (!out.length) out.push({ k: 'Bienvenue', c: 'indigo', t: "Pas encore assez de données. Partagez votre lien (Instagram, TikTok, WhatsApp) : les conseils apparaîtront dès les premières visites et commandes." })
  return out
}
