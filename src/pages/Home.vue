<script>
import CourseCard from "../components/CourseCard.vue";
import Testimonial from "../components/Testimonial.vue";
import Footer from "../components/Footer.vue";
import HomePgHero from "../components/HomePgHero.vue";
import Alert from "../components/Alert.vue";
import Navbar from "../components/Navbar.vue";

export default {

    components: {
        CourseCard,
        Testimonial,
        Footer,
        HomePgHero,
        Alert,
        Navbar
    },

    data() {
        return {
            shownText: "",
        }
    },

    async mounted() {
        const textList = ["programming classes", "web design classes", "Python classes", "JavaScript classes", "C++ classes", "Java classes"]


        const type = async (text) => {

            let letters = text.split("");
            for (let i = 0; i < letters.length; i++) {
                await delay(200)
                this.shownText += letters[i];
            }

            await delay(1000)

            // Now delete the text
            for (let i = 0; i < letters.length; i++) {
                await delay(150)
                this.shownText = this.shownText.slice(0, -1);
            }
        }

        while (true) {
            for (let i = 0; i < textList.length; i++) {
                await type(textList[i]);
            }
        }

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
}
</script>

<template>
    <Navbar></Navbar>
    <HomePgHero>
        <h1 class="text-5xl font-semibold text-zinc-600">
            Free, virtual
        </h1>
        <div class="flex flex-col justify-start h-[6rem] sm:h-fit sm:min-w-[36rem]">
            <div class="typing-wrapper">
                <h1 class="text-5xl font-semibold text-primary-600" id="sentence">
                    {{ shownText }}<span class="cursor"></span>
                </h1>
            </div>
        </div>


        <div class="bg-primary-700 h-3 my-4 w-20 rounded-sm">&nbsp;</div>

        <div class="rounded-lg border p-2 px-4 flex lg:mr-48 flex-col md:flex-row items-center sm:gap-6 gap-4">
            <a target="_blank"
                class="disabled gradient my-2 inline-block py-2 font-bold font-sans px-8 bg-zinc-200 text-zinc-500 rounded-md drop-shadow-sm">Registration
                has closed.</a>
            <p class="font-medium font-serif  text-zinc-500">Stay tuned for info on our next
                session!</p>
        </div>
    </HomePgHero>
    <div class="mx-auto p-8 pb-8 md:px-32 lg:max-w-5xl">

        <div
            class="ring ring-primary-100 ring-offset-4 p-8 md:p-16 lg:mt-8 mb-16 rounded-md bg-zinc-100 font-monospace text-zinc-600">
            <ul class="list-outside arrow-list text-lg">
                <li class="font-bold pl-2 underline decoration-primary-600 decoration-2 underline-offset-4 mb-4">
                    Coding is more important
                    than ever in the 21st century.
                </li>
                <li class="pl-2 mb-4">
                    We're a group of high school volunteers <span class="font-medium">passionate about computer
                        science.</span>
                </li>
                <li class="pl-2"> Our goal is to equip kids with the knowledge & skills they need to succeed in a world
                    where technology
                    is
                    more crucial than ever, <span class="font-medium">for free.</span><span
                        class="blink font-bold text-primary-600">|</span></li>
            </ul>
        </div>
        <h2 class="text-3xl font-bold mb-4 font-serif">About Kids for Code</h2>



        <p class="my-2">
            Kids for Code teachers are high school students who are passionate
            about computer science - many of our teachers have won awards and
            created apps in the past.
        </p>
        <p class="my-2">
            In today’s increasingly technology-centered world, computer science
            is quickly becoming a practically essential skill. We want to
            teach and prepare kids to become active and engaged citizens in the
            future, by providing them access to computer science skills not
            taught in schools.
        </p>
        <p class="my-2">
            We truly believe that by introducing computer science to children at
            an early age, we are setting them up for a brighter future-a future
            that they can code themselves-and creating a generation that is
            innovative, passionate, and driven. After all, it’s never too early
            to start learning!
        </p>

        <!-- <hr class="my-4" />
        <h3 class="text-primary-600 font-bold">Interested in teaching?</h3>
        <a class="underline">Apply here.</a>
        <hr class="mt-4" /> -->
    </div>
    <div class="mx-auto px-8 pt-0 md:px-32 lg:max-w-5xl">
        <!-- <h2 class="text-3xl font-bold mb-4">Stats</h2> -->
        <div class="grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            <div class="p-8">
                <h1 class="text-6xl font-extrabold text-blue-700">4000+</h1>
                <h3>lifetime signups</h3>
            </div>
            <div class="p-8">
                <h1 class="text-6xl font-extrabold text-yellow-700">11</h1>
                <h3>classes</h3>
            </div>
            <div class="p-8">
                <h1 class="text-6xl font-extrabold text-green-700">100+</h1>
                <h3>teachers</h3>
            </div>
        </div>
    </div>

    <div class="mx-auto p-8 mb-8 md:px-32 lg:max-w-5xl">
        <h2 class="text-3xl font-bold my-4 font-serif" id="courses">
            Course overview
        </h2>

        <h3 class="text-xl font-bold font-serif mt-4 mb-2">💻 Zoom</h3>
        <p>
            Through our online platform, we offer interactive classes conducted via Zoom, ensuring that students can learn
            from the comfort of their own homes. Zoom provides a dynamic virtual classroom environment, allowing for
            real-time interaction between our expert instructors and students. Our instructors are experienced professionals
            who are passionate about sharing their knowledge and helping students unlock their potential.

        </p>

        <img src="../assets/zoom.png" class="p-8 md:p-16 pb-8">

        <p class="text-zinc-400 text-center text-sm font-monospace">— past Zoom classes</p>


        <h3 class="text-xl font-bold font-serif mt-4 mb-2">
            📝 Google Classroom
        </h3>
        <p>
            To streamline the learning process and facilitate seamless communication, we utilize Google Classroom as our
            learning management system. This platform serves as a centralized hub for course materials, assignments, and
            discussions. Students can access resources, submit their work, and engage in collaborative learning with their
            peers. Google Classroom fosters an organized and efficient learning environment that promotes engagement and
            academic growth.

        </p>

        <h3 class="text-xl font-bold font-serif mt-4 mb-2">
            💎 Small class sizes
        </h3>
        <p>
            We take pride in offering small class sizes to ensure personalized attention and effective learning outcomes. By
            keeping our classes small, we create an environment where students can actively participate, ask questions, and
            receive individualized feedback. Our instructors can focus on each student's progress and tailor their teaching
            approach to meet their unique needs. Small class sizes foster a supportive and engaging atmosphere that
            maximizes learning potential.

        </p>

        <h3 class="text-xl font-bold font-serif mt-4 mb-2">
            📚 Custom curriculum
        </h3>
        <p>
            At our organization, we understand that every student is unique, and their learning journey should reflect that.
            That's why we have developed a custom curriculum that aligns with the latest industry trends and best practices.
            Our curriculum is carefully designed to introduce students to coding concepts progressively, building their
            skills step by step. We emphasize hands-on projects and practical applications to reinforce theoretical
            knowledge. Our custom curriculum ensures that students gain a comprehensive understanding of coding languages,
            enabling them to unleash their creativity and problem-solving abilities.
        </p>

        <img src="../assets/slides.png" class="p-8 md:p-16 pb-8">
    </div>
    <div class="background">
        <div class="m-auto p-4 md:px-32 lg:max-w-5xl">
            <div class="border p-6 pb-0 my-4 bg-white rounded-md drop-shadow-sm">
                <h3 class="text-3xl font-bold font-serif mb-2">2023 Summer</h3>
                <hr class="my-4" />
                <div class="flex">
                    <div class="py-4 w-1/2">
                        <p class="text-sm font-monospace text-zinc-600">Session length</p>
                        <h3 class="font-semibold font-serif text-3xl text-yellow-700">6 weeks</h3>
                    </div>
                    <div class="py-4 w-1/2">
                        <p class="text-sm font-monospace text-zinc-600">Dates</p>
                        <h3 class="font-bold font-serif text-3xl text-yellow-700">7/15 — 8/20</h3>
                    </div>
                </div>
                <Alert
                    text="Registration has now closed for the 2023 Summer Session. Please email us at kidsforcodeteam@gmail.com if you would still like to enroll.">
                </Alert>
            </div>
            <h2 class="text-2xl font-bold font-serif my-2">Python</h2>
            <hr />

            <!-- Python classes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <CourseCard details="Sundays, 12:30-1:15pm EST | 6+ y/o" link="courses/python-1A" name="Python 1A">
                    <template #icon>
                        <i class="fa-brands fa-python text-xl text-green-800 "></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            A beginner level course aimed at children ages 6 & up.
                            It provides an gentle introduction to Python &
                            text-based coding.
                        </p>
                        <p class="text-sm">
                            Python is a general purpose scripting language that's
                            popular in data science, AI, and backend programming.
                        </p>
                        <p class="text-sm">
                            In Python 1A, students will learn basic Python syntax &
                            programming concepts, like variables, conditional
                            statements, data types, etc.
                        </p>
                    </template>
                </CourseCard>
                <CourseCard details="Sundays, 2-2:45pm EST | 8+ y/o" link="courses/python-1AB" name="Python 1AB">
                    <template #icon>
                        <i class="fa-brands fa-python text-xl text-green-800"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            <b>Python 1AB is a more advanced, faster-paced version
                                of Python 1A that covers all the content in 1A as
                                well as a few additional topics.
                            </b>
                        </p>
                        <p class="text-sm">
                            Python is a general purpose scripting language that's
                            popular in data science, AI, and backend programming. In
                            Python 1AB, students will learn basic Python syntax &
                            programming concepts, like variables, conditional
                            statements, data types, etc.
                        </p>
                        <p class="text-sm">
                            Some of the additional topics covered in Python 1AB
                            include scope, while loops, for loops, etc.
                        </p>
                    </template>
                </CourseCard>
                <CourseCard details="Sundays, 3-3:45pm EST | 8+ y/o" link="courses/python-2" name="Python 2">
                    <template #icon>
                        <i class="fa-brands fa-python text-xl text-green-800"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            Python 2 builds on the material covered in Python
                            1A/1AB, taking students on a deeper journey into the
                            Python programming language. It includes crucial
                            concepts like functions, lists, string manipulation, and
                            file I/O that are essential for more complex
                            applications.
                        </p>
                        <p class="text-sm">
                            Python 2 will give students a solid foundation in these
                            universal programming concepts which can then be applied
                            to many other popular programming languages.
                        </p>
                    </template>
                </CourseCard>
            </div>
            <h2 class="text-2xl font-bold font-serif my-2">Web Design</h2>
            <hr />


            <!-- Web Design classes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <CourseCard details="Saturdays, 1-1:45pm EST | 6+ y/o" link="courses/web-design-1A" name="Web Design 1A">
                    <template #icon>
                        <i class="fa-brands fa-html5 text-xl text-[#e56027]"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            Introduces students to the basic principles of web
                            development. Students will learn how to develop and
                            style basic websites using HTML & CSS.
                        </p>
                        <p class="text-sm">
                            Topics covered in 1A include HTML page structure, basic
                            CSS styling, and the CSS box model. Students will able
                            to create their own static (no JavaScript) website by
                            the end of the class.
                        </p>
                    </template>

                </CourseCard>
                <CourseCard details="Saturdays, 2:30-3:15pm EST | 8+ y/o" link="courses/web-design-1AB"
                    name="Web Design 1AB">
                    <template #icon>
                        <i class="fa-brands fa-html5 text-xl text-[#e56027]"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            <b>Web Design 1AB is a more advanced, faster-paced version
                                of Web Design 1A that covers all the content in 1A as
                                well as a few additional topics.
                            </b>
                        </p>
                        <p class="text-sm">
                            Introduces students to the basic principles of web
                            development. Students will learn to develop and style
                            basic websites using HTML & CSS.
                        </p>
                        <p class="text-sm">
                            In addition to the topics covered in 1A: HTML page
                            structure, basic CSS styling, and the CSS box model, 1AB
                            will learn about more advanced CSS styling and a few
                            additional HTML tags. Students will able to create their
                            own static (no JavaScript) website by the end of the
                            class.
                        </p>
                    </template>

                </CourseCard>
                <CourseCard details="Saturdays, 4-4:45pm EST | 8+ y/o" link="courses/web-design-2" name="Web Design 2"
                    new="true">
                    <template #icon>
                        <i class="fa-brands fa-js text-xl text-yellow-800"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            Web Design 2 is a entirely new, fast paced, advanced class that
                            introduces JavaScript, a popular scripting language that
                            can be used to add functionality & interactivity to
                            websites.
                        </p>
                        <p class="text-sm">
                            Students will learn the syntax, data types, & control
                            structures of JavaScript and apply that to making their websites more interactive and creating
                            web games using HTML canvas.
                        </p>
                    </template>
                </CourseCard>
            </div>
            <h2 class="text-2xl font-bold font-serif my-2">Java</h2>
            <hr />

            <!-- Java classes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <CourseCard details="Saturdays, 7-7:45pm EST | 8+ y/o" link="courses/java-1" name="Java 1">
                    <template #icon>
                        <i class="fa-brands fa-java text-xl text-[#ec2025]"></i>
                    </template>
                    <template #content>
                        <p class="font-semibold text-sm">
                            Note: Java 1AB and 1A have been combined into Java 1, which aligns more closely with the
                            previous 1AB curriculum.</p>
                        <p class="text-sm">
                            Java 1 is an introductory course that teaches the basics
                            of programming in Java, a widely used object-oriented
                            programming language.
                        </p>
                        <p class="text-sm">
                            Students will learn about variables, data types,
                            conditional statements, while loops, for loops, and
                            more.
                        </p>
                    </template>
                </CourseCard>
                <CourseCard details="Sundays, 11am-11:45am EST" link="courses/java-2" name="Java 2">
                    <template #icon>
                        <i class="fa-brands fa-java text-xl text-[#ec2025]"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            Java 2 is a more advanced course that expands on the
                            knowledge gained in Java 1 to dive deeper into the Java
                            programming language. Students will continue learning
                            foundational programming skills in Java.
                        </p>
                        <p class="text-sm">
                            Topics covered include functions, arrays, string
                            manipulation, and file I/O.
                        </p>
                    </template>
                </CourseCard>
            </div>

            <!--C++ classes-->
            <h2 class="text-2xl font-bold font-serif my-2">C++</h2>
            <hr />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <CourseCard details="Saturdays, 11am-11:45am | 10+ y/o" link="courses/cpp-1" name="C++ 1">
                    <template #icon>
                        <i class="fa-solid fa-terminal text-xl text-blue-800"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            Covers basic programming concepts in C++, a powerful,
                            performant, and widely used programming language.
                        </p>
                    </template>
                </CourseCard>
            </div>

            <!--other-->
            <h2 class="text-2xl font-bold font-serif my-2">Other courses</h2>
            <hr />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <CourseCard details="5-5:45pm EST | 6+ y/o" link="courses/intro-to-programming" name="Intro to Programming"
                    new="true">
                    <template #icon>
                        <i class="fa-solid fa-code text-xl text-primary-800"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            Intro to Programming is a gentle introduction to the
                            fundamental concepts of computer science. Students will
                            learn to think like a programmer and solve problems
                            using code in a fun and engaging way using Scratch.
                        </p>
                    </template>
                </CourseCard>
            </div>
        </div>
    </div>

    <!--Student testimonials section-->
    <div class="mx-auto p-8 md:px-32 lg:max-w-5xl">
        <h2 class="text-3xl font-bold my-4 font-serif">
            What our students say
        </h2>

        <Testimonial source="Java and Python student">
            <p>
                I liked how they provided us with <span
                    class="underline decoration-yellow-600 decoration-2 underline-offset-4">lots of
                    resources and
                    reviews</span> to help aid us with the homework and <span
                    class="underline decoration-yellow-600 decoration-2 underline-offset-4">understanding
                    the material.</span>
            </p>
        </Testimonial>
        <Testimonial source="Web Design, Java, and Python student">
            <p>
                The classes are <span class="underline decoration-yellow-600 decoration-2 underline-offset-4">interesting
                    and
                    challenging.</span> The teachers
                are also very attentive. The amount of content is <span
                    class="underline decoration-yellow-600 decoration-2 underline-offset-4">just right
                    for me</span> to digest in the class.
            </p>
        </Testimonial>
        <Testimonial source="Python student">
            <p>
                It <span class="underline decoration-yellow-600 decoration-2 underline-offset-4">taught me a lot and it gave
                    me more knowledge</span>. I like how
                you guys didn't put too much information in one topic so it
                <span class="underline decoration-yellow-600 decoration-2 underline-offset-4">didn't overload us.</span>
            </p>
        </Testimonial>
        <Testimonial source="Python & Web Design student">
            <p>
                I actually learned <span class="underline decoration-yellow-600 decoration-2 underline-offset-4">quite a
                    lot!</span>
            </p>
        </Testimonial>
    </div>

    <div class="background mt-8">
        <div class="m-auto p-8 md:px-32 lg:max-w-5xl">
            <div class="bg-white p-8 rounded-md border">
                <h2 class="text-3xl font-bold my-4 font-serif">Register now</h2>
                <ul class="list-disc list-inside">
                    <li>
                        Classes for the 2023 Summer session will run for 6 weeks, from July
                        15th to August 20th.
                    </li>
                    <li>
                        View the full class schedule
                        <a href="https://docs.google.com/document/d/1kX1w2TKUfz0x261wWIiBJqLF76C1rBK-011kV0qd1R4/edit?usp=sharing"
                            class="underline font-semibold" target="_blank">here↗</a>
                    </li>
                    <li>
                        See our
                        <router-link class="underline font-semibold" to="/faq">FAQ page</router-link> if you
                        have any questions
                    </li>
                </ul>
                <Alert
                    text="Registration has now closed for the 2023 Summer Session. Please email us at kidsforcodeteam@gmail.com if you would still like to enroll.">
                </Alert>

                <a target="_blank"
                    class="my-2 inline-block py-2 font-bold px-8 bg-zinc-200 text-zinc-500 rounded-md drop-shadow-sm">Enroll</a>
            </div>
        </div>
    </div>
    <div class="mx-auto p-8 mt-12 md:px-32 lg:max-w-5xl">
        <h2 class="text-3xl font-bold my-4 font-serif">Apply to teach</h2>
        <!--todo: write new copy here-->
        <p>
            Apply to teach for Kids for Code! We are looking
            for teachers who:
        </p>

        <ul class="list-disc list-inside my-4">
            <li>Are willing to work with young children</li>
            <li>Have experience in the programming languages you'd like to teach</li>
            <li>Are responsible and able to put in some time outside of class. </li>
        </ul>

        <Alert
            text="Registration has now closed for the 2023 Summer Session. Please email us at kidsforcodeteam@gmail.com if you would still like to enroll.">
        </Alert>

        <div class="flex gap-2">
            <a class="my-2 font-bold inline-block py-2 px-6 bg-zinc-200 text-zinc-500 rounded-md drop-shadow-sm">New
                teachers</a>
            <a class="my-2 font-bold inline-block py-2 px-6 bg-zinc-200 text-zinc-500  rounded-md drop-shadow-sm"
                href="https://forms.gle/eXeE7rHgooKdXgFcA">Returning teachers</a>
        </div>

    </div>

    <Footer></Footer>
</template>

<style>
.typing-wrapper {
    display: flex;
    align-items: center;
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    40% {
        opacity: 1;
    }

    60% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
}

.cursor {
    display: inline-block;
    width: 0.35rem;
    border-radius: 0.125rem;
    height: 3rem;
    background-color: #a64f77;
    margin-left: 0.4rem;
    margin-bottom: -0.2rem;
    animation: blink 0.65s linear infinite alternate;
}

.blink {
    animation: blink 0.65s linear infinite alternate;
}

.arrow-list {
    list-style-type: "⇒";
}
</style>
