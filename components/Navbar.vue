<template>
  <div>
    <nav>
      <!--Banner-->
      <!-- <NuxtLink to="https://forms.gle/5Y4uYof4SmQaSqKt9">
        <div
          class="w-full border-b border-b-brand-400 bg-brand-50 hover:bg-brand-100 transition-colors flex p-3 place-content-center items-center gap-2 ">
          <p class="text-brand-600 text-sm font-medium font-sans">Register for our free Winter 2024 session!
            <Icon class="text-xl text-brand-600" name="tabler:arrow-right"></Icon>
          </p>
        </div>
      </NuxtLink> -->

      <div class="max-w-6xl mx-auto">
        <div class="flex items-center justify-between px-4 py-4">
          <div class="flex sm:items-center gap-x-4 gap-y-3 max-sm:flex-col">
            <NuxtLink to="/">
              <div class="flex items-center gap-4">
                <img src="/logo.svg" class="h-7">
                <span class="font-sans font-semibold text-xl text-brand-600">Kids for Code</span>

              </div>
            </NuxtLink>

            <hr class="sm:hidden border-gray-200">

            <div class="flex gap-4 max-sm:justify-between items-center">
              <NuxtLink class="font-sans font-semibold text-gray-700 text-lg" to="/">Home</NuxtLink>
              <NuxtLink class="font-sans font-semibold text-gray-700 text-lg" to="/courses">Courses</NuxtLink>
              <NuxtLink class="font-sans font-semibold text-gray-700 text-lg" to="/teachers">Teachers</NuxtLink>
              <NuxtLink class="font-sans font-semibold text-gray-700 text-lg" to="/faq">FAQ</NuxtLink>
              <LinkButton newTab to="https://forms.gle/gEKdeV6FUZYroRiV8" class="sm:hidden">Enroll</LinkButton>
            </div>
          </div>
          <!-- <LinkButton newTab class="max-sm:hidden" to="https://forms.gle/Pv621KyFzYq1hKN9A">
            Enroll
          </LinkButton> -->
          <LinkButton newTab ghost class="max-sm:hidden" to="https://forms.gle/9zKbZDBRqU54Pw5v7">Get updates
          </LinkButton>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>

</script>



<style></style>
