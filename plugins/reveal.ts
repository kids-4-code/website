// Global `v-reveal` directive: reveals an element (with the `reveal` class)
// when it scrolls into view. Optional binding value = stagger delay in ms.
//   <div class="reveal" v-reveal>           // reveal on scroll
//   <div class="reveal" v-reveal="120">     // reveal with 120ms delay
export default defineNuxtPlugin((nuxtApp) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  nuxtApp.vueApp.directive("reveal", {
    mounted(el: HTMLElement, binding) {
      const delay = typeof binding.value === "number" ? binding.value : 0
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`)

      // Reduced motion (or no IO support): show immediately, no animation.
      if (prefersReduced || typeof IntersectionObserver === "undefined") {
        el.classList.add("in-view")
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              el.classList.add("in-view")
              observer.disconnect()
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      )
      observer.observe(el)
      ;(el as any).__revealObserver = observer
    },
    unmounted(el: HTMLElement) {
      ;(el as any).__revealObserver?.disconnect()
    },
  })
})
