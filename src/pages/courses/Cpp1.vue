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
    <CoursePage name="C++ 1">
        <template #icon>
            <i class="fa-solid fa-terminal text-blue-800"></i>
        </template>
        <template #sidebar>
            <table class="border">
                <tr>
                    <th>Prerequisites (recommended)</th>
                    <td>None</td>
                </tr>
                <tr>
                    <th>Difficulty</th>
                    <td>Intermediate</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>6 weeks, 6 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Saturdays, 11:00-11:45am Eastern</td>
                </tr>
                <tr>
                    <th>Dates</th>
                    <td>November 4th, November 11th, November 18th, November 25th, December 2nd, December 9th
                    </td>
                </tr>
            </table>
        </template>
        <template #content>
            <!--Course description here-->
            <p>
                Covers basic programming concepts in C++, a powerful, performant, and widely used programming language.
                Note that since C++ concepts / syntax can be more difficult to understand, we recommend young children or
                those with no previous programming experience take one of our introductory programming classes like Python
                1A/1AB.
            </p>
            <table class="border mt-4">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Getting started: Repl.it setup, printing / Hello World</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Variables & data types: declaring variables, naming, printing, primitives vs. non-primitives</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Variable manipulation: math operators, typecasting</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>User input</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        Conditionals, pt. 1: logical operators, Booleans, if statements
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        Conditionals, pt. 2: else if, nesting, short circuiting
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        While loops, do-while loops, for loops
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