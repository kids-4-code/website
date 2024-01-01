<template>
  <div class=" bg-gray-50 border-gray-200 border my-4 p-6 rounded-lg">
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
