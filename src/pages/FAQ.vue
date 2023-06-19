<script>
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        Hero,
        Footer
    }
}
</script>

<template>
    <Hero>
        <h1 class="text-5xl font-semibold">Frequently asked questions</h1>
    </Hero>
    <div class="mx-auto p-8 pb-8 md:px-32 lg:max-w-5xl">
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Are there any required course materials?
        </h3>
        <p>No — everything is provided by Kids for Code for free.</p>
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Can I change what course I registered for?
        </h3>

        <p>
            If you'd like to change your course selections, please reach out
            to us at kidsforcodeteam@gmail.com.
        </p>
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Will students be able to ask questions outside of class?
        </h3>
        <p>
            Yes, students can ask questions in the Google Classroom for
            their class and one of our teachers for that class should be
            able to answer it.
        </p>
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: (Maryland only) Can I get SSL hours for teaching?
        </h3>
        <p>
            We're currently still working on nonprofit status in Maryland,
            but after that's completed, we will be able to issue SSL hours
            for teaching classes.
        </p>
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Can I sign up for classes even if I haven't taken the
            previous ones?
        </h3>
        <p>
            We don't enforce prerequisites — however we do recommend that
            you take previous classes before signing up for more advanced
            ones (for example, we'd reccomend taking Python 1 before you
            take Python 2).
            <br />
            If you do think you're ready to take a more advanced class &
            know all the material from the previous ones (you can review the
            course descriptions & syllabus to get an idea of what is
            taught), feel free to go ahead and sign up!
        </p>
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Can I sign up for classes even if I haven't taken the
            previous ones?
        </h3>
        <p>
            We don't enforce prerequisites — however we do recommend that
            you take previous classes before signing up for more advanced
            ones (for example, we'd reccomend taking Python 1 before you
            take Python 2).
            <br />
            If you do think you're ready to take a more advanced class &
            know all the material from the previous ones, feel free to go
            ahead and sign up!
        </p>
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Do parents need to be present during classes?
        </h3>
        <p>Parents don't need to be present during classes.</p>
        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Will I need a computer to take classes?
        </h3>
        <p>
            A laptop or desktop computer is recommended.
            (Chromebooks are fine). Our curriculum is designed around
            <a class="font-semibold underline" href="https://repl.it" target="_blank">repl.it ↗</a>, an online code editor.
            While it does work on tablets & mobile
            devices, it is significantly more difficult to use.
        </p>

        <hr class="my-4" />
        <h3 class="font-serif font-bold text-lg mb-2 mt-4">
            Q: Are there homework assignments?
        </h3>
        <p>
            Yes, students will be given coding assignments to work on
            between classes, which will be turned in for feedback from our
            teachers.
        </p>
        <hr class="my-4" />
        <p class="font-semibold">
            If you still have any more questions not answered here, feel
            free to contact us at kidsforcodeteam@gmail.com
        </p>
    </div>
    <Footer />
</template>