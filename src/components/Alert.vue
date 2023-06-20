<script>
export default {
    props: {
        text: String
    }
}
</script>

<template>
    <div class="flex items-center p-2 gap-2 mb-8 bg-primary-100 my-4 rounded-md border border-primary-400 text-[#7a3352]"
        id="about">
        <i class="fa-solid fa-circle-info inline-block px-2"></i>
        <h3 class="inline-block">
            {{ text }}
        </h3>
    </div>
</template>