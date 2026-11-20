import { useEffect, useRef } from "react"

// The full-screen cards Roam Mode shows over its iris: loading, the start
// prompt for visitors who arrived by address, and the plain failure
// message with a way back (ADR 0002: a failure never strands anyone).

interface Action {
  label: string
  onClick: () => void
  blink?: boolean
}

export function RoamCover({
  title,
  message,
  action,
  secondary,
}: {
  title: string
  message?: string
  action?: Action
  secondary?: Action
}) {
  const actionRef = useRef<HTMLButtonElement>(null)
  useEffect(() => actionRef.current?.focus(), [action?.label])

  return (
    <div
      role={action ? "dialog" : "status"}
      aria-modal={action ? true : undefined}
      aria-label={title}
      className="fixed inset-0 z-[76] flex flex-col items-center justify-center gap-6 bg-ground px-6 text-center"
    >
      <p className={`font-arcade text-xs md:text-sm text-gold-400 ${action ? "" : "animate-blink"}`}>{title}</p>
      {message && <p className="max-w-md font-body text-base text-cream-100">{message}</p>}
      {action && (
        <button
          ref={actionRef}
          onClick={action.onClick}
          className={`font-arcade text-[10px] md:text-xs text-gold-300 hover:text-gold-400 focus-ring ${
            action.blink ? "animate-blink" : ""
          }`}
        >
          ▸ {action.label}
        </button>
      )}
      {secondary && (
        <button onClick={secondary.onClick} className="font-arcade text-[9px] text-mist-300 hover:text-cream-100 focus-ring">
          {secondary.label}
        </button>
      )}
    </div>
  )
}

export function RoamNotice({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <div role="status" className="fixed inset-x-0 bottom-6 z-[76] flex justify-center px-4">
      <div className="pixel-border bg-dusk-900 mx-1 px-5 py-4 flex items-center gap-5 max-w-lg">
        <p className="font-body text-sm text-cream-100">{message}</p>
        <button onClick={onDismiss} className="shrink-0 font-arcade text-[9px] text-gold-400 hover:text-gold-300 focus-ring">
          OK
        </button>
      </div>
    </div>
  )
}
