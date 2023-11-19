<script setup>
defineProps({
  time: {
    type: String,
    required: true
  },
  dates: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  ages: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="py-4 my-4 mx-2 md:mx-6 grid md:grid-cols-2 gap-6 border-t border-b border-gray-200">
    <div>
      <span class="flex items-center">
        <Icon name="tabler:clock" class="text-md text-blue-700"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Time</span>
      </span>
      <p class="text-gray-700 text-xl font-sans">{{ time }}</p>
    </div>
    <div>
      <span class="flex items-center">
        <Icon name="tabler:calendar-event" class="text-md text-emerald-700"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Dates</span>
      </span>
      <p class="text-gray-700 text-xl font-sans">{{ dates }}</p>
    </div>
    <div>
      <span class="flex items-center">
        <Icon name="tabler:chart-bar" class="text-md text-purple-700"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Difficulty</span>
      </span>
      <p class="text-gray-700 text-xl font-sans">{{ level }}</p>
    </div>
    <div>
      <span class="flex items-center">
        <Icon name="tabler:balloon" class="text-md text-amber-700"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Ages</span>
      </span>
      <p class="text-gray-700 text-xl font-sans">{{ ages }}</p>
    </div>

  </div>
</template>
