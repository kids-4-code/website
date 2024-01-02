<!--the LinkButton except w/o a link and more rounded-->

<template>
  <div class="font-sans font-medium text-sm transition-colors px-3 py-1 rounded-full"
    :class="[...colors, ...extraStyles]">
    <slot></slot>
  </div>
</template>

<script setup>

const props = defineProps({
  color: {
    type: String,
    default: "brand"
  },
  ghost: {
    type: Boolean,
  },
})

// unfortunately the actual class names have to be in the code otherwise tailwind will not load them correctly
// really wish there was a better way to do this (TODO?)
const colorVariants = {
  regular: {
    sky: ["bg-sky-600", "hover:bg-sky-700", "border-sky-600"],
    purple: ["bg-purple-700", "hover:bg-purple-800", "border-purple-700"],
    red: ["bg-red-600", "hover:bg-red-700", "border-red-600"],
    emerald: ["bg-emerald-500", "hover:bg-emerald-600", "border-emerald-500"],
    amber: ["bg-amber-500", "hover:bg-amber-600", "border-amber-500"],
    brand: ["bg-brand-600", "hover:bg-brand-700", "border-brand-600"],
    accent: ["bg-accent-400", "hover:bg-accent-500", "border-accent-400"]
  },
  ghost: {
    sky: ["border-sky-600", "hover:bg-sky-100", "text-sky-600"],
    purple: ["border-purple-700", "hover:bg-purple-100", "text-purple-700"],
    red: ["border-red-600", "hover:bg-red-100", "text-red-600"],
    emerald: ["border-emerald-500", "hover:bg-emerald-100", "text-emerald-500"],
    amber: ["border-amber-500", "hover:bg-amber-100", "text-amber-500"],
    brand: ["border-brand-600", " hover:bg-brand-100", "text-brand-600"],
    gray: ["border-gray-300", "hover:bg-gray-100", "text-gray-500"],
    accent: ["border-accent-400", "hover:bg-accent-100", "text-accent-400"]
  },
}

const colors = computed(() => {
  let c = colorVariants[props.ghost ? "ghost" : "regular"][props.color]
  return c
})

const extraStyles = computed(() => {
  let s = []
  if (props.ghost) {
    s.push("border-2")
  } else {
    s.push("text-white")
  }
  return s
})
</script>



<style></style>
