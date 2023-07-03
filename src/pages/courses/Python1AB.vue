<script>
import CoursePage from "../../components/CoursePage.vue";
import Footer from "../../components/Footer.vue";

export default {
    components: {
        CoursePage,
        Footer
    }
}
</script>

<template>
    <CoursePage name="Python 1AB">
        <template #icon>
            <i class="fa-brands fa-python text-green-800"></i>
        </template>
        <template #sidebar>
            <table class="border">
                <tr>
                    <th>Prerequisites (recommended)</th>
                    <td>None</td>
                </tr>
                <tr>
                    <th>Difficulty</th>
                    <td>Beginner</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>6 weeks, 6 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Saturdays, 2:00-2:45pm Eastern</td>
                </tr>
                <tr>
                    <th>Dates</th>
                    <td>July 16th, July 23nd, July 30th, August 6th, August 13th, August 20th
                    </td>
                </tr>
            </table>
        </template>
        <template #content>
            <!--Course description here-->
            <p>
                <b>Python 1AB is a more advanced, faster-paced version
                    of <router-link to="/courses/python-1A" class="underline text-primary-800">Python 1A</router-link> that
                    covers all the
                    content in 1A as
                    well as a few additional topics.
                </b>
            </p>
            <p>
                Python is a general purpose scripting language that's
                popular in data science, AI, and backend programming. In
                Python 1AB, students will learn basic Python syntax &
                programming concepts, like variables, conditional
                statements, data types, etc.
            </p>
            <p>
                Some of the additional topics covered in Python 1AB
                include scope, while loops, for loops, etc.
            </p>
            <table class="border mt-4">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Getting started: coding languages, Repl.it setup, Hello World, printing, comments, escape sequences,
                        interpreting</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Data types: numbers (int & float), booleans, strings; Variables: naming, declarations, dynamic
                        typing, printing</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>User input, type casting, math & logical operators</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        Conditionals
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        While loops: syntax, infinite loops, special cases, counting, review
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        For loops: iterables, range(), while loops vs. for loops, composition
                    </td>
                </tr>
            </table>
            <p class="italic my-4">
                This syllabus represents a rough outline of our curriculum and may not match exactly what is taught in
                class.
            </p>
        </template>
    </CoursePage>
    <Footer></Footer>
</template>
