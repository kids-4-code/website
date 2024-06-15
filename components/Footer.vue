<template>
  <div class="mt-16 w-full bg-gray-50 border-t border-gray-200 p-4 pb-8">
    <div class="lg:w-2/3 mx-auto">
      <h3 class="font-sans font-semibold text-xl text-gray-600 my-2">Kids for Code</h3>
      <hr class="my-2 mb-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="text-gray-600">
          <h4 class="font-sans font-medium text-lg text-gray-600">Quick links</h4>

          <ul class="list-none text-base lg:text-sm font-body underline text-gray-600">
            <li>
              <NuxtLink>Home</NuxtLink>
            </li>
            <li> <a href="https://forms.gle/Pv621KyFzYq1hKN9A">Enroll</a>
            </li>
            <li><a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdr9njG4bNeAiwvznxu2-Jy3w4NO8XT5mXpL-3n7NyKcDwIcA/viewform">Apply
                to teach</a>
            </li>
            <li><a
                href="https://docs.google.com/document/d/e/2PACX-1vTEOxLdYB49eK2jF-uSSznAAJRYKgWKeZMh-7IeLndB9CCY9iBfrPhYNnv54Ms_BAMSXze00b8gCfWm/pub">Class
                schedule</a></li>
            <li>
              <NuxtLink to="/faq">FAQ</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-sans font-medium text-lg text-gray-600">Courses</h4>

          <ul class="list-none text-base lg:text-sm font-body underline text-gray-600">
            <li>
              <NuxtLink to="/courses">All courses</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/courses#python">Python</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/courses#java">Java</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/courses#web">Web dev</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/courses#cpp">C++</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/courses#other-courses">Other</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-sans font-medium text-lg text-gray-600">Socials & other links</h4>

          <div class="flex gap-2 text-2xl text-gray-600">
            <a href="https://www.youtube.com/@kidsforcode9529">
              <Icon name="tabler:brand-youtube"></Icon>
            </a>
            <a href="https://github.com/kids-4-code">
              <Icon name="tabler:brand-github"></Icon>
            </a>
            <a href="https://www.instagram.com/kidsforcode">
              <Icon name="tabler:brand-instagram"></Icon>
            </a>
          </div>
          <h4 class="font-sans font-medium text-lg text-gray-600 mt-4">Contact</h4>

          <p class="text-base lg:text-sm">kidsforcodeteam@gmail.com</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>

</script>



<style></style>
