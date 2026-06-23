<template>
  <div class="group p-4 py-6 text-center transition-transform duration-200 hover:-translate-y-1">
    <img :src="'images/teachers/' + (imagePath ?? 'placeholder.png')"
      class="rounded-full w-3/5 m-auto mb-4 transition-transform duration-200 group-hover:scale-105">
    <h2 class="text-xl font-serif font-semibold text-gray-700 dark:text-night-text">{{ name }}</h2>
    <h3 class="text-sm font-serif font-light text-gray-600 dark:text-night-muted">{{ title }}</h3>
    <p v-if="description"
      class="text-xs text-gray-500 dark:text-night-muted mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
      {{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["name", "title", "imagePath", "description"])
</script>



<style></style>
