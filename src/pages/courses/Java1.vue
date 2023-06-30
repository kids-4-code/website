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
    <CoursePage name="Java 1">
        <template #icon>
            <i class="fa-brands fa-java"></i>
        </template>
        <template #sidebar>
            <table class="border">
                <tr>
                    <th>Prerequisites (recommended)</th>
                    <td>None</td>
                </tr>
                <tr>
                    <th>Difficulty</th>
                    <td>Beginner/intermediate</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>6 weeks, 6 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Saturdays, 7:00-7:45pm Eastern</td>
                </tr>
                <tr>
                    <th>Dates</th>
                    <td>July 15th, July 22nd, July 29th, August 5th, August 12th, August 19th
                    </td>
                </tr>
            </table>
        </template>
        <template #content>
            <!--Course description here-->
            <p class="font-semibold">
                Note: Java 1AB and 1A have been combined into Java 1, which aligns more closely with the
                previous 1AB curriculum.</p>
            <p>
                Java 1 is an introductory course that teaches the basics
                of programming in Java, a widely used object-oriented
                programming language.
            </p>
            <p>
                Students will learn about variables, data types,
                conditional statements, while loops, for loops, and
                more.
            </p>
            <table class="border mt-4">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Getting started: Repl.it setup, printing / Hello World, comments, statements, compiling, escape
                        sequences</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Variables & data types: declaring variables, naming, printing, primitives vs. non-primitives;
                        Variable manipulation: math operators, typecasting</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Conditional statements: logical operators, Boolean algebra, simple if-statements, else-if
                        statements, nesting, short-circuiting; User input w/ the Scanner class. </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        While loops, do-while loops, practice
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        For loops
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        Loops & conditionals practice
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
