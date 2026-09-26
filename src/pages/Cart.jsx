import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatFCFA } from '../utils/whatsapp'

export default function Cart() {
  const items = useCart((s) => s.items)
  const updateQty = useCart((s) => s.updateQty)
  const removeItem = useCart((s) => s.removeItem)
  const totalPrice = useCart((s) => s.totalPrice())

  if (items.length === 0) {
    return (
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <ShoppingBag className="text-ink/30" size={48} />
        <h1 className="mt-4 font-display text-2xl text-ink">Votre panier est vide</h1>
        <p className="mt-2 text-ink/60">Parcourez notre catalogue pour trouver ce qu'il vous faut.</p>
        <Link
          to="/produits"
          className="mt-6 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-cream hover:bg-wood-dark"
        >
          Voir nos produits
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl text-ink">Panier</h1>

      <div className="mt-8 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 py-5">
            <img src={item.image} alt={item.name} className="h-20 w-20 shrink-0 object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-ink">{item.name}</p>
              <p className="text-sm text-ink/60">{formatFCFA(item.price)} l'unité</p>
            </div>

            <div className="flex items-center border border-line">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="p-2 text-ink/70 hover:text-ink"
                aria-label="Diminuer la quantité"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="p-2 text-ink/70 hover:text-ink"
                aria-label="Augmenter la quantité"
              >
                <Plus size={14} />
              </button>
            </div>

            <p className="hidden w-28 text-right font-display text-wood-dark sm:block">
              {formatFCFA(item.price * item.qty)}
            </p>

            <button
              onClick={() => removeItem(item.id)}
              className="p-2 text-ink/40 hover:text-red-600"
              aria-label={`Supprimer ${item.name} du panier`}
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-ink/70">Total</span>
        <span className="font-display text-2xl text-wood-dark">{formatFCFA(totalPrice)}</span>
      </div>

      <Link
        to="/commande"
        className="mt-6 flex w-full items-center justify-center gap-2 bg-pine px-5 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-pine-dark sm:w-auto sm:px-10"
      >
        Passer la commande
      </Link>
    </div>
  )
}
