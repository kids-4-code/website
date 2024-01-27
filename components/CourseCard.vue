<template>
  <div class="flex flex-col justify-between p-6 border-gray-300 border shadow-md rounded-md text-left">
    <div>
      <div class="flex gap-2 items-center justify-between">
        <slot name="icon"></slot>
        <Badge :color="badgeColor" v-if="new"> new!</Badge>
      </div>


      <slot name="title"></slot>

      <!-- <slot name="details"></slot> -->
      <hr class="my-2">
      <slot name="description" class="font-body text-gray-600"></slot>
    </div>

    <div class="mt-4">
      <slot name="link"></slot>
    </div>

  </div>
</template>

<script setup>
defineProps({
  new: {
    type: Boolean
  },
  badgeColor: {
    type: String
  }
})
</script>
