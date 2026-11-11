// The World's ground: the surface the Runner travels, shared by the Title
// Screen, Play Mode, and (markings only) the Footer.

export function TrackDashes({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-8 px-4 overflow-hidden ${className}`}>
      {Array.from({ length: 48 }).map((_, i) => (
        <span key={i} className="w-6 h-1 bg-dusk-700 shrink-0" />
      ))}
    </div>
  )
}

export function Ground({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`bg-ground pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-dusk-700" />
      <TrackDashes className="absolute top-[45%] left-0 right-0" />
    </div>
  )
}
