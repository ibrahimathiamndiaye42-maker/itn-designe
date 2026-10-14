// import { Link } from 'react-router-dom'
// import { ShoppingCart } from 'lucide-react'
// import Badge from './Badge'
// import { useCart } from '../context/CartContext'
// import { formatFCFA } from '../utils/whatsapp'

// export default function ProductCard({ product }) {
//   const addItem = useCart((s) => s.addItem)

//   return (
//     <div className="group flex flex-col border border-line bg-cream">
//       <Link to={`/produits/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-line/40">
//         <img
//           src={product.images[0]}
//           alt={product.name}
//           loading="lazy"
//           className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
//         />
//         <div className="absolute left-3 top-3">
//           <Badge status={product.status} />
//         </div>
//       </Link>

//       <div className="flex flex-1 flex-col gap-2 p-4">
//         <span className="text-xs uppercase tracking-wide text-wood/70">{product.subcategory}</span>
//         <Link to={`/produits/${product.id}`} className="font-display text-lg leading-snug text-ink hover:text-wood">
//           {product.name}
//         </Link>
//         <p className="line-clamp-2 text-sm text-ink/70">{product.shortDescription}</p>
//         <div className="mt-auto flex items-center justify-between pt-3">
//           <span className="font-display text-lg text-wood-dark">{formatFCFA(product.price)}</span>
//         </div>
//         <div className="flex gap-2 pt-1">
//           <Link
//             to={`/produits/${product.id}`}
//             className="flex-1 border border-ink/15 px-3 py-2 text-center text-sm font-medium text-ink transition-colors hover:border-ink/40"
//           >
//             Voir détails
//           </Link>
//           <button
//             onClick={() => addItem(product, 1)}
//             className="flex items-center gap-1.5 bg-pine px-3 py-2 text-sm font-medium text-cream transition-colors hover:bg-pine-dark"
//             aria-label={`Ajouter ${product.name} au panier`}
//           >
//             <ShoppingCart size={16} />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import Badge from './Badge'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const addItem = useCart((s) => s.addItem)

  return (
    <div className="group flex flex-col border border-line bg-cream">
      <Link to={`/produits/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-line/40">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute left-3 top-3">
          <Badge status={product.status} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs uppercase tracking-wide text-wood/70">{product.subcategory}</span>
        <Link to={`/produits/${product.id}`} className="font-display text-lg leading-snug text-ink hover:text-wood">
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm text-ink/70">{product.shortDescription}</p>
        <div className="mt-auto flex gap-2 pt-3">
          <Link
            to={`/produits/${product.id}`}
            className="flex-1 border border-ink/15 px-3 py-2 text-center text-sm font-medium text-ink transition-colors hover:border-ink/40"
          >
            Voir détails
          </Link>
          <button
            onClick={() => addItem(product, 1)}
            className="flex items-center gap-1.5 bg-pine px-3 py-2 text-sm font-medium text-cream transition-colors hover:bg-pine-dark"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}