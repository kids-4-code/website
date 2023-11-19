<template>
  <div>
    <Navbar></Navbar>
    <div class="pt-12 p-4 flex flex-col items-center article-container">
      <div class="w-10/12 md:w-19/12 lg:w-8/12 max-w-4xl">
        <slot />
      </div>
    </div>
    <Footer></Footer>

  </div>
</template>

<script lang="ts" setup>

</script>



<style>
.article-container h1,
.article-container h2,
.article-container h3,
.article-container h4,
.article-container h5,
.article-container h6 {
  @apply font-serif font-semibold text-gray-700;
}

.article-container h1 {
  @apply text-4xl mb-2;
}

.article-container h2 {
  @apply text-2xl;
}

.article-container h3 {
  @apply text-xl;
}

.article-container h4 {
  @apply text-lg;
}

.article-container h5 {
  @apply text-base font-semibold;
}

.article-container p {
  @apply font-body text-gray-600 mb-2;
}

.article-container hr {
  @apply my-3;
}

.article-container img {
  @apply rounded-lg;
}

.article-container tr,
.article-container th,
.article-container td {
  @apply p-2 font-body border-gray-300 border-y text-gray-600;
}

.article-container th {
  @apply bg-gray-50 font-medium font-serif border-gray-300 border-y;
}
</style>
