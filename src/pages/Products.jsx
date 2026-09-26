import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, PRODUCTS } from '../data/products'

const SORTS = [
  { value: 'recent', label: 'Produits récents' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
]

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')

  const category = searchParams.get('categorie') || 'tous'
  const availability = searchParams.get('dispo') || 'tous'
  const sort = searchParams.get('tri') || 'recent'

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'tous' || value === 'recent') next.delete(key)
    else next.set(key, value)
    setSearchParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    if (category !== 'tous') list = list.filter((p) => p.category === category)
    if (availability !== 'tous') list = list.filter((p) => p.status === availability)
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    // 'recent' garde l'ordre du catalogue (les plus récents en tête, données déjà ordonnées)

    return list
  }, [category, availability, sort, search])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Nos produits</h1>
      <p className="mt-2 text-ink/70">
        {filtered.length} produit{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
      </p>

      <div className="mt-6 flex flex-col gap-4 border-y border-line py-5 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full border border-line bg-cream py-2.5 pl-10 pr-3 text-sm outline-none focus:border-wood"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <SlidersHorizontal size={16} className="text-ink/50" />

          <select
            value={category}
            onChange={(e) => setParam('categorie', e.target.value)}
            className="border border-line bg-cream px-3 py-2 text-sm outline-none focus:border-wood"
          >
            <option value="tous">Toutes catégories</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>{c.label}</option>
            ))}
          </select>

          <select
            value={availability}
            onChange={(e) => setParam('dispo', e.target.value)}
            className="border border-line bg-cream px-3 py-2 text-sm outline-none focus:border-wood"
          >
            <option value="tous">Toute disponibilité</option>
            <option value="disponible_sur_place">Disponible sur place</option>
            <option value="disponible_sur_commande">Disponible sur commande</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setParam('tri', e.target.value)}
            className="border border-line bg-cream px-3 py-2 text-sm outline-none focus:border-wood"
          >
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-ink/60">
          Aucun produit ne correspond à votre recherche. Essayez d'autres filtres.
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
