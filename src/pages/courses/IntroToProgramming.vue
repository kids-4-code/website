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
                    <td>8 weeks, 7 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Sunudays, 5:00-5:45pm Eastern</td>
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
                <b>New for the 2023 Summer session!</b>
            </p>
            <p class="mb-4">
                Intro to Programming is a gentle introduction to the
                fundamental concepts of computer science. Students will
                learn to think like a programmer and solve problems
                using code in a fun and engaging way using Scratch.
            </p>
            <Alert text="More info coming soon!"></Alert>
        </template>
    </CoursePage>
    <Footer></Footer>
</template>
