<template>
  <div class="grid xl:grid-cols-2 mx-2 md:mx-6 gap-6">
    <div>
      <slot>
      </slot>
    </div>

    <div>
      <h2 class="text-xl mb-2">Syllabus</h2>
      <slot name="syllabus"></slot>
    </div>


  </div>
</template>

<script lang="ts" setup>

</script>



<style></style>
