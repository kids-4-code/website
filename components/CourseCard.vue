<template>
  <div class="flex flex-col justify-between p-6 border-gray-300 border shadow-md rounded-md text-left">
    <div>
      <slot name="icon"></slot>
      <slot name="title"></slot>
      <slot name="details"></slot>
      <hr class="my-2">
      <slot name="description" class="font-body text-gray-600"></slot>
    </div>

    <div class="mt-4">
      <slot name="link"></slot>
    </div>

  </div>
</template>
