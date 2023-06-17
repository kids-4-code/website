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
    <CoursePage name="Python 1A">
        <template #icon>
            <i class="fa-brands fa-python"></i>
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
                    <td>8 weeks, 7 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Sundays, 12:30-1:15pm Eastern</td>
                </tr>
                <tr>
                    <th>Dates</th>
                    <td>July 2nd, (no class July 9th), July 16th, July 23nd, July 30th, August 6th, August 13th, August 20th
                    </td>
                </tr>
            </table>
        </template>
        <template #content>
            <!--Course description here-->
            <p>
                A beginner level course aimed at children ages 6 & up.
                It provides an gentle introduction to Python &
                text-based coding.
            </p>
            <p>
                Python is a general purpose scripting language that's
                popular in data science, AI, and backend programming.
            </p>
            <p class="mb-4">
                In Python 1A, students will learn basic Python syntax &
                programming concepts, like variables, conditional
                statements, data types, etc.
            </p>
            <table class="border">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Getting started: coding languages, Repl.it setup, Hello World, printing, comments</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Data types: numbers (int & float), booleans, strings</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Variables: naming, declarations, dynamic typing, printing</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        User input & type casting
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        Math & logic operators
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        Conditionals: if & elif statements
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>
                        Extra practice, review
                    </td>
                </tr>
            </table>
        </template>
    </CoursePage>
    <Footer></Footer>
</template>
