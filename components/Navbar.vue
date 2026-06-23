<template>
  <div>
    <!--Banner-->
    <NuxtLink to="https://docs.google.com/forms/d/1Xm21bQsUX_8_dnyfts_yNJKjGdqxUSDrs5STTnHKo-Y/viewform" target="_blank">
      <div
        class="group w-full border-b border-b-brand-400 bg-brand-50 dark:bg-brand-950/40 hover:bg-brand-100 transition-colors flex p-3 place-content-center items-center gap-2 ">
        <p class="text-brand-600 text-sm font-medium font-sans">Our free Summer 2026 session starts July 11th — enroll now!
          <Icon class="text-xl text-brand-600 transition-transform group-hover:translate-x-1" name="tabler:arrow-right"></Icon>
        </p>
      </div>
    </NuxtLink>

    <nav class="sticky top-0 z-50 transition-all duration-300"
      :class="scrolled ? 'bg-white/85 dark:bg-night-card/85 backdrop-blur shadow-sm' : 'bg-white dark:bg-night-card'">
      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between px-4 transition-all duration-300"
          :class="scrolled ? 'py-2' : 'py-4'">
          <div class="flex sm:items-center gap-x-4 gap-y-3 max-sm:flex-col">
            <NuxtLink to="/">
              <div class="flex items-center gap-4">
                <img src="/logo.svg" class="h-7">
                <span class="font-sans font-semibold text-xl text-brand-600">Kids for Code</span>

              </div>
            </NuxtLink>

            <hr class="sm:hidden border-gray-200 dark:border-night-border">

            <div class="flex gap-4 max-sm:justify-between items-center">
              <NuxtLink class="font-sans font-semibold text-gray-700 dark:text-night-text text-lg" to="/">Home</NuxtLink>
              <NuxtLink class="font-sans font-semibold text-gray-700 dark:text-night-text text-lg" to="/courses">Courses</NuxtLink>
              <NuxtLink class="font-sans font-semibold text-gray-700 dark:text-night-text text-lg" to="/teachers">Teachers</NuxtLink>
              <NuxtLink class="font-sans font-semibold text-gray-700 dark:text-night-text text-lg" to="/faq">FAQ</NuxtLink>
              <LinkButton newTab to="https://docs.google.com/forms/d/1Xm21bQsUX_8_dnyfts_yNJKjGdqxUSDrs5STTnHKo-Y/viewform" class="sm:hidden">Enroll</LinkButton>
              <ThemeToggle class="sm:hidden" />
            </div>
          </div>
          <div class="flex items-center gap-1 max-sm:hidden">
            <ThemeToggle />
            <LinkButton newTab to="https://docs.google.com/forms/d/1Xm21bQsUX_8_dnyfts_yNJKjGdqxUSDrs5STTnHKo-Y/viewform">
              Enroll
            </LinkButton>
          </div>
          <!-- <LinkButton newTab ghost class="max-sm:hidden" to="https://forms.gle/9zKbZDBRqU54Pw5v7">Get updates
          </LinkButton> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core"

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 24)
</script>



<style></style>
