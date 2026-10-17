import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { create } from 'zustand'
import { Presentation, X, ChevronRight, ChevronLeft } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import { buildSimpleWhatsAppLink } from '../utils/whatsapp'
export const useTour = create((set) => ({ step: null, go: (step) => set({ step }) }))
const P = PRODUCTS[0]
const STEPS = [
  { path: '/produits', t: '1 — Voici ce que voit votre client', d: 'Catalogue, produits, bouton WhatsApp.' },
  { path: `/produits/${P.id}`, t: '2 — Le client choisit un produit', d: 'Repérez le bouton « Commander sur WhatsApp ».' },
  { path: `/produits/${P.id}`, t: '3 — Le client vous contacte directement', d: 'WhatsApp s\'ouvre avec le message du produit.', wa: true },
  { path: '/business', t: '4 — Maintenant regardez ce que voit le commerçant', d: 'Bienvenue dans ITN BUSINESS.' },
  { path: '/business', t: '5 — Vous savez enfin ce qui fonctionne', d: 'Visiteurs, clics WhatsApp, commandes, chiffre d\'affaires, conversion.' },
  { path: '/business/commandes', t: '6 — Clients, commandes, stock, factures', d: 'Tout est organisé : fini les messages perdus.' },
  { path: '/business/insights', t: '7 — ITN Insights', d: 'ITN Business ne vous montre pas seulement des chiffres. Il vous aide à les comprendre.' },
  { path: '/business/conclusion', t: '8 — Votre commerce peut avoir le même système', d: '' },
]
export default function DemoTour() {
  const { step, go } = useTour(); const nav = useNavigate(); const loc = useLocation(); const [wa, setWa] = useState(false)
  useEffect(() => { if (step != null) { nav(STEPS[step].path); setWa(!!STEPS[step].wa) } }, [step])
  useEffect(() => { if (loc.pathname === '/demo') go(0) }, [loc.pathname])
  if (step == null) return !loc.pathname.startsWith('/business') && (
    <button onClick={() => go(0)} className="fixed bottom-5 left-4 z-50 flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-lg"><Presentation size={16} />Mode démo</button>)
  const s = STEPS[step], msg = `Bonjour ITN Design & Création 👋\n\nJe suis intéressé(e) par :\n${P.name}\nRéférence : ${P.ref}\n\nEst-elle actuellement disponible ?`
  return (<>
    {wa && <div className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4"><div className="w-full max-w-sm overflow-hidden rounded-3xl bg-[#efeae2] shadow-2xl"><div className="bg-[#075e54] p-3 text-sm font-semibold text-white">ITN Design & Création</div><div className="p-4"><div className="whitespace-pre-line rounded-xl rounded-tr-none bg-[#d9fdd3] p-3 text-sm text-slate-800">{msg}</div><a target="_blank" rel="noreferrer" href={buildSimpleWhatsAppLink(msg)} className="mt-4 block rounded-xl bg-emerald-600 py-3 text-center text-sm font-bold text-white">Ouvrir le vrai WhatsApp</a></div></div></div>}
    <div className="fixed inset-x-3 bottom-20 z-[70] mx-auto max-w-lg rounded-2xl bg-slate-900 p-4 text-white shadow-2xl md:bottom-4">
      <div className="flex items-start justify-between gap-2"><div><p className="text-sm font-bold">{s.t}</p>{s.d && <p className="mt-1 text-xs text-slate-300">{s.d}</p>}</div><button onClick={() => go(null)} aria-label="Quitter"><X size={18} /></button></div>
      <div className="mt-3 flex items-center justify-between"><button disabled={step === 0} onClick={() => go(step - 1)} className="flex items-center text-xs disabled:opacity-30"><ChevronLeft size={16} />Retour</button>
        <div className="flex gap-1">{STEPS.map((_, i) => <i key={i} className={`h-1.5 w-1.5 rounded-full ${i === step ? 'bg-indigo-400' : 'bg-slate-600'}`} />)}</div>
        {step < STEPS.length - 1 ? <button onClick={() => go(step + 1)} className="flex items-center rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-bold">Suivant<ChevronRight size={16} /></button> : <button onClick={() => go(null)} className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold">Terminer</button>}</div></div></>)
}
