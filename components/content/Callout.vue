<template>
  <div class=" bg-gray-50 dark:bg-night-input border-gray-200 dark:border-night-border border my-4 p-6 rounded-lg">
    <h3>{{ title }}</h3>
    <hr>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>



<style></style>
