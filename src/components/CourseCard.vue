<script>
export default {
    props: {
        details: String,
        link: String,
        name: String,
        new: Boolean
    },
};
</script>

<template>
    <div class="bg-white border drop-shadow-sm p-6 rounded-md">
        <h3 class="text-xl font-serif font-bold">
            <slot name="icon"></slot>
            {{ name }} <span class="inline-block bg-blue-50 text-sm p-1 rounded font-sans align-top" v-if="new">✨
                new!</span>
        </h3>
        <p class="text-sm font-light text-zinc-400">
            {{ details }}
        </p>
        <hr class="my-2" />
        <slot class="text-sm" name="content" />

        <router-link class="block mt-4 font-semibold underline" :to="link">Learn more</router-link>
    </div>
</template>
