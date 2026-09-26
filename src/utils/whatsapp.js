import { WHATSAPP_NUMBER } from '../config'

export function formatFCFA(amount) {
  return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA'
}

// Construit le lien WhatsApp avec un message prérempli reprenant
// le récapitulatif de la commande.
export function buildOrderWhatsAppLink({ items, total, customer }) {
  const lines = []
  lines.push('Bonjour ITN_Designe,')
  lines.push('')
  lines.push('Je souhaite passer une commande.')
  lines.push('')
  lines.push(`Nom : ${customer.name || '-'}`)
  lines.push(`Téléphone : ${customer.phone || '-'}`)
  lines.push(`Adresse / quartier : ${customer.address || '-'}`)
  if (customer.comment) {
    lines.push(`Commentaire : ${customer.comment}`)
  }
  lines.push('')
  lines.push('Produits :')
  items.forEach((item) => {
    lines.push(`- ${item.name} × ${item.qty} = ${formatFCFA(item.price * item.qty)}`)
  })
  lines.push('')
  lines.push(`Total estimé : ${formatFCFA(total)}`)
  lines.push('')
  lines.push('Merci de me confirmer la disponibilité et les modalités de livraison.')

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

// // Lien WhatsApp simple (bouton flottant, page contact, produit seul)
// export function buildSimpleWhatsAppLink(message) {
//   const text = encodeURIComponent(message)
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
// }
// Lien WhatsApp simple (bouton flottant, page contact, produit seul)
export function buildSimpleWhatsAppLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

// Message WhatsApp générique OU, si le panier contient des articles,
// message reprenant automatiquement les produits et leurs quantités.
// Utilisé par le header et le bouton WhatsApp flottant.
export function buildCartAwareWhatsAppLink(items, total) {
  if (!items || items.length === 0) {
    return buildSimpleWhatsAppLink(
      "Bonjour ITN_Designe, je souhaite avoir des renseignements sur vos produits."
    )
  }

  const lines = []
  lines.push('Bonjour ITN_Designe,')
  lines.push('')
  lines.push('Voici les produits qui m\'intéressent :')
  lines.push('')
  items.forEach((item) => {
    lines.push(`- ${item.name} × ${item.qty} = ${formatFCFA(item.price * item.qty)}`)
  })
  lines.push('')
  lines.push(`Total estimé : ${formatFCFA(total)}`)
  lines.push('')
  lines.push('Merci de me confirmer la disponibilité.')

  const text = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}