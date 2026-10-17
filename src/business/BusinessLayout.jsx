import { NavLink, Outlet, Link } from 'react-router-dom'
import { LayoutDashboard, ShoppingBag, Users, Package, FileText, Megaphone, Lightbulb, QrCode, Store, Presentation } from 'lucide-react'
import { BRAND } from '../config'
import { supabase } from '../services/supabase'
import { signOut } from './AuthGate'
const NAV = [['/business', 'Tableau de bord', LayoutDashboard, true], ['/business/commandes', 'Commandes', ShoppingBag], ['/business/clients', 'Clients', Users],
  ['/business/produits', 'Produits & Stock', Package], ['/business/factures', 'Factures', FileText], ['/business/marketing', 'Marketing', Megaphone],
  ['/business/insights', 'ITN Insights', Lightbulb], ['/business/qr', 'QR Code', QrCode]]
export default function BusinessLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 md:flex">
      <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
        <div className="mb-6 flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-sm font-black text-white">ITN</span>
          <div><p className="text-sm font-extrabold tracking-wide">ITN BUSINESS</p><p className="text-[11px] text-slate-500">Gestion de {BRAND.shopName}</p></div></div>
        <nav className="space-y-1">{NAV.map(([to, label, Icon, end]) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}><Icon size={18} />{label}</NavLink>))}</nav>
        <Link to="/" className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"><Store size={18} />Voir la boutique</Link>
        {supabase && <button onClick={signOut} className="mt-2 w-full rounded-xl px-3 py-2 text-left text-xs text-slate-500 hover:bg-slate-100">Se déconnecter</button>}
        <Link to="/demo" className="mt-2 flex items-center gap-3 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-medium text-white"><Presentation size={18} />Mode démonstration</Link>
      </aside>
      <div className="min-w-0 flex-1 pb-24 md:pb-8">
                <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-xs font-black text-white">ITN</span><b className="text-sm">ITN BUSINESS</b></div>
          <div className="flex gap-2">{supabase && <button onClick={signOut} className="rounded-lg px-2 text-xs text-slate-500">Quitter</button>}<Link to="/" className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold"><Store size={14} />Boutique</Link></div>
        </header>
        <main className="mx-auto max-w-6xl p-4 sm:p-6"><Outlet /></main>
        <nav className="fixed inset-x-0 bottom-0 z-40 flex overflow-x-auto border-t border-slate-200 bg-white/95 px-1 py-1 backdrop-blur md:hidden">
          {NAV.map(([to, label, Icon, end]) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex min-w-[4.6rem] flex-1 flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] font-semibold ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500'}`}><Icon size={20} />{label.split(' ')[0]}</NavLink>))}
        </nav>
      </div>
    </div>)
}
