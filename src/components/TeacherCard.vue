<script>
export default {
    props: {
        name: String,
        position: String,
        imagePath: String,
    }
}
</script>

<template>
    <div class="bg-white border drop-shadow-sm rounded-md p-8">
        <img :src="imagePath ?? `https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg`"
            class="rounded-full mb-4">

        <h2 class="text-center text-xl font-semibold mb-1">
            {{ name }}
        </h2>
        <h3 class="text-center">
            {{ position }}
        </h3>
    </div>
</template>