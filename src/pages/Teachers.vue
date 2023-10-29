<script>
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import TeacherCard from "../components/TeacherCard.vue";
import Navbar from "../components/Navbar.vue";
export default {
    components: {
        Hero,
        Footer,
        TeacherCard,
        Navbar
    }
}
</script>

<template>
    <Navbar></Navbar>
    <Hero>
        <h1 class="text-5xl font-semibold">Staff</h1>
    </Hero>

    <div class="mx-auto p-8 pb-8 mt-4 gap-4 md:px-32 lg:max-w-6xl grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4">
        <TeacherCard name="Ishaan Samantray" position="President" imagePath="ishaan.png">
        </TeacherCard>
        <TeacherCard name="Tyler Song" position="Vice President">
        </TeacherCard>
        <TeacherCard name="Aanya Kapoor" position="Secretary">
        </TeacherCard>
        <TeacherCard name="Haressh Nair" position="Secretary">
        </TeacherCard>
        <TeacherCard name="Ved Roychowdhury" position="Team Lead, Python"></TeacherCard>
        <TeacherCard name="Joanne Li" position="Team Lead, Python"></TeacherCard>
        <TeacherCard name="Kevin Xue" position="Team Lead, Web Design">
        </TeacherCard>
        <TeacherCard name="Ved Roychowdhury" position="Team Lead, Web Design">
        </TeacherCard>
        <TeacherCard name="Michael James" position="Team Lead, Java"></TeacherCard>
        <TeacherCard name="Max Shawer" position="Team Lead, Java" imagePath="maxwell.jpg"></TeacherCard>
        <TeacherCard name="Digonto Chatterjee" position="Team Lead, C++"></TeacherCard>
        <TeacherCard name="Sudiksha Purohit" position="Team Lead, C++" imagePath="sudiksha.jpg"></TeacherCard>
        <TeacherCard name="Kevin Xue" position="Team Lead, Intro to Programming" imagePath="albert.png">
        </TeacherCard>
        <TeacherCard name="Grant Kim" position="Team Lead, Intro to Programming">
        </TeacherCard>

    </div>
    <Footer></Footer>
</template>