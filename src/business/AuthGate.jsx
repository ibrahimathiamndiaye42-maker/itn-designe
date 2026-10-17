import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import { useBiz } from './store'
export const signOut = () => supabase && supabase.auth.signOut()
export default function AuthGate({ children }) {
  const [session, setSession] = useState(undefined), [email, setEmail] = useState(''), [pw, setPw] = useState(''), [err, setErr] = useState(''), hydrate = useBiz((s) => s.hydrate), ready = useBiz((s) => s.ready)
  useEffect(() => { if (!supabase) return; supabase.auth.getSession().then(({ data }) => setSession(data.session)); const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s)); return () => data.subscription.unsubscribe() }, [])
  useEffect(() => { if (session) hydrate() }, [session])
  if (!supabase) return children
  if (session === undefined) return <div className="grid min-h-screen place-items-center text-sm text-slate-500">Chargement…</div>
  if (!session) {
    const login = async (e) => { e.preventDefault(); const { error } = await supabase.auth.signInWithPassword({ email, password: pw }); setErr(error ? 'Email ou mot de passe incorrect.' : '') }
    return (<div className="grid min-h-screen place-items-center bg-slate-50 p-4"><form onSubmit={login} className="w-full max-w-sm space-y-3 rounded-3xl bg-white p-6 shadow-lg">
      <div className="flex items-center gap-2"><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 font-black text-white">ITN</span><div><b>ITN BUSINESS</b><p className="text-xs text-slate-500">Connexion propriétaire</p></div></div>
      <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
      <input type="password" required placeholder="Mot de passe" value={pw} onChange={(e) => setPw(e.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
      {err && <p className="text-xs text-rose-600">{err}</p>}<button className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white">Se connecter</button></form></div>)
  }
  return ready ? children : <div className="grid min-h-screen place-items-center text-sm text-slate-500">Chargement de vos données…</div>
}
