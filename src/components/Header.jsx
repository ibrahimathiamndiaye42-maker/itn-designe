import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ShoppingCart, MessageCircle } from 'lucide-react'
// import { useCart } from '../context/CartContext'
// import { buildSimpleWhatsAppLink } from '../utils/whatsapp'
import { useCart } from '../context/CartContext'
import { buildCartAwareWhatsAppLink } from '../utils/whatsapp'

const NAV_LINKS = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/produits', label: 'Produits' },
  { to: '/produits?categorie=ameublement', label: 'Ameublement' },
  { to: '/produits?categorie=construction', label: 'Construction' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  // const [open, setOpen] = useState(false)
  // const totalItems = useCart((s) => s.totalItems())

  // const whatsappLink = buildSimpleWhatsAppLink(
  //   "Bonjour ITN_Designe, je souhaite avoir des renseignements sur vos produits."
  // )
    const [open, setOpen] = useState(false)
  const totalItems = useCart((s) => s.totalItems())
  const cartItems = useCart((s) => s.items)
  const cartTotal = useCart((s) => s.totalPrice())

  const whatsappLink = buildCartAwareWhatsAppLink(cartItems, cartTotal)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight text-wood-dark sm:text-2xl">
          ITN_Designe
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-pine-dark' : 'text-ink/75 hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-pine px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-pine-dark sm:inline-flex"
          >
            <MessageCircle size={16} />
            Commander sur WhatsApp
          </a>

          <Link to="/panier" className="relative p-2 text-ink" aria-label="Voir le panier">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-ochre text-[10px] font-semibold text-cream">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="p-2 text-ink lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-cream px-4 py-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded px-2 py-2.5 text-sm font-medium ${
                  isActive ? 'bg-pine/10 text-pine-dark' : 'text-ink/80'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-pine px-4 py-2.5 text-sm font-medium text-cream"
          >
            <MessageCircle size={16} />
            Commander sur WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
