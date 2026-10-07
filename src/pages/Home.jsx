import { Link } from 'react-router-dom'
import { MessageCircle, ArrowRight, Hammer, Sofa, ShieldCheck, Truck } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, PRODUCTS } from '../data/products'
import { buildSimpleWhatsAppLink } from '../utils/whatsapp'
import { COMPANY } from '../config'

const CATEGORY_IMAGES = {
  ameublement: '/images/imageA9/WhatsApp Image 2026-09-24 at 20.44.28.jpeg',
  construction: '/images/imageA10/WhatsApp Image 2026-09-24 at 20.51.17.jpeg',
}

export default function Home() {
  const whatsappLink = buildSimpleWhatsAppLink(
    "Bonjour ITN_Designe, je souhaite avoir des renseignements sur vos produits."
  )
  const featured = PRODUCTS.slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-bg">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <p className="font-display text-sm italic text-pine-dark">{COMPANY.slogan}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
              {COMPANY.name}
            </h1>
            <p className="mt-2 font-display text-xl text-wood-dark sm:text-2xl">
              Votre partenaire pour l'ameublement et les matériaux de construction
            </p>
            <p className="mt-5 max-w-md text-ink/70">
              Découvrez nos meubles, équipements et matériaux pour construire et aménager
              votre maison — partout au Sénégal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produits"
                className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-wood-dark"
              >
                Voir nos produits
                <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-pine px-5 py-3 text-sm font-medium text-pine-dark transition-colors hover:bg-pine hover:text-cream"
              >
                <MessageCircle size={16} />
                Commander sur WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/imageHOME/WhatsApp Image 2026-08-23 at 07.33.40.jpeg"
              alt="Ameublement et matériaux de construction ITN_Designe"
              className="aspect-[4/3.4] w-full object-cover"
            />
            <div className="absolute -bottom-5 -left-5 hidden bg-pine px-5 py-4 text-cream shadow-lg sm:block">
              <p className="font-display text-2xl">{PRODUCTS.length}+</p>
              <p className="text-xs text-cream/80">produits au catalogue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {[
            { icon: Sofa, label: 'Ameublement & construction' },
            { icon: ShieldCheck, label: 'Qualité vérifiée' },
            { icon: Hammer, label: 'Matériaux durables' },
            { icon: Truck, label: 'Livraison à Dakar' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="text-wood" size={26} />
              <p className="text-sm text-ink/75">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-3xl text-ink">Nos catégories</h2>
        <p className="mt-2 max-w-prose text-ink/70">
          Deux univers, un même souci du détail : l'ameublement pour votre intérieur,
          la construction pour bâtir solide.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              label={cat.label}
              subcategories={cat.subcategories}
              image={CATEGORY_IMAGES[cat.id]}
             
            />
          ))}
        </div>
      </section>

      {/* Produits en vedette */}
      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl text-ink">Produits populaires</h2>
            <Link to="/produits" className="hidden text-sm font-medium text-pine-dark hover:underline sm:inline">
              Voir tout le catalogue →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/produits" className="text-sm font-medium text-pine-dark hover:underline">
              Voir tout le catalogue →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
