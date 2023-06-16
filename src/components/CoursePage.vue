<script>
import Hero from "../components/Hero.vue";

export default {
    components: {
        Hero
    },
    props: {
        name: String,
        // enrollLink: String
    }
}
</script>

<template>
    <Hero>
        <h1 class="text-5xl font-semibold">
            <slot name="icon"></slot> {{ name }}
        </h1>
    </Hero>
    <div class="mx-auto p-4 pb-8 mt-4 md:px-32 lg:max-w-6xl">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:basis-2/3">
                <h2 class="font-serif font-bold text-3xl">
                    Course description
                </h2>
                <slot name="content" />
            </div>
            <div class="md:basis-1/3">
                <slot name="sidebar" />

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGXa26ecBIs3v1CBOTWYi4kmnTKoXxhtXm7u59acVcSbQppA/viewform"
                    target="_blank" class="bg-primary-800 text-white font-bold rounded-md
                     hover:bg-primary-600 p-4 text-lg w-full text-center inline-block my-4">
                    Enroll
                </a>
            </div>
        </div>
    </div>
</template>