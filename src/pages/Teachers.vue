<script>
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import TeacherCard from "../components/TeacherCard.vue";
export default {
    components: {
        Hero,
        Footer,
        TeacherCard
    }
}
</script>

<template>
    <Hero>
        <h1 class="text-5xl font-semibold">Staff</h1>
    </Hero>

    <div class="mx-auto p-8 pb-8 mt-4 gap-4 md:px-32 lg:max-w-6xl grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4">
        <TeacherCard name="Hongjin Fang" position="President">
        </TeacherCard>
        <TeacherCard name="Ishaan Samantray" position="Vice President">
        </TeacherCard>
        <TeacherCard name="Tyler Song" position="">
        </TeacherCard>
    </div>
</template>