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
    <CoursePage name="Python 2">
        <template #icon>
            <i class="fa-brands fa-python"></i>
        </template>
        <template #sidebar>
            <table class="border">
                <tr>
                    <th>Prerequisites (recommended)</th>
                    <td>Python 1A or 1AB</td>
                </tr>
                <tr>
                    <th>Difficulty</th>
                    <td>Beginner / intermediate</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>8 weeks, 7 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Sundays, 3:00-3:45pm Eastern</td>
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
                Python 2 builds on the material covered in Python
                1A/1AB, taking students on a deeper journey into the
                Python programming language. It includes crucial
                concepts like functions, lists, string manipulation, and
                file I/O that are essential for more complex
                applications.
            </p>
            <p class="mb-4">
                Python 2 will give students a solid foundation in these
                universal programming concepts which can then be applied
                to many other popular programming languages.
            </p>

            <table>
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Review, random numbers</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Functions: naming conventions, parameters, syntax </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Functions continued: returning, use-cases</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        Lists: printing, modifying, adding, deleting, looping, combining, other operations
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        String manipulation: iterables, len(), indexing, slicing, f-strings, etc.
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        File I/O: reading, text processing, writing, appending
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