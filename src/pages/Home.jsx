// import { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { MessageCircle, ArrowRight, Hammer, Sofa, ShieldCheck, Truck, Volume2, VolumeX } from 'lucide-react'
// import CategoryCard from '../components/CategoryCard'
// import ProductCard from '../components/ProductCard'
// import { CATEGORIES, PRODUCTS } from '../data/products'
// import { buildSimpleWhatsAppLink } from '../utils/whatsapp'
// import { COMPANY } from '../config'

// const CATEGORY_IMAGES = {
//   'chambre-a-coucher': '/images/image16/WhatsApp Image 2026-10-14 at 12.21.jpeg',
//   salon: '/images/imageA9/WhatsApp Image 2026-10-14 at 15.54.19.jpeg',
// }

// export default function Home() {
//   const whatsappLink = buildSimpleWhatsAppLink(
//     "Bonjour ITN_Designe, je souhaite avoir des renseignements sur vos produits."
//   )
//   const featured = PRODUCTS.slice(0, 4)

//   const videoRef = useRef(null)
//   const [muted, setMuted] = useState(false)

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     // 1) On essaie de lancer la vidéo AVEC le son
//     video.muted = false
//     video
//       .play()
//       .then(() => setMuted(false))
//       .catch(() => {
//         // 2) Le navigateur bloque le son : on démarre sans son
//         video.muted = true
//         setMuted(true)
//         video.play().catch(() => {})
//       })

//     // 3) Au premier clic / toucher / touche, on active le son
//     const events = ['click', 'touchend', 'keydown']
//     const enableSound = (e) => {
//       if (e.target.closest && e.target.closest('[data-sound-toggle]')) return
//       video.muted = false
//       setMuted(false)
//       video.play().catch(() => {})
//       removeListeners()
//     }
//     const removeListeners = () =>
//       events.forEach((ev) => window.removeEventListener(ev, enableSound))
//     events.forEach((ev) => window.addEventListener(ev, enableSound))

//     return removeListeners
//   }, [])

//   const toggleSound = () => {
//     const video = videoRef.current
//     if (!video) return
//     video.muted = !video.muted
//     setMuted(video.muted)
//     video.play().catch(() => {})
//   }

//   return (
//     <div>
//       {/* Hero */}
//       <section className="relative overflow-hidden border-b border-line bg-ink">
//         {/* Vidéo en arrière-plan, en boucle */}
//         <video
//           ref={videoRef}
//           src="/videos/home/video_motion_design_ITN_Designe_photos.mp4"
//           className="absolute inset-0 h-full w-full object-cover"
//           loop
//           playsInline
//           preload="auto"
//         />
//         {/* Voile sombre pour garder le texte lisible */}
//         <div className="absolute inset-0 bg-ink/60" />

//         <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32">
//           <div className="max-w-xl">
//             <p className="font-display text-sm italic text-cream/80">{COMPANY.slogan}</p>
//             <h1 className="mt-3 font-display text-4xl leading-[1.1] text-cream sm:text-5xl">
//               {COMPANY.name}
//             </h1>
//             <p className="mt-2 font-display text-xl text-cream/90 sm:text-2xl">
//               Votre partenaire pour la chambre à coucher et le salon
//             </p>
//             <p className="mt-5 max-w-md text-cream/80">
//               Découvrez nos chambres à coucher et nos salons pour aménager
//               votre maison — partout au Sénégal.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link
//                 to="/produits"
//                 className="inline-flex items-center gap-2 bg-cream px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-bg"
//               >
//                 Voir nos produits
//                 <ArrowRight size={16} />
//               </Link>
//               <a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 border border-cream px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
//               >
//                 <MessageCircle size={16} />
//                 Commander sur WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bouton son */}
//         <button
//           type="button"
//           data-sound-toggle
//           onClick={toggleSound}
//           aria-label={muted ? 'Activer le son de la vidéo' : 'Couper le son de la vidéo'}
//           className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-ink/70 px-4 py-2 text-sm text-cream backdrop-blur transition-colors hover:bg-ink"
//         >
//           {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
//           {muted ? 'Activer le son' : 'Couper le son'}
//         </button>

//         {/* Compteur de produits */}
//         <div className="absolute bottom-4 left-4 hidden bg-pine px-5 py-4 text-cream shadow-lg sm:block">
//           <p className="font-display text-2xl">{PRODUCTS.length}+</p>
//           <p className="text-xs text-cream/80">produits au catalogue</p>
//         </div>
//       </section>

//       {/* Points forts */}
//       <section className="border-b border-line bg-cream">
//         <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
//           {[
//             { icon: Sofa, label: 'Chambre à coucher & salon' },
//             { icon: ShieldCheck, label: 'Qualité vérifiée' },
//             { icon: Hammer, label: 'Matériaux durables' },
//             { icon: Truck, label: 'Livraison à Dakar' },
//           ].map(({ icon: Icon, label }) => (
//             <div key={label} className="flex flex-col items-center gap-2 text-center">
//               <Icon className="text-wood" size={26} />
//               <p className="text-sm text-ink/75">{label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Catégories */}
//       <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
//         <h2 className="font-display text-3xl text-ink">Nos catégories</h2>
//         <p className="mt-2 max-w-prose text-ink/70">
//           Deux univers, un même souci du détail : la chambre à coucher pour votre repos,
//           le salon pour votre confort.
//         </p>
//         <div className="mt-8 grid gap-6 sm:grid-cols-2">
//           {CATEGORIES.map((cat) => (
//             <CategoryCard
//               key={cat.id}
//               id={cat.id}
//               label={cat.label}
//               subcategories={cat.subcategories}
//               image={CATEGORY_IMAGES[cat.id]}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Produits en vedette */}
//       <section className="border-t border-line bg-cream">
//         <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
//           <div className="flex items-end justify-between">
//             <h2 className="font-display text-3xl text-ink">Produits populaires</h2>
//             <Link to="/produits" className="hidden text-sm font-medium text-pine-dark hover:underline sm:inline">
//               Voir tout le catalogue →
//             </Link>
//           </div>
//           <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {featured.map((p) => (
//               <ProductCard key={p.id} product={p} />
//             ))}
//           </div>
//           <div className="mt-8 text-center sm:hidden">
//             <Link to="/produits" className="text-sm font-medium text-pine-dark hover:underline">
//               Voir tout le catalogue →
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageCircle,
  ArrowRight,
  Hammer,
  Sofa,
  ShieldCheck,
  Truck,
  Volume2,
  VolumeX,
  Play,
} from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, PRODUCTS } from '../data/products'
import { buildSimpleWhatsAppLink } from '../utils/whatsapp'
import { COMPANY } from '../config'

const CATEGORY_IMAGES = {
  'chambre-a-coucher': '/images/image16/WhatsApp Image 2026-10-14 at 12.21.jpeg',
  salon: '/images/imageA9/WhatsApp Image 2026-10-14 at 15.54.19.jpeg',
}

export default function Home() {
  const whatsappLink = buildSimpleWhatsAppLink(
    'Bonjour ITN_Designe, je souhaite avoir des renseignements sur vos produits.'
  )
  const featured = PRODUCTS.slice(0, 4)

  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Démarrage SANS son (toujours autorisé), en boucle
    video.muted = true
    video.loop = true
    video.playsInline = true
    const start = () => video.play().catch(() => {})
    start()
    video.addEventListener('canplay', start, { once: true })

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)

    // Au premier clic / toucher / touche, on active le son
    const events = ['click', 'touchend', 'keydown']
    function removeListeners() {
      events.forEach((ev) => window.removeEventListener(ev, enableSound))
    }
    function enableSound(e) {
      if (e.target.closest && e.target.closest('[data-sound-toggle]')) return
      video.muted = false
      setMuted(false)
      video.play().catch(() => {})
      removeListeners()
    }
    events.forEach((ev) => window.addEventListener(ev, enableSound))

    return () => {
      removeListeners()
      video.removeEventListener('canplay', start)
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
    }
  }, [])

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    video.play().catch(() => {})
  }

  const playManually = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    setMuted(false)
    video.play().catch(() => {})
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-ink">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-pine-dark/40" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
          {/* Texte */}
          <div className="text-center md:text-left">
            <p className="font-display text-sm italic text-cream/80">{COMPANY.slogan}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-cream sm:text-5xl">
              {COMPANY.name}
            </h1>
            <p className="mt-2 font-display text-xl text-cream/90 sm:text-2xl">
              Votre partenaire pour la chambre à coucher et le salon
            </p>
            <p className="mx-auto mt-5 max-w-md text-cream/80 md:mx-0">
              Découvrez nos chambres à coucher et nos salons pour aménager
              votre maison — partout au Sénégal.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                to="/produits"
                className="inline-flex items-center gap-2 bg-cream px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-bg"
              >
                Voir nos produits
                <ArrowRight size={16} />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cream px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
              >
                <MessageCircle size={16} />
                Commander sur WhatsApp
              </a>
            </div>

            {/* Compteur de produits */}
            <div className="mt-8 inline-block bg-pine px-5 py-4 text-left text-cream shadow-lg">
              <p className="font-display text-2xl">{PRODUCTS.length}+</p>
              <p className="text-xs text-cream/80">produits au catalogue</p>
            </div>
          </div>

          {/* Vidéo : cadre vertical 9:16, entièrement visible, en boucle */}
          <div className="mx-auto w-full max-w-[300px] sm:max-w-[340px]">
            <div className="relative aspect-[9/16] w-full overflow-hidden border border-cream/20 bg-black shadow-2xl">
              <video
                ref={videoRef}
                src="/videos/home/WhatsApp Video 2026-10-14 at 18.14.10.mp4"
                poster="/videos/home/poster.jpg"
                className="h-full w-full object-contain"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={(e) => console.error('Vidéo introuvable :', e.currentTarget.src)}
              />

              {/* Bouton ▶ si le navigateur bloque la lecture automatique */}
              {!playing && (
                <button
                  type="button"
                  data-sound-toggle
                  onClick={playManually}
                  aria-label="Lancer la vidéo"
                  className="absolute inset-0 flex items-center justify-center bg-ink/30"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream text-ink shadow-lg">
                    <Play size={28} />
                  </span>
                </button>
              )}

              {/* Bouton son */}
              <button
                type="button"
                data-sound-toggle
                onClick={toggleSound}
                aria-label={muted ? 'Activer le son de la vidéo' : 'Couper le son de la vidéo'}
                className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-ink/75 px-3 py-2 text-xs text-cream backdrop-blur transition-colors hover:bg-ink"
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                {muted ? 'Activer le son' : 'Couper le son'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="border-b border-line bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {[
            { icon: Sofa, label: 'Chambre à coucher & salon' },
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
          Deux univers, un même souci du détail : la chambre à coucher pour votre repos,
          le salon pour votre confort.
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
            <Link
              to="/produits"
              className="hidden text-sm font-medium text-pine-dark hover:underline sm:inline"
            >
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