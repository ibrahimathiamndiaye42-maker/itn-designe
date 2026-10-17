import { Phone, MapPin, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react'
import { COMPANY, WHATSAPP_NUMBER, SOCIALS } from '../config'
import { buildSimpleWhatsAppLink } from '../utils/whatsapp'

export default function Contact() {
  const whatsappLink = buildSimpleWhatsAppLink(
    "Bonjour ITN_Designe, je souhaite avoir des renseignements."
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl text-ink">Contactez {COMPANY.name}</h1>
      <p className="mt-3 max-w-prose text-ink/70">
        Une question sur un produit, une commande ou une livraison ? Notre équipe vous répond
        rapidement sur WhatsApp.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 text-wood" size={20} />
            <div>
              <p className="font-medium text-ink">Téléphone / WhatsApp</p>
              <p className="text-ink/70">{COMPANY.phone} · {COMPANY.phoneAlt}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 text-wood" size={20} />
            <div>
              <p className="font-medium text-ink">Adresse</p>
              <p className="text-ink/70">{COMPANY.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 text-wood" size={20} />
            <div>
              <p className="font-medium text-ink">Horaires</p>
              <p className="text-ink/70">{COMPANY.hours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Facebook className="mt-0.5 text-wood" size={20} />
            <div>
              <p className="font-medium text-ink">Réseaux sociaux</p>
              <p className="flex flex-wrap gap-x-4 text-ink/70">
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Instagram</a>
                <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">Facebook</a>
                <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="underline hover:text-ink">TikTok</a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pine px-5 py-3 text-sm font-medium text-cream hover:bg-pine-dark"
            >
              <MessageCircle size={18} />
              Écrire sur WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 border border-ink/20 px-5 py-3 text-sm font-medium text-ink hover:border-ink/40"
            >
              <Phone size={18} />
              Appeler
            </a>
          </div>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden border border-line">
          <iframe
            title="Localisation ITN_Designe"
            src="https://www.google.com/maps?q=Dakar,Senegal&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
