<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden -z-10" aria-hidden="true">
    <span
      v-for="(s, i) in stars"
      :key="i"
      class="absolute text-brand-300 k4c-float select-none"
      :style="{
        top: s.top,
        left: s.left,
        fontSize: s.size,
        opacity: s.op,
        animationDelay: s.delay,
        animationDuration: s.dur,
      }"
      >★</span
    >
  </div>
</template>

<script setup>
// Deterministic positions → no hydration mismatch, SSR/SSG-safe.
const stars = [
  { top: "6%", left: "8%", size: "16px", op: 0.45, delay: "0s", dur: "7s" },
  { top: "12%", left: "82%", size: "12px", op: 0.35, delay: "1.2s", dur: "8s" },
  { top: "22%", left: "20%", size: "10px", op: 0.3, delay: "0.6s", dur: "6.5s" },
  { top: "30%", left: "90%", size: "18px", op: 0.4, delay: "2s", dur: "9s" },
  { top: "44%", left: "5%", size: "13px", op: 0.35, delay: "1.5s", dur: "7.5s" },
  { top: "55%", left: "78%", size: "11px", op: 0.3, delay: "0.3s", dur: "8.5s" },
  { top: "16%", left: "50%", size: "9px", op: 0.25, delay: "2.4s", dur: "6s" },
  { top: "38%", left: "62%", size: "14px", op: 0.35, delay: "0.9s", dur: "8s" },
  { top: "62%", left: "34%", size: "10px", op: 0.28, delay: "1.8s", dur: "7s" },
  { top: "8%", left: "68%", size: "12px", op: 0.3, delay: "0.5s", dur: "9s" },
  { top: "50%", left: "46%", size: "9px", op: 0.22, delay: "2.7s", dur: "6.5s" },
  { top: "26%", left: "38%", size: "11px", op: 0.3, delay: "1.1s", dur: "8s" },
]
</script>
