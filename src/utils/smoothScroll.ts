export const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId)
  if (!target) return

  const offset = 80 // height of navbar
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  const duration = 800 // ms
  let start: number | null = null

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const step = (timestamp: number) => {
    if (!start) start = timestamp
    const elapsed = timestamp - start
    const progress = Math.min(elapsed / duration, 1)
    const ease = easeInOutCubic(progress)

    window.scrollTo(0, startPosition + distance * ease)

    if (elapsed < duration) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
