<template>
  <div>
    <NuxtLink class="font-sans font-semibold text-md transition-colors px-4 py-1.5 rounded"
      :to="disabled ? undefined : to" :class="[...colors, ...extraStyles]" :target="newTab ? '_blank' : '_self'">
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script setup>

const props = defineProps({
  color: {
    type: String,
    default: "brand"
  },
  to: {
    type: String,
  },
  ghost: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  newTab: {
    type: Boolean
  }
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
  disabled: [
    "bg-gray-100 border-gray-200 text-gray-400"
  ]
}

const colors = computed(() => {
  let c = colorVariants[props.ghost ? "ghost" : "regular"][props.color]
  if (props.disabled) c = colorVariants.disabled
  return c
})

const extraStyles = computed(() => {
  let s = []
  if (props.ghost || props.disabled) {
    s.push("border-2")
  }
  if (!(props.ghost || props.disabled)) {
    s.push("text-white")
  }
  return s
})
</script>



<style></style>
