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

const query = ref("")
const open = ref<string[]>([])

function toggle(q: string) {
  open.value = open.value.includes(q)
    ? open.value.filter((x) => x !== q)
    : [...open.value, q]
}

function stripHtml(s: string) {
  return s.replace(/<[^>]*>/g, "")
}

const filtered = computed(() => {
  const term = query.value.trim().toLowerCase()
  if (!term) return faqs
  return faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(term) ||
      stripHtml(f.a).toLowerCase().includes(term)
  )
})

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// Highlight the search term inside the (plain-text) question.
function highlightQuestion(q: string) {
  const term = query.value.trim()
  if (!term) return q
  const re = new RegExp(`(${escapeRegExp(term)})`, "ig")
  return q.replace(re, '<mark class="bg-accent-100 dark:bg-accent-950/40 text-gray-700 dark:text-night-text rounded px-0.5">$1</mark>')
}
</script>

<template>
  <NuxtLayout>
    <div class="pt-12 p-4 flex flex-col items-center">
      <div class="w-11/12 md:w-9/12 lg:w-8/12 max-w-3xl">
        <h1 class="reveal font-serif text-4xl font-semibold text-gray-700 dark:text-night-text mb-2" v-reveal>FAQ</h1>
        <p class="reveal text-gray-500 dark:text-night-muted text-sm mb-6" v-reveal="60">Search or click a question to see the answer.</p>

        <!-- Search -->
        <div class="reveal relative mb-6" v-reveal="120">
          <Icon name="tabler:search"
            class="absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 dark:text-night-muted"></Icon>
          <input v-model="query" type="text" placeholder="Search questions…"
            class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-night-border rounded-lg font-body text-gray-700 dark:text-night-text focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors" />
        </div>

        <div class="flex flex-col gap-3">
          <div v-for="item in filtered" :key="item.q"
            class="border border-gray-200 dark:border-night-border rounded-lg bg-white dark:bg-night-card overflow-hidden transition-shadow hover:shadow-sm">
            <button type="button" @click="toggle(item.q)"
              class="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-gray-50 transition-colors"
              :aria-expanded="open.includes(item.q)">
              <span class="font-serif font-semibold text-gray-700 dark:text-night-text" v-html="highlightQuestion(item.q)"></span>
              <Icon name="tabler:chevron-down"
                class="text-xl text-gray-400 dark:text-night-muted shrink-0 ml-4 transition-transform duration-300"
                :class="{ 'rotate-180': open.includes(item.q) }"></Icon>
            </button>
            <!-- smooth expand via grid-rows 0fr → 1fr -->
            <div class="grid transition-all duration-300 ease-out"
              :class="open.includes(item.q) ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
              <div class="overflow-hidden">
                <p class="px-5 pb-4 font-body text-gray-600 dark:text-night-muted" v-html="item.a"></p>
              </div>
            </div>
          </div>

          <p v-if="filtered.length === 0" class="text-gray-500 dark:text-night-muted text-sm py-6 text-center">
            No questions match “{{ query }}”. Try a different search, or email us at
            kidsforcodeteam@gmail.com.
          </p>
        </div>

        <p class="text-gray-500 dark:text-night-muted text-sm mt-8 italic">
          If you still have any more questions that weren't answered here, feel free to contact us
          at kidsforcodeteam@gmail.com
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
