import { Link } from 'react-router-dom'
import { Hammer, Sofa, Users, Award } from 'lucide-react'
import { COMPANY } from '../config'

export default function About() {
  return (
    <div>
      <section className="border-b border-line bg-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl text-ink">À propos de {COMPANY.name}</h1>
            <p className="mt-5 text-ink/75">
              {COMPANY.fullName} est une entreprise spécialisée dans la vente de produits
              pour la chambre à coucher et le salon. Nous proposons des solutions adaptées a vos besoins et a votre budget
            </p>
            <p className="mt-4 text-ink/75">
              De la chambre à coucher au salon, nous accompagnons chaque projet avec des
              produits sélectionnés pour leur qualité et leur durabilité, et un service de
              commande simple via WhatsApp.
            </p>
            <p className="mt-6 font-display text-lg italic text-pine-dark">{COMPANY.slogan}</p>
            <Link
              to="/produits"
              className="mt-6 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-cream hover:bg-wood-dark"
            >
              Découvrir nos produits
            </Link>
          </div>
          <img
            src="/images/imageHOME/WhatsApp Image 2026-09-04 at 22.02.48.jpeg"
            alt={COMPANY.fullName}
            className="aspect-[4/3.4] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: Sofa, label: 'Chambre à coucher soignée' },
            { icon: Hammer, label: 'Matériaux robustes' },
            { icon: Users, label: 'Service client réactif' },
            { icon: Award, label: 'Qualité et durabilité' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="border border-line p-6">
              <Icon className="text-wood" size={28} />
              <p className="mt-3 text-sm font-medium text-ink">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
