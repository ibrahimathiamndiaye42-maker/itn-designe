import { supabase } from './supabase'
const T = ['orders', 'products', 'customers', 'invoices']
const idOf = (r) => String(r.id || r.no)
const log = ({ error }) => error && console.error('Supabase :', error.message)
export async function loadAll() {
  const out = {}
  for (const t of T) { const { data, error } = await supabase.from(t).select('data'); if (error) throw error; out[t] = data.map((r) => r.data) }
  return out
}
export const saveRow = (t, row) => supabase && supabase.from(t).upsert({ id: idOf(row), data: row }).then(log)
export const saveMany = (t, rows) => supabase && rows.length && supabase.from(t).upsert(rows.map((r) => ({ id: idOf(r), data: r }))).then(log)
export const wipeAll = () => Promise.all(T.map((t) => supabase.from(t).delete().neq('id', '')))
