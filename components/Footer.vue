<template>
  <div class="mt-16 w-full bg-gray-50 border-t border-gray-200 p-4 pb-8">
    <div class="lg:w-2/3 mx-auto">
      <h3 class="font-sans font-semibold text-xl text-gray-600 my-2">Kids for Code</h3>
      <hr class="my-2 mb-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="text-gray-600">
          <h4 class="font-sans font-medium text-lg text-gray-600">Quick links</h4>

          <ul class="list-none text-base lg:text-sm font-body underline decoration-gray-300 text-gray-600 [&_a]:transition-colors [&_a:hover]:text-brand-600 [&_a:hover]:decoration-brand-400">
            <li>
              <NuxtLink>Home</NuxtLink>
            </li>
            <li> <a href="https://docs.google.com/forms/d/1Xm21bQsUX_8_dnyfts_yNJKjGdqxUSDrs5STTnHKo-Y/viewform" target="_blank">Enroll</a>
            </li>
            <li><a href="/apply">Apply
                to teach</a>
            </li>
            <li><a
                href="https://docs.google.com/document/d/1AucwlnN6lCsjxRLcuJzo_8ErroHlqCdMiWVvEZWzGMQ/view" target="_blank">Class
                schedule</a></li>
            <li>
              <NuxtLink to="/faq">FAQ</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-sans font-medium text-lg text-gray-600">Courses</h4>

          <ul class="list-none text-base lg:text-sm font-body underline decoration-gray-300 text-gray-600 [&_a]:transition-colors [&_a:hover]:text-brand-600 [&_a:hover]:decoration-brand-400">
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

          <div
            class="flex gap-3 text-2xl text-gray-600 [&_a]:inline-block [&_a]:transition-all [&_a:hover]:-translate-y-0.5 [&_a:hover]:scale-110 [&_a:hover]:text-brand-600">
            <a href="https://www.youtube.com/@kidsforcode" aria-label="YouTube">
              <Icon name="tabler:brand-youtube"></Icon>
            </a>
            <a href="https://github.com/kids-4-code" aria-label="GitHub">
              <Icon name="tabler:brand-github"></Icon>
            </a>
            <a href="https://www.instagram.com/kidsforcode" aria-label="Instagram">
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
