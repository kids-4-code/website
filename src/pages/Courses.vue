<script>
import Hero from "../components/Hero.vue";
import CourseListing from "../components/CourseListing.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        Hero,
        Footer,
        CourseListing
    }
}
</script>

<template>
    <Hero>
        <h1 class="text-5xl font-semibold">Course offerings</h1>
    </Hero>
    <div class="mx-auto p-4 pb-8 mt-4 md:px-32 lg:max-w-5xl">

        <h2 class="text-3xl font-semibold font-serif mb-4 mt-12">🌐 Languages</h2>

        <div class="flex flex-col divide-y-2 border-t-2 border-b-2">
            <router-link to="#python" class="py-2 px-2 font-monospace font-regular hover:bg-zinc-50">Python</router-link>
            <router-link to="#web-design"
                class="py-2 px-2 font-monospace font-regular hover:bg-zinc-50">HTML/CSS/JS</router-link>
            <router-link to="#java" class="py-2 px-2 font-monospace font-regular hover:bg-zinc-50">Java</router-link>
            <router-link to="#cpp" class="py-2 px-2 font-monospace font-regular hover:bg-zinc-50">C++</router-link>
            <router-link to="#other" class="py-2 px-2 font-monospace font-regular hover:bg-zinc-50">Other</router-link>
        </div>

        <h2 class="text-4xl font-semibold font-serif mb-4 mt-12" id="python">Python</h2>
        <img src="../assets/python.png" class="p-16 pb-8">

        <CourseListing details="Sundays, 12:30-1:15pm EST | 6+ y/o" link="courses/python-1A" name="Python 1A">
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
        </CourseListing>
        <CourseListing details="Sundays, 2-2:45pm EST | 8+ y/o" link="courses/python-1AB" name="Python 1AB">
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
        </CourseListing>
        <CourseListing details="Sundays, 3-3:45pm EST | 8+ y/o" link="courses/python-2" name="Python 2">
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
        </CourseListing>


        <h2 class="text-4xl font-semibold font-serif mb-4 mt-12" id="web-design">Web Design</h2>
        <img src="../assets/web-design.png" class="p-16 pb-8">


        <CourseListing details="Saturdays, 1-1:45pm EST | 6+ y/o" link="courses/web-design-1A" name="Web Design 1A">
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

        </CourseListing>
        <CourseListing details="Saturdays, 2:30-3:15pm EST | 8+ y/o" link="courses/web-design-1AB" name="Web Design 1AB">
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

        </CourseListing>
        <CourseListing details="Saturdays, 4-4:45pm EST | 8+ y/o" link="courses/web-design-2" name="Web Design 2" new="true">
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
                    structures of JavaScript and apply it to create games and dynamic web pages.
                </p>
            </template>
        </CourseListing>

        <h2 class="text-4xl font-semibold font-serif mb-4 mt-12" id="java">Java</h2>
        <img src="../assets/java.png" class="p-16 pb-8">
        <CourseListing details="Saturdays, 7-7:45pm EST | 8+ y/o" link="courses/java-1" name="Java 1">
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
        </CourseListing>
        <CourseListing details="Sundays, 11am-11:45am EST" link="courses/java-2" name="Java 2">
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
        </CourseListing>

        <h2 class="text-4xl font-bold font-serif mb-4 mt-12" id="cpp">C++</h2>
        <img src="../assets/cpp.png" class="p-16 pb-8">
        <CourseListing details="Saturdays, 11am-11:45am | 10+ y/o" link="courses/cpp-1" name="C++ 1">
            <template #icon>
                <i class="fa-solid fa-terminal text-xl text-blue-800"></i>
            </template>
            <template #content>
                <p class="text-sm">
                    Covers basic programming concepts in C++, a powerful,
                    performant, and widely used programming language.
                </p>
            </template>
        </CourseListing>

        <!--other-->
        <h2 class="text-3xl font-bold font-serif mb-4 mt-12" id="other">Other courses</h2>
        <CourseListing details="5-5:45pm EST | 6+ y/o" link="courses/intro-to-programming" name="Intro to Programming"
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
        </CourseListing>
    </div>

    <Footer></Footer>
</template>
