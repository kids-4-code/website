<script setup lang="ts">
useHead({
  title: "FAQ",
})

const faqs = [
  {
    q: "Are there any required course materials?",
    a: "No — everything is provided by Kids for Code for free.",
  },
  {
    q: "Will I need to install anything to my computer?",
    a: "In most cases, no - all you should need is a working, internet-connected laptop/desktop. If there are any additional requirements, we will make sure to communicate those to you ahead of time.",
  },
  {
    q: "Can I change what course I registered for?",
    a: "If you'd like to change your course selections, please reach out to us at kidsforcodeteam@gmail.com.",
  },
  {
    q: "Will students be able to ask questions outside of class?",
    a: "Yes, students can ask questions in the Google Classroom for their class and one of our teachers for that class should be able to answer it. Alternatively, we also have a community Discord server for our teachers and students where they will be able to get help.",
  },
  {
    q: "Can I sign up for classes even if I haven't taken the previous ones?",
    a: "We don't enforce prerequisites — however we do recommend that you take previous classes before signing up for more advanced ones (for example, we'd reccomend taking Python 1 before you take Python 2). If you do think you're ready to take a more advanced class & know all the material from the previous ones (you can review the course descriptions & syllabus to get an idea of what is taught), feel free to go ahead and sign up!",
  },
  {
    q: "Is it possible to switch classes after the first class?",
    a: "Yes, you can switch classes at any time - just email us at the address at the bottom of this page. We'll need your student's name, the class they're currently enrolled in, and the class they'd like to switch into.",
  },
  {
    q: "Do parents need to be present during classes?",
    a: "Parents don't need to be present during classes.",
  },
  {
    q: "Will I need a computer to take classes?",
    a: "A laptop or desktop computer is recommended. (Chromebooks are fine). Our curriculum is designed around <a href=\"https://replit.com\" target=\"_blank\" rel=\"noopener\" class=\"text-brand-600 underline\">repl.it ↗</a>, an online code editor. While it does work on tablets & mobile devices (e.g. phones or iPads), it's significantly more difficult to use.",
  },
  {
    q: "Are there homework assignments?",
    a: "Yes, students will be given coding assignments to work on between classes, which will be turned in for feedback from our teachers.",
  },
]

const open = ref<number[]>([])

function toggle(i: number) {
  open.value = open.value.includes(i)
    ? open.value.filter((x) => x !== i)
    : [...open.value, i]
}
</script>

<template>
  <NuxtLayout>
    <div class="pt-12 p-4 flex flex-col items-center">
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-3xl">
        <h1 class="font-serif text-4xl font-semibold text-gray-700 mb-2">FAQ</h1>
        <p class="text-gray-500 text-sm mb-6">Click a question to see the answer.</p>

        <div class="flex flex-col gap-3">
          <div v-for="(item, i) in faqs" :key="i"
            class="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button type="button" @click="toggle(i)"
              class="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-gray-50 transition-colors"
              :aria-expanded="open.includes(i)">
              <span class="font-serif font-semibold text-gray-700">{{ item.q }}</span>
              <Icon name="tabler:chevron-down"
                class="text-xl text-gray-400 shrink-0 ml-4 transition-transform duration-200"
                :class="{ 'rotate-180': open.includes(i) }"></Icon>
            </button>
            <div v-show="open.includes(i)" class="px-5 pb-4">
              <p class="font-body text-gray-600" v-html="item.a"></p>
            </div>
          </div>
        </div>

        <p class="text-gray-500 text-sm mt-8 italic">
          If you still have any more questions that weren't answered here, feel free to contact us
          at kidsforcodeteam@gmail.com
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
