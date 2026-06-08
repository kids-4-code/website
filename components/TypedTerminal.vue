<template>
  <div class="w-full max-w-md text-left rounded-xl border border-gray-200 bg-white shadow-md overflow-hidden">
    <!-- title bar -->
    <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
      <span class="w-3 h-3 rounded-full bg-red-400"></span>
      <span class="w-3 h-3 rounded-full bg-amber-400"></span>
      <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
      <span class="ml-2 text-xs font-sans font-medium text-gray-400">{{ snippet.lang }}</span>
    </div>
    <!-- code -->
    <div class="p-4 font-mono text-sm leading-relaxed min-h-[5.5rem]">
      <p class="text-gray-700 break-all">
        <span class="text-brand-500">›</span> {{ typed
        }}<span class="inline-block w-1.5 h-4 bg-brand-500 align-middle ml-0.5 animate-pulse"></span>
      </p>
      <p v-if="output" class="mt-2 text-emerald-600">{{ output }}</p>
    </div>
  </div>
</template>

<script setup>
const snippets = [
  { lang: "Python", code: 'print("Hello, world!")', out: "Hello, world!" },
  { lang: "Java", code: 'System.out.println("Hi there!");', out: "Hi there!" },
  { lang: "C++", code: 'std::cout << "Let\'s code!";', out: "Let's code!" },
  { lang: "JavaScript", code: 'console.log("Welcome!");', out: "Welcome!" },
]

const idx = ref(0)
const typed = ref("")
const output = ref("")
const snippet = computed(() => snippets[idx.value])
let timer

function loop() {
  const snip = snippets[idx.value]
  let i = 0
  const typeChar = () => {
    typed.value = snip.code.slice(0, i)
    i++
    timer = setTimeout(i <= snip.code.length ? typeChar : showOut, i <= snip.code.length ? 55 : 450)
  }
  const showOut = () => {
    output.value = snip.out
    timer = setTimeout(clearNext, 1900)
  }
  const clearNext = () => {
    typed.value = ""
    output.value = ""
    idx.value = (idx.value + 1) % snippets.length
    timer = setTimeout(loop, 350)
  }
  typeChar()
}

onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typed.value = snippets[0].code
    output.value = snippets[0].out
    return
  }
  loop()
})

onUnmounted(() => clearTimeout(timer))
</script>
