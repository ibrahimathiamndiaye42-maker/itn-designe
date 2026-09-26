import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CategoryCard({ id, label, subcategories, image }) {
  return (
    <Link
      to={`/produits?categorie=${id}`}
      className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden border border-line p-6"
    >
      <img
        src={image}
        alt={label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl text-cream">{label}</h3>
          <ArrowUpRight className="text-cream/90 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
        </div>
        <p className="mt-1 text-sm text-cream/80">{subcategories.join(' · ')}</p>
      </div>
    </Link>
  )
}
