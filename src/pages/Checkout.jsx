import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatFCFA, buildOrderWhatsAppLink } from '../utils/whatsapp'

export default function Checkout() {
  const items = useCart((s) => s.items)
  const totalPrice = useCart((s) => s.totalPrice())
  const clearCart = useCart((s) => s.clearCart)

  const [customer, setCustomer] = useState({ name: '', phone: '', address: '', comment: '' })
  const [sent, setSent] = useState(false)

  if (items.length === 0 && !sent) return <Navigate to="/panier" replace />

  const handleChange = (e) => {
    setCustomer((c) => ({ ...c, [e.target.name]: e.target.value }))
  }

  const isValid = customer.name.trim() && customer.phone.trim() && customer.address.trim()

  const handleSend = () => {
    if (!isValid) return
    const link = buildOrderWhatsAppLink({ items, total: totalPrice, customer })
    window.open(link, '_blank', 'noopener,noreferrer')
    setSent(true)
    clearCart()
  }

  if (sent) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pine/10">
          <MessageCircle className="text-pine" size={28} />
        </div>
        <h1 className="mt-5 font-display text-2xl text-ink">Commande envoyée sur WhatsApp</h1>
        <p className="mt-2 text-ink/60">
          Un onglet WhatsApp s'est ouvert avec le récapitulatif de votre commande. Notre équipe vous
          confirmera la disponibilité et les modalités de livraison.
        </p>
        <Link to="/produits" className="mt-6 inline-flex bg-ink px-5 py-3 text-sm font-medium text-cream hover:bg-wood-dark">
          Continuer mes achats
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl text-ink">Vos informations</h1>
      <p className="mt-2 text-ink/60">Ces informations seront incluses dans le message WhatsApp envoyé à ITN_Designe.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSend() }}
          className="space-y-4"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-ink/80">Nom complet *</label>
            <input
              name="name" value={customer.name} onChange={handleChange} required
              className="w-full border border-line bg-cream px-3 py-2.5 text-sm outline-none focus:border-wood"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink/80">Numéro WhatsApp *</label>
            <input
              name="phone" value={customer.phone} onChange={handleChange} required
              className="w-full border border-line bg-cream px-3 py-2.5 text-sm outline-none focus:border-wood"
              placeholder="77 000 00 00"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink/80">Ville / quartier — adresse de livraison *</label>
            <input
              name="address" value={customer.address} onChange={handleChange} required
              className="w-full border border-line bg-cream px-3 py-2.5 text-sm outline-none focus:border-wood"
              placeholder="Ex : Parcelles Assainies, Dakar"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink/80">Commentaire (facultatif)</label>
            <textarea
              name="comment" value={customer.comment} onChange={handleChange} rows={3}
              className="w-full border border-line bg-cream px-3 py-2.5 text-sm outline-none focus:border-wood"
              placeholder="Précisions utiles pour votre commande"
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="flex w-full items-center justify-center gap-2 bg-pine px-5 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-pine-dark disabled:cursor-not-allowed disabled:opacity-40"
          >
            <MessageCircle size={18} />
            Envoyer la commande sur WhatsApp
          </button>
        </form>

        <div className="h-fit border border-line bg-cream p-5">
          <h2 className="font-display text-lg text-ink">Récapitulatif</h2>
          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-ink/75">{item.name} × {item.qty}</span>
                <span className="font-medium text-ink">{formatFCFA(item.price * item.qty)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-line pt-4">
            <span className="text-ink/70">Total</span>
            <span className="font-display text-xl text-wood-dark">{formatFCFA(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
