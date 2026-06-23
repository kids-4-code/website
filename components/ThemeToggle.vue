<template>
  <button type="button" @click="toggle" aria-label="Toggle dark mode"
    class="flex items-center justify-center w-9 h-9 rounded-full text-gray-600 hover:bg-gray-100 dark:text-night-muted dark:hover:bg-night-input transition-colors">
    <!-- Reactive state drives which single icon renders, so it never depends on
         Tailwind purging dark: utilities. Before mount we show the moon (matches
         the light-mode static HTML); onMounted syncs to the real theme. -->
    <Icon v-if="isDark" name="tabler:sun" class="text-xl"></Icon>
    <Icon v-else name="tabler:moon" class="text-xl"></Icon>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark")
})

function toggle() {
  isDark.value = document.documentElement.classList.toggle("dark")
  try {
    localStorage.setItem("theme", isDark.value ? "dark" : "light")
  } catch (e) {
    /* private mode / storage disabled — toggle still works for this session */
  }
}
</script>
