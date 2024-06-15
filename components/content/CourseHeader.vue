<script setup>
let props = defineProps({
  background: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  color: {
    type: String,
    required: true,
  }
})

const computedUrl = computed(() => {
  return `url(${props.background})`;
});

const colorVariants = {
  sky: "bg-sky-600 hover:bg-sky-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  red: "bg-red-600 hover:bg-red-700",
  emerald: "bg-emerald-600 hover:bg-emerald-700",
  amber: "bg-amber-500 hover:bg-amber-600",
}
</script>

<template>
  <div class="bg border-gray-200  border p-6 py-8 mb-4 rounded-xl text-gray-700">
    <img :src="icon" class="w-16 mb-2 drop-shadow-sm">
    <h1 class="text-4xl font-serif font-semibold">{{ name }}</h1>
    <p class="text-sm md:w-2/3 block mt-1">{{ description }}</p>

    <LinkButton newTab class="mt-4" :color="props.color" to="https://forms.gle/FZiN1KAA726m4Vvh6">Enroll</LinkButton>

  </div>
</template>

<style scoped>
.bg {
  background-size: cover;
  background-position: center center;
  background-image: v-bind(computedUrl);
}
</style>
