<script>
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
    components: {
        Hero,
        Footer,
        Navbar
    }
}
</script>

<template>
    <Navbar></Navbar>
    <Hero>
        <h1 class="text-5xl font-semibold">Donate</h1>
    </Hero>

    <div class="mx-auto p-4 pb-8 mt-4 md:px-32 lg:max-w-5xl">
        <h1 class="text-3xl font-semibold font-serif mb-4">Support our cause!</h1>
        <hr class="my-4">

        <p class="my-4">
            Are you thinking of donating to Kids For Code? Your donation will go a long way to provide free, volunteer
            taught virtual education! Even without a donation, all of us at Kids For Code thank you for letting us teach
            your child, and we'd be delighted to see them return for another session. Thank you!
        </p>
        <p class="my-4">
            Currently, Kids For Code does not have an online donation page set up. To donate to us directly, please contact
            us at <b>kidsforcodeteachers@gmail.com</b>. As of now, Kids For Code is not a registered 501(c)(3) nonprofit
            organization, so consider your donation not
            tax-deductible. If you'd like us to notify you upon becoming a 501(c)(3) nonprofit, please let us know when you
            contact us by adding a return email.
        </p>
        <p class="font-semibold my-4 text-xl">
            Thank you for donating!
        </p>
    </div>
    <Footer></Footer>
</template>