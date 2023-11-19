<template>
  <div>
    <Navbar></Navbar>
    <div class="pt-8 p-4 flex flex-col items-center course-container">
      <div class="w-full md:w-10/12 lg:w-8/12 max-w-4xl">
        <slot />
      </div>
    </div>
    <Footer></Footer>

  </div>
</template>

<style>
.course-container h1,
.course-container h2,
.course-container h3,
.course-container h4,
.course-container h5,
.course-container h6 {
  @apply font-serif font-semibold text-gray-700;
}

.course-container p {
  @apply font-body text-gray-600 mb-2;
}

.course-container hr {
  @apply my-3;
}

.course-container img {
  @apply rounded-lg;
}

.course-container tr,
.course-container th,
.course-container td {
  @apply p-2 font-body border-gray-300 border-y text-gray-600;
}

.course-container th {
  @apply bg-gray-50 font-medium font-serif border-gray-300 border-y;
}
</style>
