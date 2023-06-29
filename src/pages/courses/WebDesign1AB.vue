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
    <CoursePage name="Web Design 1AB">
        <template #icon>
            <i class="fa-brands fa-html5"></i>
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
                    <td>Saturdays, 2:30-3:15pm Eastern</td>
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
                <b>Web Design 1AB is a more advanced, faster-paced version
                    of Web Design 1A that covers all the content in 1A as
                    well as a few additional topics.
                </b>
            </p>
            <p>
                Introduces students to the basic principles of web
                development. Students will learn to develop and style
                basic websites using HTML & CSS.
            </p>
            <p class="mb-4">
                In addition to the topics covered in 1A: HTML page
                structure, basic CSS styling, and the CSS box model, 1AB
                will learn about more advanced CSS styling and a few
                additional HTML tags. Students will able to create their
                own static (no JavaScript) website by the end of the
                class.
            </p>
            <table class="border">
                <tr>
                    <th>Week</th>
                    <th>Topic(s)</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Getting started: Repl.it setup, intro to HTML/CSS, page structure</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Basic tags, creating lists: unordered, ordered</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Images using the &lt;img&gt; tag</td>
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
                        CSS styling pt. 2: more properties, CSS styling pt. 3: advanced styling
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        Creating menus & navigation bars (may add CSS styling)
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>
                        CSS classes and IDs
                    </td>
                </tr>
            </table>
        </template>
    </CoursePage>
    <Footer></Footer>
</template>
