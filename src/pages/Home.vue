<script>
import CourseCard from "../components/CourseCard.vue";
import Testimonial from "../components/Testimonial.vue";
import Footer from "../components/Footer.vue";
import Hero from "../components/Hero.vue";

export default {
    components: {
        CourseCard,
        Testimonial,
        Footer,
        Hero
    }
}
</script>

<template>
    <Hero>
        <h1 class="text-5xl font-semibold">
            Learn coding with
            <span
                class="font-serif underline decoration-[6px] decoration-primary-700 font-extrabold text-primary-800">free</span>,
            <span
                class="font-serif underline decoration-[6px] decoration-primary-700 font-extrabold text-primary-800">virtual</span>
        </h1>
        <h1 class="text-5xl font-semibold">programming classes.</h1>

        <div class="bg-primary-700 h-3 my-4 w-20">&nbsp;</div>

        <p>
            Kids for Code teachers are high school students who are
            passionate about computer science. We want to teach and prepare
            kids to become active and engaged citizens in the future, by
            providing them access to computer science skills not taught in
            schools.
        </p>
    </Hero>
    <div class="mx-auto p-8 pb-8 md:px-32 lg:max-w-5xl">
        <div class="flex items-center p-2 gap-2 mb-8 bg-primary-100 my-4 rounded-md border border-primary-400 text-[#7a3352]"
            id="about">
            <i class="fa-solid fa-circle-info inline-block px-2"></i>
            <h3 class="inline-block">
                Registration is now open for the 2023 Summer session!
            </h3>
        </div>
        <h2 class="text-3xl font-bold mb-4 font-serif">About Kids for Code</h2>
        <p class="my-2">
            Kids for Code teachers are high school students who are passionate
            about computer science. We are experienced and qualified in the
            computer science field, with many of our teachers winning awards and
            creating apps.
        </p>
        <p class="my-2">
            In today’s increasingly technology-centered world, computer science
            is an ever-expanding and practically essential skill. We want to
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
                <h1 class="text-6xl font-extrabold text-blue-700">3400+</h1>
                <h3>lifetime students</h3>
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
            Via Zoom, we host one hour classes on the weekend, typically with
            three teachers per class. We utilize Zoom's "breakout room" feature,
            so students or small groups of students with a niche problem can
            receive help separate from the main class, then return to class.
        </p>

        <h3 class="text-xl font-bold font-serif mt-4 mb-2">
            📝 Google Classroom
        </h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
        </p>

        <h3 class="text-xl font-bold font-serif mt-4 mb-2">
            💎 Small class sizes
        </h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
        </p>

        <h3 class="text-xl font-bold font-serif mt-4 mb-2">
            📚 Custom curriculum
        </h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
        </p>
    </div>
    <div class="background">
        <div class="m-auto p-16 md:px-32 lg:max-w-5xl">
            <div class="border p-6 my-4 bg-white rounded-md drop-shadow-sm">
                <h3 class="text-3xl font-bold font-serif mb-2">2023 Summer</h3>
                <hr class="my-4" />
                <p>
                    Classes for the 2023 Summer session will run for 8 weeks,
                    from <b>Sat, July 1st</b> to <b>Sun, August 20th</b>.
                </p>
            </div>
            <h2 class="text-2xl font-bold font-serif my-2">Python</h2>
            <hr />

            <!-- Python classes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <CourseCard details="Sundays, 12:30-1:15pm EST | 6+ y/o" link="courses/python-1A" name="Python 1A">
                    <template #icon>
                        <i class="fa-brands fa-python text-xl text-green-800"></i>
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
                <CourseCard details="4-4:45pm EST | 8+ y/o" link="courses/web-design-2" name="Web Design 2" new="true">
                    <template #icon>
                        <i class="fa-brands fa-js text-xl text-yellow-800"></i>
                    </template>
                    <template #content>
                        <p class="text-sm">
                            Web Design 2 is a fast paced, advanced class that
                            introduces JavaScript, a popular scripting language that
                            can be used to add functionality & interactivity to
                            websites.
                        </p>
                        <p class="text-sm">
                            Students will learn the syntax, data types, & control
                            structures of JavaScript.
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
                I liked how they provided us with lots of resources and
                reviews to help aid us with the homework and understanding
                the material.
            </p>
        </Testimonial>
        <Testimonial source="Web Design, Java, and Python student">
            <p>
                The classes are interesting and challenging. The teachers
                are also very attentive. The amount of content is just right
                for me to digest in the class.
            </p>
        </Testimonial>
        <Testimonial source="Python student">
            <p>
                It taught me a lot and it gave me more knowledge. I like how
                you guys didn't put too much information in one topic so it
                didn't overload us.
            </p>
        </Testimonial>
        <Testimonial source="Python & Web Design studen">
            <p>
                I actually learned quite a lot!
            </p>
        </Testimonial>
    </div>

    <div class="background mt-8">
        <div class="m-auto p-8 md:px-32 lg:max-w-5xl">
            <div class="bg-white p-8 rounded-md border">
                <h2 class="text-3xl font-bold my-4 font-serif">Register now</h2>
                <ul class="list-disc list-inside">
                    <li>
                        Classes for the 2023 Summer session will run from July
                        2nd to August 21st.
                    </li>
                    <li>
                        View the full class schedule
                        <a href="https://example.com" class="underline font-semibold">here↗</a>
                    </li>
                    <li>
                        See our
                        <a class="underline font-semibold">FAQ page</a> if you
                        have any questions
                    </li>
                </ul>
                <div class="p-2 bg-primary-100 my-4 rounded-md border border-primary-400 text-[#7a3352]">
                    <i class="fa-solid fa-circle-info inline-block px-2"></i>
                    <h3 class="inline-block">
                        Registration is now open for the 2023 Summer session!
                    </h3>
                </div>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGXa26ecBIs3v1CBOTWYi4kmnTKoXxhtXm7u59acVcSbQppA/viewform"
                    target="_blank"
                    class="my-2 inline-block py-2 font-bold px-8 bg-primary-600 text-white rounded-md drop-shadow-sm">Enroll</a>
            </div>
        </div>
    </div>
    <div class="mx-auto p-8 mt-12 md:px-32 lg:max-w-5xl">
        <h2 class="text-3xl font-bold my-4 font-serif">Apply to teach</h2>
        <!--todo: write new copy here-->
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
        </p>

        <ul class="list-disc list-inside my-4">
            <li>qualification 1</li>
            <li>qualification 2</li>
            <li>qualification 3</li>
        </ul>

        <a class="my-2 font-bold inline-block py-2 px-6 bg-primary-600 text-white rounded-md drop-shadow-sm">Apply
            here</a>
    </div>

    <Footer></Footer>
</template>