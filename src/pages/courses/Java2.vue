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
                    <td>Intermediate</td>
                </tr>
                <tr>
                    <th>Length</th>
                    <td>8 weeks, 7 sessions</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>Sundays, 11:00-11:45am Eastern</td>
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
        </template>
    </CoursePage>
    <Footer></Footer>
</template>

<style>
/*I am NOT styling every single table elemtn individually */
table {
    border-collapse: collapse;
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