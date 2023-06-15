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
                    <td>8 weeks, 7 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Saturdays, 2:30-3:15pm Eastern</td>
                </tr>
                <tr>
                    <th>Dates</th>
                    <td>July 1st, (no class July 8th), July 15th, July 22nd, July 29th, August 5th, August 12th, August 19th
                    </td>
                </tr>
            </table>
        </template>
        <template #content>
            <!--Course description here-->

        </template>
    </CoursePage>
    <Footer></Footer>
</template>

<style>
/*I am NOT styling every single table elemtn individually */
table {
    border-collapse: collapse;
    border-radius: 0.5rem;
}

td,
th {
    padding: 0.5rem;
}

td {
    font-weight: 200;
}

th {
    text-align: left;
    font-weight: 600;
    width: 40%;
}

tr {
    border-bottom: 1px solid #ccc;
}

tr:nth-child(even) {
    background-color: #fafafa;
}
</style>