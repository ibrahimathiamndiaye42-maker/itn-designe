import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, ShoppingCart, MessageCircle, Info } from 'lucide-react'
import Badge from '../components/Badge'
import { getProductById } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatFCFA, buildSimpleWhatsAppLink } from '../utils/whatsapp'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const addItem = useCart((s) => s.addItem)

  if (!product) return <Navigate to="/produits" replace />

  const isOnOrder = product.status === 'disponible_sur_commande'

  const whatsappLink = buildSimpleWhatsAppLink(
    `Bonjour ITN_Designe, je suis intéressé(e) par : ${product.name} (${formatFCFA(product.price)}). Est-il disponible ?`
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-ink/50">
        <Link to="/produits" className="hover:text-ink">Produits</Link>
        <span className="mx-2">/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Galerie */}
        <div>
          <div className="aspect-[4/3] overflow-hidden border border-line bg-line/30">
            <img src={product.images[activeImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 overflow-hidden border ${
                    i === activeImage ? 'border-wood' : 'border-line'
                  }`}
                  aria-label={`Voir la photo ${i + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Infos */}
        <div>
          <span className="text-xs uppercase tracking-wide text-wood/70">{product.subcategory}</span>
          <h1 className="mt-1 font-display text-3xl text-ink">{product.name}</h1>
          <p className="mt-1 text-xs text-ink/40">Réf. {product.ref}</p>

          <div className="mt-4"><Badge status={product.status} /></div>

          <p className="mt-5 font-display text-3xl text-wood-dark">{formatFCFA(product.price)}</p>

          <p className="mt-5 text-ink/75">{product.description}</p>

          {product.videos?.length > 0 && (
  <div className="mt-6">
    <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-ink/60">
      Vidéo{product.videos.length > 1 ? 's' : ''}
    </h2>
    <div className="grid gap-3 sm:grid-cols-2">
      {product.videos.map((src) => (
        <video
          key={src}
          src={src}
          controls
          preload="metadata"
          className="aspect-video w-full border border-line bg-line/30"
        />
      ))}
    </div>
  </div>
)}

          {product.features?.length > 0 && (
            <ul className="mt-5 space-y-1.5 text-sm text-ink/70">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-wood" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          {isOnOrder && (
            <div className="mt-6 flex gap-3 border border-ochre/30 bg-ochre/10 p-4 text-sm text-ochre-dark">
              <Info size={18} className="mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Produit disponible sur commande</p>
                <p className="mt-0.5 text-ochre-dark/80">Contactez-nous pour confirmer le délai et la disponibilité.</p>
              </div>
            </div>
          )}

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center border border-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="p-2.5 text-ink/70 hover:text-ink"
                aria-label="Diminuer la quantité"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="p-2.5 text-ink/70 hover:text-ink"
                aria-label="Augmenter la quantité"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={() => addItem(product, qty)}
              className="flex flex-1 items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-wood-dark"
            >
              <ShoppingCart size={18} />
              Ajouter au panier
            </button>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 border border-pine px-5 py-3 text-sm font-medium text-pine-dark transition-colors hover:bg-pine hover:text-cream"
          >
            <MessageCircle size={18} />
            Commander sur WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
