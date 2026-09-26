import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock } from 'lucide-react'
import { COMPANY } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-wood-dark text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <span className="font-display text-xl font-semibold text-cream">{COMPANY.name}</span>
          <p className="mt-2 max-w-xs text-sm text-cream/70">{COMPANY.slogan}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cream/60">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/produits" className="hover:text-cream">Produits</Link></li>
            <li><Link to="/produits?categorie=ameublement" className="hover:text-cream">Ameublement</Link></li>
            <li><Link to="/produits?categorie=construction" className="hover:text-cream">Construction</Link></li>
            <li><Link to="/a-propos" className="hover:text-cream">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cream/60">Contact</h3>
          <ul className="space-y-2 text-sm text-cream/85">
            <li className="flex items-center gap-2"><Phone size={15} /> {COMPANY.phone}</li>
            <li className="flex items-center gap-2"><MapPin size={15} /> {COMPANY.address}</li>
            <li className="flex items-center gap-2"><Clock size={15} /> {COMPANY.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {COMPANY.fullName}. Tous droits réservés.
      </div>
    </footer>
  )
}
