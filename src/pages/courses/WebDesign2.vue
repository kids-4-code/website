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
    <CoursePage name="Web Design 2">
        <template #icon>
            <i class="fa-brands fa-js"></i>
        </template>
        <template #sidebar>
            <table class="border">
                <tr>
                    <th>Prerequisites (recommended)</th>
                    <td>Web Design 1A or 1AB</td>
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
                    <td>Saturdays, 4:00-4:45pm Eastern</td>
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
            <p>
                <b>New for the 2023 Summer session!</b>
            </p>
            <p>
                Web Design 2 is a fast paced, advanced class that
                introduces JavaScript, a popular scripting language that
                can be used to add functionality & interactivity to
                websites.
            </p>
            <p>
                Students will learn the syntax, data types, & control
                structures of JavaScript as well as how it can be applied to make their websites interactive, including
                possibly creating games if time allows.
            </p>
            <table class="border mt-4">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Getting started: Repl.it setup, Hello World, types, operators, comments, variables</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Conditionals, boolean expressions, while & for loops</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Functions, arrays, objects</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        Debugging, JavaScript coding conventions, DOM (Document Object Model)
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        DOM (Document Object Model) manipulation
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        Intro to HTML canvas, tic-tac-toe game (if time allows)
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

