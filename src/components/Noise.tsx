export default function Noise() {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.035] dark:opacity-[0.05] contrast-150"
      style={{
        filter: "url(#noiseFilter)",
      }}
    >
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </div>
  )
}