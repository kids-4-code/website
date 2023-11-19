<template>
  <div class="p-4 py-6">
    <img :src="'images/teachers/' + (imagePath ?? 'placeholder.png')" class="rounded-full w-3/5 m-auto mb-4">
    <h2 class="text-xl font-serif font-semibold text-gray-700">{{ name }}</h2>
    <h3 class="text-sm font-serif font-light text-gray-600">{{ title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps(["name", "title", "imagePath"])
</script>



<style></style>
