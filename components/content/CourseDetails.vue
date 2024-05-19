<script setup>
import { DateTime, Duration, Interval } from 'luxon';

let props = defineProps({
  // the time of the first class, in valid ISO 8601 format
  time: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
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

const timeZone = "America/New_York"

let start = DateTime.fromISO(props.time, { zone: timeZone })

let dur = Duration.fromObject({ minutes: props.duration })

let interval = Interval.after(start.toLocal(), dur)

let formattedTime = interval.toLocaleString(
  {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  }
)

// Dates
let dates = props.dates.split(",").map((x) => x.trim())
dates = dates.map((d) => {
  let dayParts = d.split("/").map(x => parseInt(x))
  console.log(dayParts.map(x => parseInt(x)))
  let obj = {
    day: dayParts[1],
    month: dayParts[0],
    hour: start.hour,
    minute: start.minute,
  }
  return DateTime.fromObject(obj, {
    zone: timeZone
  })
})

console.log(dates)

dates = dates.map((d) => {
  return d.toLocal().toLocaleString({
    day: "numeric",
    month: "numeric"
  })
}).join(", ")

</script>

<template>
  <div class="py-4 my-4 mx-2 md:mx-6 grid md:grid-cols-2 gap-6 border-t border-b border-gray-200">
    <div>
      <span class="flex items-center">
        <Icon name="tabler:clock" class="text-md text-blue-700"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Time <span
            class="text-gray-400 font-normal">(timezone converted to
            {{ start.toLocal().zoneName.replace("_", " ")
            }}) </span></span>
      </span>
      <div>
        <p class="text-gray-700 text-xl font-sans mb-0">{{ formattedTime }}</p>
      </div>
    </div>
    <!-- <div>
      <span class="flex items-center">
        <Icon name="tabler:clock" class="text-md text-blue-700"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Time (original)</span>
      </span>
      <div>
        <p class="text-gray-700 text-xl font-sans mb-0">{{ time }}</p>
      </div>
    </div> -->

    <div>
      <span class="flex items-center">
        <Icon name="tabler:calendar-event" class="text-md text-emerald-700"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Dates</span>
      </span>
      <!-- <p class="text-gray-700 text-xl font-sans">{{ dates }}</p> -->
      <p class="text-gray-700 text-xl font-sans">—</p>
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
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Ages (recommended)</span>
      </span>
      <p class="text-gray-700 text-xl font-sans">{{ ages }}</p>
    </div>
    <!-- <div>
      <span class="flex items-center">
        <Icon name="tabler:cash" class="text-md text-lime-600"></Icon>
        <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Cost</span>
      </span>
      <p class="text-gray-700 text-xl font-sans">$0</p>
    </div> -->

  </div>
</template>
