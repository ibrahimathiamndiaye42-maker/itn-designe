import { Card } from '../components/ui'
import { BRAND } from '../../config'
export default function QRPage() {
  const url = BRAND.siteUrl || location.origin
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=10&data=${encodeURIComponent(url)}`
  return (<div className="space-y-4"><h1 className="text-2xl font-bold">QR Code boutique</h1>
    <Card className="text-center"><img src={qr} alt="QR code du catalogue" className="mx-auto h-64 w-64" /><p className="mt-3 text-lg font-bold">Scannez pour découvrir notre catalogue</p><p className="break-all text-xs text-slate-500">{url}</p>
      <a href={qr} download="qr-itn.png" target="_blank" rel="noreferrer" className="mt-3 inline-block rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white">Télécharger le QR Code</a></Card>
    <Card title="Où l'imprimer ?"><p className="text-sm text-slate-600">Sur votre boutique, vos sacs, cartes de visite, factures, affiches et réseaux sociaux.</p></Card></div>)
}
