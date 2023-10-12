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
    <CoursePage name="Java 2">
        <template #icon>
            <i class="fa-brands fa-java text-[#ec2025]"></i>
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
                    <td>Sundays, 11:00-11:45am Eastern</td>
                </tr>
                <tr>
                    <th>Dates</th>
                    <td>November 5th, November 12th, November 19th, November 26th, December 3rd, December 10th
                    </td>
                </tr>
            </table>
        </template>
        <template #content>
            <!--Course description here-->
            <p>
                Java 2 is a more advanced course that expands on the
                knowledge gained in Java 1 to dive deeper into the Java
                programming language. Students will continue learning
                foundational programming skills in Java.
            </p>
            <p>
                Topics covered include functions, arrays, string
                manipulation, and file I/O.
            </p>
            <table class="border mt-4">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Java 1 review, random numbers w/ Math.random()</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Functions pt. 1: intro</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Functions pt. 2: parameters, returning; type casting</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        Arrays pt. 1: creating arrays, indexing, traversal
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        Arrays pt. 2: array manipulation, copying, resizing
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        String manipulation objects
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