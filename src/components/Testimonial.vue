<script>
export default {
    props: {
        source: String,
    }
}
</script>

<template>
    <blockquote class="flex my-4 rounded-md border p-6 drop-shadow-sm">
        <i class="fa-solid fa-quote-left text-primary-800 text-3xl"></i>
        <div class="ml-4">
            <slot class="italic"></slot>
            <p class="font-medium mt-2">— {{ source }}</p>
        </div>
    </blockquote>
</template>