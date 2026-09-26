export default function Badge({ status }) {
  const isAvailable = status === 'disponible_sur_place'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        isAvailable ? 'bg-pine/10 text-pine-dark' : 'bg-ochre/10 text-ochre-dark'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isAvailable ? 'bg-pine' : 'bg-ochre'}`}
        aria-hidden="true"
      />
      {isAvailable ? 'Disponible sur place' : 'Disponible sur commande'}
    </span>
  )
}
