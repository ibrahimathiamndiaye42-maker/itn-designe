// Suivi réel des visiteurs. Enregistre dans Supabase (tous appareils) et, en secours, dans le navigateur.
import { supabase } from './supabase'
const KEY = 'itn-events'
const local = () => { try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] } }
export function track(type, data = {}) {
  const ev = local(); ev.push({ type, t: Date.now(), ...data })
  try { localStorage.setItem(KEY, JSON.stringify(ev.slice(-3000))) } catch {}
  if (supabase) supabase.from('events').insert({ type, data }).then(() => {})
}
// Origine du visiteur : ?src=instagram (ou utm_source) sinon le site de provenance, sinon Direct.
function detectSource() {
  const q = new URLSearchParams(location.search), raw = (q.get('src') || q.get('utm_source') || '').toLowerCase() || (document.referrer ? new URL(document.referrer).hostname.toLowerCase() : '')
  if (!raw || raw.includes(location.hostname)) return 'Direct'
  const map = [['instagram', 'Instagram'], ['tiktok', 'TikTok'], ['facebook', 'Facebook'], ['fb', 'Facebook'], ['google', 'Google'], ['whatsapp', 'WhatsApp'], ['wa.me', 'WhatsApp']]
  const hit = map.find(([k]) => raw.includes(k)); return hit ? hit[1] : 'Autre'
}
export function initAnalytics() {
  if (!sessionStorage.getItem('itn-session') && !location.pathname.startsWith('/business')) { sessionStorage.setItem('itn-session', '1'); track('visit', { src: detectSource() }) }
  document.addEventListener('click', (ev) => {
    const a = ev.target.closest && ev.target.closest('a[href*="wa.me"]'); if (!a || location.pathname.startsWith('/business')) return
    const m = location.pathname.match(/\/produits\/(.+)$/)
    track('wa_click', { product: m ? decodeURIComponent(m[1]) : null, page: location.pathname })
  }, true)
}
// Tous les événements, normalisés : { type, t, product, src }
export async function fetchEvents() {
  if (!supabase) return local()
  const out = []
  for (let i = 0; i < 20; i++) {
    const { data, error } = await supabase.from('events').select('type,data,created_at').order('created_at', { ascending: false }).range(i * 1000, i * 1000 + 999)
    if (error || !data.length) break
    out.push(...data.map((r) => ({ type: r.type, t: Date.parse(r.created_at), ...(r.data || {}) }))); if (data.length < 1000) break
  }
  return out
}
export async function resetAllEvents() { localStorage.removeItem(KEY); if (supabase) await supabase.from('events').delete().neq('type', '') }
