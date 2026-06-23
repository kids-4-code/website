<template>
  <div class="k4c-marquee-group relative w-full overflow-hidden">
    <div class="k4c-marquee flex gap-4 w-max py-2">
      <div
        v-for="(t, i) in doubled"
        :key="i"
        class="w-80 shrink-0 text-left flex gap-2 items-start p-5 bg-white dark:bg-night-card border border-gray-200 dark:border-night-border rounded-xl shadow-sm"
      >
        <Icon name="tabler:quote" class="text-brand-600 text-4xl shrink-0"></Icon>
        <div>
          <p class="font-medium mb-2 text-gray-600 dark:text-night-muted">{{ t.quote }}</p>
          <p class="text-sm text-gray-500 dark:text-night-muted">— {{ t.who }}</p>
        </div>
      </div>
    </div>
    <!-- edge fades -->
    <div class="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-night-bg to-transparent"></div>
    <div class="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-night-bg to-transparent"></div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    quote:
      "I liked how they provided us with lots of resources and reviews to help aid us with the homework and understanding the material.",
    who: "Java & Python student",
  },
  {
    quote:
      "The classes are interesting and challenging. The teachers are also very attentive. The amount of content is just right for me to digest in the class.",
    who: "Web, Java, and Python student",
  },
  {
    quote:
      "It taught me a lot and it gave me more knowledge. I like how you guys didn't put too much information in one topic so it didn't overload us.",
    who: "Python student",
  },
  {
    quote:
      "All of you are super nice and patient! Your classes were clear to understand and the homework was fun! Thank you!",
    who: "Web & Python student",
  },
]
// Duplicated so the -50% marquee loops seamlessly.
const doubled = [...testimonials, ...testimonials]
</script>
