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
    <CoursePage name="Web Design 1A">
        <template #icon>
            <i class="fa-brands fa-html5 text-[#e56027]"></i>
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
                    <td>Saturdays, 1:00-1:45pm Eastern</td>
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
                Introduces students to the basic principles of web
                development. Students will learn how to develop and
                style basic websites using HTML & CSS.
            </p>
            <p>
                Topics covered in 1A include HTML page structure, basic
                CSS styling, and the CSS box model. Students will able
                to create their own static (no JavaScript) website by
                the end of the class.
            </p>
            <table class="border mt-4">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Getting started: Repl.it setup, intro to HTML/CSS</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Page structure, basic tags </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Creating links with &lt;a&gt;, creating lists: unordered, ordered</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        CSS styling pt. 1: basic properties
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        CSS styling pt. 2: more properties
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        CSS styling pt. 3: advanced styling
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