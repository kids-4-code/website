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
        <TeacherCard name="Ishaan Samantray" position="President">
        </TeacherCard>
        <TeacherCard name="Tyler Song" position="Vice President">
        </TeacherCard>
        <TeacherCard name="Aanya Kapoor" position="Secretary">
        </TeacherCard>
        <TeacherCard name="Albert Gao" position="Secretary">
        </TeacherCard>
        <TeacherCard name="Anil Trevor" position="Secretary">
        </TeacherCard>
        <TeacherCard name="Derek Zhang" position="Team Lead, Python"></TeacherCard>
        <TeacherCard name="Joanne Li" position="Team Lead, Python"></TeacherCard>
        <TeacherCard name="Kevin Xue" position="Team Lead, Web Design">
        </TeacherCard>
        <TeacherCard name="Ved Roychowdhury" position="Team Lead, Web Design">
        </TeacherCard>
        <TeacherCard name="Michael James" position="Team Lead, Java"></TeacherCard>
        <TeacherCard name="Max Shawer" position="Team Lead, Java"></TeacherCard>
        <TeacherCard name="Digonto Chatterjee" position="Team Lead, C++"></TeacherCard>
        <TeacherCard name="Sudiksha Purohit" position="Team Lead, C++"></TeacherCard>


    </div>
</template>