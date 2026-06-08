<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup>
import { useIntersectionObserver } from "@vueuse/core"

const props = defineProps({
  to: { type: Number, required: true },
  decimals: { type: Number, default: 0 },
  prefix: { type: String, default: "" },
  suffix: { type: String, default: "" },
  duration: { type: Number, default: 1400 },
})

const el = ref(null)
// Initialise to the final value so SSG/no-JS output is correct (no "0").
const current = ref(props.to)
const started = ref(false)

const display = computed(
  () => props.prefix + current.value.toFixed(props.decimals) + props.suffix
)

function run() {
  if (started.value) return
  started.value = true
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    current.value = props.to
    return
  }
  current.value = 0
  const start = performance.now()
  const step = (now) => {
    const t = Math.min(1, (now - start) / props.duration)
    const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
    current.value = props.to * eased
    if (t < 1) requestAnimationFrame(step)
    else current.value = props.to
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  const { stop } = useIntersectionObserver(
    el,
    ([entry]) => {
      if (entry?.isIntersecting) {
        run()
        stop()
      }
    },
    { threshold: 0.6 }
  )
})
</script>
