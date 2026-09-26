// import { MessageCircle } from 'lucide-react'
// import { buildSimpleWhatsAppLink } from '../utils/whatsapp'

// export default function WhatsAppFloatButton() {
//   const link = buildSimpleWhatsAppLink(
//     "Bonjour ITN_Designe, je souhaite avoir des renseignements sur vos produits."
//   )
import { MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { buildCartAwareWhatsAppLink } from '../utils/whatsapp'

export default function WhatsAppFloatButton() {
  const items = useCart((s) => s.items)
  const total = useCart((s) => s.totalPrice())
  const link = buildCartAwareWhatsAppLink(items, total)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter ITN_Designe sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-cream shadow-lg shadow-ink/20 transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle size={26} />
    </a>
  )
}
