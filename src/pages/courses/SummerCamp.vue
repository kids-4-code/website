<script>
import Footer from "../../components/Footer.vue";
import CoursePage from "../../components/CoursePage.vue";

export default {
    components: {
        Footer,
        CoursePage,
    }
}
</script>

<template>
    <CoursePage name="Summer Camp 2023">
        <template #icon>
            <i class="fa-solid fa-umbrella-beach text-primary-800"></i>
        </template>
        <template #sidebar>
            <table class="border">
                <tr>
                    <th>Dates</th>
                    <td>August 14th-15th</td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>9AM - 12:30PM</td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>Potomac Community Center (11315 Falls Rd, Potomac, MD 20854)
                    </td>
                </tr>
                <tr>
                    <th>Cost</th>
                    <td>$25 / day</td>
                </tr>
            </table>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc9aVkw4OklCGX0dHcqhdWekf07SOnqc9IgSrnqywUdVIienA/viewform"
                target="_blank" class="bg-primary-800 text-white font-bold rounded-md
                     hover:bg-primary-600 p-4 text-lg w-full text-center inline-block my-4">
                Interest form
            </a>
        </template>
        <template #content>
            <p>
                Hi Kids for Code families & students!</p>



            <p class="my-4">We're excited to announce that we'll be holding an in-person program for the first time this
                year! The camp
                would run from approximately <b>9AM to 12:30PM on August 14th and 15th. Food will be provided.</b> We
                project the
                cost to be around <b>$20-25 a day, for a total of $50 over both days.</b> Any extra proceeds will go to
                support
                Kids for
                Code and ensure we're able to provide free coding education in the years to come. Students must be 8 or
                older.</p>



            <p class="my-4">The camp will likely be held at <b>Potomac Community Center (11315 Falls Rd, Potomac, MD
                    20854)</b> or
                another rec
                center nearby. <b>Kids should bring their own computer (school Chromebooks or laptops should be fine).</b>
                The full
                list of activities we'll be offering is below.</p>



            <p class="my-4">While we'll only be holding this at one location for the time being, we'd love to run for a full
                week next
                year
                and potentially expand to more locations.</p>



            <p class="my-4 font-bold underline decoration-primary-600 underline-offset-4 decoration-2">If you might be
                interested, please fill out the
                interest form and we'll be
                sure to send you
                updates!</p>

            <img src="../../assets/camp-banner.png" class="my-8 w-[95%] mx-auto rounded-lg">

            <h3 class="font-serif font-bold text-2xl my-4 mt-16">💻 Activities</h3>
            We'll be offering multiple activities that campgoers will be able to choose from:
            <div class="grid grid-cols-1"></div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-cubes text-violet-700 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        3D modeling & design:
                    </p>
                    <p>
                        Students will use their creativity to create their own unique models in
                        TinkerCAD and use our provided 3D printers to bring their creations into reality.
                    </p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-trophy text-orange-500 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        Game development:
                    </p>
                    <p>
                        Kids can indulge their passion for gaming by using Scratch (younger students) or JavaScript
                        (older students / more experience) to create their own interactive games.
                    </p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-code text-amber-400 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        Website development:
                    </p>
                    <p>
                        Kids can begin to explore the popular career of web design by building their own websites
                        from scratch using HTML/CSS, and other modern web technologies.
                        Students that have already taken a
                        web design class in the past will be able to build on their knowledge to create more
                        professional-looking pages.
                    </p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-robot text-rose-800 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        EV3 Robotics:
                    </p>
                    <p>
                        Dive into the realm of robotics and learn how to program an EV3 Mindstorms robot!
                    </p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-lightbulb text-cyan-700 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        Arduino programming:
                    </p>
                    <p>
                        Explore the fundamentals of embedded programming and construct circuits using the Arduino
                        board.
                    </p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-paint-roller text-green-600 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        AI Art:
                    </p>
                    <p>
                        Step into the world of AI-driven image generation with cutting-edge tools like Stable Diffusion.
                        Students can bring their artistic ideas to life by creating stunning images based on text prompts
                        and learning
                        useful tricks to enhance their creations.
                    </p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-car-side text-red-700 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        Autonomous robot car demonstration <i>[TENTATIVE]</i>
                    </p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-star text-fuchsia-700 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        Non-STEM activities:
                    </p>
                    <p>Lego station, board games station, drawing stations, & Nintendo Switch</p>
                </div>
            </div>
            <div class="flex my-4 rounded-md p-6 gap-8 border items-center">
                <i class="fa-solid fa-basketball text-teal-700 float-left text-5xl"></i>
                <div>
                    <p class="font-bold">
                        Athletics:
                    </p>
                    <p>Basketball, soccer, & playground</p>
                </div>
            </div>
        </template>
    </CoursePage>
</template>