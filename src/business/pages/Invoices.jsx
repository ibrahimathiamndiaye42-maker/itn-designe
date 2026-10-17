import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card, Btn, Ghost, inputCls } from '../components/ui'
import { useBiz } from '../store'
import { fmt, fdate } from '../../data/demo'
import { COMPANY } from '../../config'
function printInvoice(i) {
  const w = window.open('', '_blank'); if (!w) return alert('Autorisez les fenêtres pop-up pour générer le PDF.')
  w.document.write(`<html><head><title>${i.no}</title><style>body{font-family:Arial;padding:40px;color:#222}h1{margin:0}table{width:100%;border-collapse:collapse;margin-top:24px}td,th{padding:10px;border-bottom:1px solid #ddd;text-align:left}.r{text-align:right}.t{font-size:20px;font-weight:bold}</style></head><body><h1>${COMPANY.fullName}</h1><p>${COMPANY.address} · ${COMPANY.phone}</p><h2>FACTURE ${i.no}</h2><p>Date : ${fdate(i.date)}<br>Client : ${i.client}</p><table><tr><th>Produit</th><th>Qté</th><th class="r">Prix</th></tr><tr><td>${i.product}</td><td>${i.qty}</td><td class="r">${fmt(i.price)}</td></tr></table><p class="r">Sous-total : ${fmt(i.sub)}<br>Réduction : −${fmt(i.discount)}<br>Livraison : ${fmt(i.delivery)}</p><p class="r t">TOTAL : ${fmt(i.total)}</p><p style="margin-top:40px;font-size:12px;color:#888">Facture générée avec ITN Business.</p><script>window.onload=()=>window.print()</script></body></html>`); w.document.close()
}
export default function Invoices() {
  const { customers, products, invoices, addInvoice } = useBiz(); const [sp] = useSearchParams()
  const [f, setF] = useState({ client: sp.get('client') || customers[0]?.id || '', product: products[0].id, qty: 1, discount: 0, delivery: 0 }); const [last, setLast] = useState(null)
  const p = products.find((x) => x.id === f.product), unit = +f.price || p.price, sub = unit * f.qty, total = Math.max(0, sub - +f.discount + +f.delivery)
  const gen = () => { if (!f.client) return alert('Créez d\'abord un client (via une commande).'); const inv = { no: 'FAC-' + String(101 + invoices.length).padStart(5, '0'), date: Date.now(), client: customers.find((c) => c.id === f.client)?.name || '', product: p.name, qty: +f.qty, price: unit, sub, discount: +f.discount, delivery: +f.delivery, total }; addInvoice(inv); setLast(inv); printInvoice(inv) }
  const share = (i) => `https://wa.me/?text=${encodeURIComponent(`Bonjour ${i.client}, voici votre facture ${i.no} de ${COMPANY.fullName} : ${i.product} × ${i.qty}. Total : ${fmt(i.total)}. Merci pour votre confiance !`)}`
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  return (
    <div className="space-y-4"><div><h1 className="text-2xl font-bold">Factures</h1><p className="text-sm text-slate-500">Créez une facture propre en quelques secondes.</p></div>
      <div className="grid gap-4 lg:grid-cols-2"><Card title="Nouvelle facture"><div className="space-y-2">
        <select className={inputCls} value={f.client} onChange={set('client')}>{customers.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
        <select className={inputCls} value={f.product} onChange={set('product')}>{products.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select>
        <label className="block text-xs">Prix unitaire (FCFA)<input type="number" min="0" className={inputCls} placeholder={p.price || 'ex. 450000'} value={f.price || ''} onChange={set('price')} /></label>
        <div className="grid grid-cols-3 gap-2"><label className="text-xs">Quantité<input type="number" min="1" className={inputCls} value={f.qty} onChange={set('qty')} /></label><label className="text-xs">Réduction<input type="number" min="0" className={inputCls} value={f.discount} onChange={set('discount')} /></label><label className="text-xs">Livraison<input type="number" min="0" className={inputCls} value={f.delivery} onChange={set('delivery')} /></label></div>
        <div className="rounded-xl bg-slate-50 p-3 text-sm"><div className="flex justify-between"><span>Sous-total</span><b>{fmt(sub)}</b></div><div className="flex justify-between"><span>Réduction</span><b>−{fmt(+f.discount)}</b></div><div className="flex justify-between"><span>Livraison</span><b>{fmt(+f.delivery)}</b></div><div className="mt-1 flex justify-between border-t pt-1 text-base"><span>TOTAL</span><b>{fmt(total)}</b></div></div>
        <Btn className="w-full" onClick={gen}>GÉNÉRER LA FACTURE PDF</Btn></div></Card>
        <Card title="Factures créées">{invoices.length === 0 && <p className="text-sm text-slate-400">Aucune facture pour l'instant.</p>}{invoices.map((i) => <div key={i.no} className="flex items-center justify-between border-b border-slate-100 py-2 text-sm last:border-0"><span><b>{i.no}</b> · {i.client}<br /><span className="text-xs text-slate-500">{fmt(i.total)}</span></span><span className="flex gap-1"><Ghost className="!px-3 !py-1.5 !text-xs" onClick={() => printInvoice(i)}>Télécharger</Ghost><a target="_blank" rel="noreferrer" href={share(i)} className="rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">WhatsApp</a></span></div>)}{last && <p className="mt-2 text-xs text-emerald-700">✓ {last.no} créée — enregistrez-la en PDF depuis la fenêtre d'impression.</p>}</Card></div></div>)
}
