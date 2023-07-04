<script>
import CoursePage from "../../components/CoursePage.vue";
import Footer from "../../components/Footer.vue";
import Alert from "../../components/Alert.vue";

export default {
    components: {
        CoursePage,
        Footer,
        Alert
    }
}
</script>

<template>
    <CoursePage name="Intro to Programming">
        <template #icon>
            <i class="fa-solid fa-code"></i>
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
                    <td>Sunudays, 5:00-5:45pm Eastern</td>
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
                <b>New for the 2023 Summer session! Registration is open.</b>
            </p>
            <p>Intro to Programming" is an immersive course tailored to kids aged 6 to 12 intended to give a gentle
                introduction to programming.
                Using Scratch, a beginner-friendly visual programming language, children will embark on an exciting journey
                of creativity and problem-solving. Through hands-on projects and interactive lessons, they'll learn the
                foundations of coding while unleashing their imagination. Students will
                learn to think like a programmer and solve problems
                using code in a fun and engaging way using Scratch.</p>
            <Alert text="Full syllabus coming soon!"></Alert>
        </template>
    </CoursePage>
    <Footer></Footer>
</template>
