import { BRAND } from '../../config'
import { buildSimpleWhatsAppLink } from '../../utils/whatsapp'
const L = ['Mini-site professionnel', 'Catalogue digital', 'Commandes WhatsApp', 'Gestion clients', 'Gestion commandes', 'Gestion stock', 'Factures PDF', 'QR Code boutique', 'Statistiques', 'Tableau de bord']
export default function Conclusion() {
  return (<div className="grid min-h-[80vh] place-items-center rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-6 text-center text-white">
    <div className="max-w-xl"><p className="text-xs font-bold tracking-[.3em] text-indigo-300">ITN BUSINESS</p><h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">VOTRE COMMERCE PEUT AVOIR LE MÊME SYSTÈME.</h1>
      <p className="mt-4 text-indigo-100">Votre catalogue. Vos clients. Vos commandes. Vos factures. Vos statistiques. Un seul espace.</p>
      <ul className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-2 text-left text-sm sm:grid-cols-2">{L.map((x) => <li key={x}><span className="text-emerald-400">✓</span> {x}</li>)}</ul>
      <a target="_blank" rel="noreferrer" href={buildSimpleWhatsAppLink('Bonjour, je souhaite digitaliser mon commerce avec ITN Business.')} className="mt-8 inline-block rounded-2xl bg-emerald-500 px-8 py-4 text-lg font-extrabold shadow-lg hover:bg-emerald-400">DIGITALISER MON COMMERCE</a>
      <p className="mt-6 text-xs text-indigo-300">Propulsé par ITN Business</p></div></div>)
}
