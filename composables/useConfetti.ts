// Lightweight, dependency-free canvas confetti burst.
// Respects prefers-reduced-motion (no-op). Cleans up its own canvas.
export function useConfetti() {
  function fire() {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const canvas = document.createElement("canvas")
    canvas.style.cssText =
      "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999"
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    document.body.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      canvas.remove()
      return
    }

    const colors = ["#cf5b93", "#ecc94b", "#48bb78", "#4299e1", "#b794f4"]
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 3
    const particles = Array.from({ length: 130 }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 4 + Math.random() * 7
      return {
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: 5 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        life: 0,
      }
    })

    const gravity = 0.18
    const drag = 0.99
    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.vx *= drag
        p.vy = p.vy * drag + gravity
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        p.life = elapsed
        const alpha = Math.max(0, 1 - elapsed / 2200)
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        ctx.restore()
      }
      if (elapsed < 2300) {
        raf = requestAnimationFrame(tick)
      } else {
        cancelAnimationFrame(raf)
        canvas.remove()
      }
    }
    raf = requestAnimationFrame(tick)
  }

  return { fire }
}
