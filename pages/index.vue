<script setup lang="ts">
useHead({
    title: "Home",
})
</script>

<template>
    <NuxtLayout>
        <!--Hero-->
        <div class="pt-16 flex flex-col items-center text-center gap-2 w-6xl mx-2">
            <div class="mb-2">
                <h3 class="font-sans font-semibold text-gray-300">Summer 2024 Session</h3>
                <h1 class="font-serif text-4xl md:text-5xl text-gray-700 font-semibold">Online coding classes,</h1>
                <h1 class="font-serif text-4xl md:text-5xl text-brand-600 font-semibold mb-0">100% free.</h1>
            </div>
            <p class="text-gray-500 text-sm">We're a group of student volunteers passionate about coding. <br>Join us to
                learn for free!
            </p>
            <!-- <div class="flex gap-2 mt-2">
                <LinkButton to="https://forms.gle/5Y4uYof4SmQaSqKt9" color="brand" >Enroll</LinkButton>
            </div> -->

            <img src="/images/hero-slides.png" class="z-30 mt-12  w-9/12 md:w-7/12 lg:w-5/12">

            <!-- <NuxtLink to="apply"
                class=" hover:bg-brand-50 border-brand-400 transition-colors border-2 py-1.5 px-4 rounded-full mt-10 flex text-sm items-center">
                <p class="font-sans text-brand-600 font-medium">
                    Closing soon - apply for leadership positions and more!
                </p>
                <Icon class="ml-2 text-xl text-brand-600" name="tabler:arrow-right"></Icon>
            </NuxtLink> -->
        </div>
        <div
            class="py-6 lg:px-48 xl:px-72 mt-20 w-full border-y-2 border-y-gray-200 grid-flow-col grid auto-cols-fr gap-y-8 max-sm:grid-rows-2">
            <div class="text-center">
                <h1
                    class="px-2 py-1 rounded-md bg-brand-50 border-2 border-brand-200 inline-block font-serif font-bold text-brand-600 text-4xl">
                    5000+
                </h1>
                <p class="font-body font-medium text-gray-400">
                    students taught
                </p>
            </div>
            <div class="text-center">
                <h1
                    class=" px-2 py-1 rounded-md bg-accent-50 inline-block border-2 border-amber-200 font-serif font-bold text-accent-500 text-4xl">
                    100+
                </h1>
                <p class="font-body font-medium text-gray-400">
                    teachers
                </p>
            </div>
            <div class="text-center">
                <h1
                    class="  px-2 py-1 rounded-md bg-emerald-50  border-2 border-emerald-200 inline-block font-serif font-bold text-emerald-500 text-4xl">
                    13
                </h1>
                <p class="font-body font-medium text-gray-400">
                    courses
                </p>
            </div>
            <div class="text-center">
                <h1
                    class=" px-2 py-1 rounded-md bg-sky-50 border-2 border-sky-200 inline-block font-serif font-bold text-sky-600 text-4xl">
                    9.5/10
                </h1>
                <p class="font-body font-medium text-gray-400">
                    avg. rating
                </p>
            </div>
        </div>
        <!--Courses-->
        <div class="relative flex flex-col items-center text-center gap-2 mt-24 pb-32 lg:pb-48 mx-2 overflow-hidden">
            <div class="max-md:hidden absolute width-0 height-0">
                <div class="relative -rotate-[10deg] -z-20 w-[256rem] h-[30vh] bg-[#F4FCF8] top-[14vw]">
                </div>
                <div class="relative rotate-[10deg] -z-20 w-[256rem] h-[30vh] bg-[#F4FCF8] top-[24vw]"></div>
            </div>
            <!--Icon-->
            <div class="flex items-center bg-emerald-50 rounded-xl p-2 drop-shadow-light">
                <img src="/images/icons/book.png" class="w-20">
            </div>
            <h1 class="font-serif text-5xl text-gray-700 font-semibold my-4">Courses</h1>

            <div class="z-10 mt-4 py-4 w-11/12 md:w-10/12 lg:w-9/12 max-w-4xl">
                <div
                    class=" grid grid-cols-2 md:grid-cols-4 p-6 gap-4 bg-white border-dashed border-2 border-gray-300 rounded-xl min-h-52">
                    <div
                        class="flex flex-col justify-between p-4 border-gray-300 bg-emerald-50 border shadow-md rounded-md text-left">
                        <div>
                            <Icon name="tabler:sparkles" class="text-4xl text-emerald-400"></Icon>
                            <h3 class="font-semibold text-gray-700 text-xl mt-2">Featured courses</h3>
                            <p class="text-gray-500 text-sm mb-4">Explore our full
                                course catalog using the link below.</p>
                            <!-- <NuxtLink to="/courses"
                                class="font-sans font-semibold text-md text-emerald-500 border-emerald-400 border-2 hover:bg-emerald-100 transition-colors px-4 py-1 rounded">
                                Visit</NuxtLink> -->
                            <LinkButton ghost to="/courses" color="emerald">Visit</LinkButton>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-between p-4 border-gray-300 bg-white border shadow-md rounded-md text-left">
                        <div>
                            <Icon name="tabler:brand-python" class="text-4xl text-emerald-500"></Icon>
                            <h3 class="font-semibold text-gray-700 text-lg mt-2">Python 1A</h3>
                            <p class="text-gray-500 text-sm mb-2">Learn the basics of Python, a popular programming
                                language used by
                                companies like Google and Facebook.</p>
                        </div>
                        <div class="mt-2">
                            <NuxtLink class="text-gray-600 text-sm underline font-medium" to="/courses/python-1a">
                                <h6>Learn more</h6>
                            </NuxtLink>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-between p-4 border-gray-300 border bg-white shadow-md rounded-md text-left">
                        <div>
                            <Icon name="tabler:brand-html5" class="text-4xl text-amber-500"></Icon>
                            <h3 class="font-semibold text-gray-700 text-lg mt-2">Web Design 1AB</h3>
                            <p class="text-gray-500 text-sm mb-2">Explore HTML & CSS by creating your own websites.</p>
                        </div>
                        <div class="mt-2">

                            <NuxtLink class="text-gray-600 text-sm underline font-medium" to="/courses/web-design-1ab">
                                <h6>Learn more</h6>
                            </NuxtLink>
                        </div>
                    </div>
                    <div
                        class="flex flex-col justify-between p-4 border-gray-300 border bg-white shadow-md rounded-md text-left">
                        <div>
                            <Icon name="tabler:code-circle" class="text-4xl text-purple-500"></Icon>
                            <h3 class="font-semibold text-gray-700 text-lg mt-2">Intro to Programming</h3>
                            <p class="text-gray-500 text-sm mb-2">A gentle introduction to programming through Scratch.
                            </p>
                        </div>
                        <div class="mt-2">

                            <NuxtLink class="text-gray-600 text-sm underline font-medium"
                                to="/courses/intro-to-programming">
                                <h6>Learn more</h6>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 md:py-12 w-11/12 md:w-10/12 lg:w-9/12 max-w-3xl flex max-sm:flex-col items-center gap-16 p-6">
                <div class="text-left">
                    <h2 class="text-3xl text-gray-700 font-semibold font-serif">Explore all courses</h2>
                    <p class="mt-2 mb-4"><span class="font-medium">View our full course listings
                            below.
                        </span><br>
                        Still have
                        questions? Feel free
                        to
                        reach out to us
                        <i>kidsforcodeteam@gmail.com</i> and we'll do our best to answer them!
                    </p>
                    <LinkButton color="emerald" to="/courses">Course catalog</LinkButton>
                </div>
                <img src="/images/graphics/languages.png" class="w-4/5 sm:w-3/5 md:w-2/5">
            </div>
        </div>

        <!--Classroom-->
        <div class="relative overflow-hidden flex flex-col items-center text-center gap-2 pb-32 lg:pb-48 mx-2">

            <div class="max-md:hidden absolute width-0 height-0">
                <div class="relative rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F9F0F5] top-[18vw]"></div>
                <div class="relative -rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F9F0F5] top-[28vw]"></div>
            </div>

            <!--Icon-->
            <div class="flex items-center bg-brand-100 rounded-xl p-2 drop-shadow-light">
                <img src="/images/icons/classroom.png" class="w-20">
            </div>
            <h1 class="font-serif text-5xl text-gray-700 font-semibold my-4 mb-8">In the classroom</h1>
            <div
                class="z-10 flex flex-col md:flex-row  md:py-12 w-11/12 md:w-10/12 lg:w-9/12 max-w-4xl items-center gap-12">
                <img src="/images/graphics/zoom.png" class="w-3/4 md:w-1/2">
                <div class="flex flex-col gap-4">
                    <div class="text-left">
                        <h3 class="font-semibold text-lg font-serif text-gray-700"> Zoom meetings every weekend</h3>
                        <p class="">All of our classes are run
                            virtually through Zoom and go for around 45m
                            to an hour. Students have the opportunity to stay after class to ask questions & get
                            additional
                            help with understanding the material.</p>
                    </div>
                    <div class="text-left">
                        <h3 class="font-semibold text-lg font-serif text-gray-700">Google Classroom & HW assignments
                        </h3>
                        <p class="">Each class, students will receive a project-based homework
                            assignment to complete by the
                            next week’s class to solidify their knowledge.</p>
                    </div>
                    <div class="text-left">
                        <h3 class="font-semibold text-lg font-serif text-gray-700">Ask questions</h3>
                        <p class="">We have multiple ways for students to ask questions, including their respective
                            Google
                            Classrooms,
                            our community Discord server, and through email.</p>
                    </div>
                </div>
            </div>

            <div class="mt-4 md:py-12 w-11/12 md:w-10/12 lg:w-9/12 max-w-4xl">
                <h2 class="font-serif text-3xl text-gray-700 font-semibold mb-8">Hear from our students</h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div class="text-left flex gap-2 items-center">
                        <Icon name="tabler:quote" class=" text-brand-600 text-5xl"></Icon>
                        <div class="w-11/12">
                            <p class="font-medium mb-2">
                                I liked how they provided us with <span
                                    class="underline decoration-brand-400 decoration-2">lots of
                                    resources and reviews</span> to help aid us
                                with the
                                homework and understanding the material.
                            </p>
                            <p>- Java & Python student</p>
                        </div>
                    </div>
                    <div class="text-left flex items-center gap-2">
                        <Icon name="tabler:quote" class=" text-brand-600 text-5xl"></Icon>

                        <div class="w-11/12">
                            <p class="font-medium mb-2">
                                The classes are <span class="underline decoration-brand-400 decoration-2">interesting
                                    and
                                    challenging.</span> The teachers are also very attentive. The
                                amount of content is <span class="underline decoration-brand-400 decoration-2">just
                                    right
                                    for me to digest</span> in the class.
                            </p>
                            <p>- Web, Java, and Python student</p>
                        </div>
                    </div>
                    <div class="text-left flex items-center gap-2">
                        <Icon name="tabler:quote" class=" text-brand-600 text-5xl"></Icon>

                        <div class="w-11/12">
                            <p class="font-medium mb-2">
                                It <span class="underline decoration-brand-400 decoration-2">taught me a lot and it gave
                                    me
                                    more knowledge</span>. I like how you guys didn't put too much
                                information in one topic so it didn't overload us.
                            </p>
                            <p>- Python student</p>
                        </div>
                    </div>
                    <div class="text-left flex items-center gap-2">
                        <Icon name="tabler:quote" class=" text-brand-600 text-5xl"></Icon>

                        <div class="w-11/12">
                            <p class="font-medium mb-2">
                                All of you are super nice and patient! Your classes were <span
                                    class="underline decoration-brand-400 decoration-2">clear to understand</span> and
                                the
                                homework was fun! Thank you!
                            </p>
                            <p>- Web & Python student</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!--Enroll-->
        <div class="relative overflow-hidden flex flex-col items-center text-center gap-2 pt-16 pb-32 lg:pb-48">
            <div class="max-md:hidden absolute width-0 height-0">
                <div class="relative -rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F0F9FF] top-[8vw]"></div>
                <div class="relative rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F0F9FF] top-[20vw]"></div>
            </div>
            <div class="flex items-center bg-sky-100 rounded-xl p-2 drop-shadow-light">
                <img src="/images/icons/check.png" class="w-20">
            </div>
            <h2 class="text-5xl text-gray-700 font-semibold font-serif my-4 mb-8">Enroll</h2>
            <div
                class="w-11/12 md:w-10/12 lg:w-9/12 max-w-4xl p-6 bg-white border-dashed border-2 border-gray-300 rounded-xl">
                <div
                    class="grid grid-cols-1 md:grid-cols-2 bg shadow-sm border-gray-200 gap-8 text-left border p-6 py-8 rounded-xl text-gray-700 z-0">
                    <div class="z-10">
                        <img class="w-16 mb-2 drop-shadow-sm" src="/images/icons/enroll.png">
                        <h1 class="text-4xl font-serif font-semibold">Summer 2024</h1>
                        <p class="text-sm md:w-2/3 block mt-1">Registration opening soon - sign up for our email list to get
                            updates!</p>

                        <LinkButton class="mt-4" to="https://forms.gle/p769hWPxMrw8hDrU6" color="sky">Get updates
                        </LinkButton>
                    </div>
                    <div class="z-10 grid grid-rows-2 gap-4 rounded-xl">
                        <div class="p-4 border border-gray-200 bg-white rounded-lg">
                            <span class="flex items-center  ">
                                <Icon name="tabler:clock" class="text-md text-blue-700"></Icon>
                                <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Dates</span>
                            </span>
                            <p class="text-gray-700 text-xl font-sans">-</p>
                        </div>
                        <div class="p-4 border border-gray-200 bg-white rounded-lg">
                            <span class="flex items-center">
                                <Icon name="tabler:cash" class="text-md text-brand-700"></Icon>
                                <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Cost</span>
                            </span>
                            <p class="text-gray-700 text-xl font-sans">$0</p>
                        </div>
                    </div>
                </div>
                <div class="text-left py-4 my-4 mx-2 md:mx-6 grid md:grid-cols-2 gap-6 border-t border-b border-gray-200">
                    <div>
                        <span class="flex items-center mb-1">
                            <Icon name="tabler:language" class="text-md text-blue-700"></Icon>
                            <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Language</span>
                        </span>
                        <p class="text-gray-700 text-xl font-sans">English</p>
                    </div>
                    <div>
                        <span class="flex items-center mb-1">
                            <Icon name="tabler:calendar-event" class="text-md text-emerald-700"></Icon>
                            <span class="text-gray-700 text-sm font-sans font-semibold ml-1">Registration closes</span>
                        </span>
                        <p class="text-gray-700 text-xl font-sans">-</p>
                    </div>

                </div>
            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 p-6 pt-16 gap-6 w-10/12 md:w-9/12 lg:w-8/12 max-w-3xl">
                <div class="text-left">
                    <h3 class="font-serif text-3xl font-semibold text-gray-700">Class schedule</h3>
                    <p class="mt-2 mb-4">
                        View our full class schedule including dates & meeting times.
                    </p>

                    <LinkButton disabled
                        to="https://docs.google.com/document/d/14NUJ00GCcFt_nCjutOQwPJfqDptpoW36A9W7_N6VmEs/edit?usp=sharing"
                        color="sky">View</LinkButton>

                </div>
                <div class="text-left">
                    <h3 class="font-serif text-3xl font-semibold text-gray-700">Apply to teach</h3>
                    <p class="mt-2 mb-4">
                        Sign up to join our team of computer science teachers & gain experience in working with children
                        of
                        all ages.
                    </p>

                    <LinkButton color="sky" to="/apply">Learn more</LinkButton>
                </div>
            </div>
        </div>

        <!--About-->
        <div class="relative overflow-hidden flex flex-col items-center text-center gap-2 w-6xl pb-32 xl:pb-64">
            <div class="max-md:hidden absolute width-0 height-0">
                <div class="relative rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#FEFCEE] top-[8vw]"></div>
                <div class="relative -rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#FEFCEE] top-[14vw]"></div>
                <!-- <div class="relative rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#FEFCEE] top-[18vw]"></div> -->
            </div>
            <div class="flex items-center bg-accent-100 rounded-xl p-2 drop-shadow-light">
                <img src="/images/icons/about.png" class="w-20">
            </div>
            <h1 class="font-serif text-5xl text-gray-700 font-semibold my-4 mb-8">About us</h1>
            <div class="z-10 md:columns-2 gap-6 md:py-12 w-10/12 md:w-9/12 lg:w-8/12 max-w-4xl text-left">
                <p class="mb-2"><span class="font-medium">Kids for Code was founded during in 2020 by students in
                        Montgomery County,
                        Maryland.</span> Since
                    then, we've
                    expanded to include teachers from across Maryland & the DMV area and developed more than a dozen
                    unique
                    courses featuring
                    custom curriculum designed specifically for young learners. Over our past 6 sessions, <span
                        class="font-medium">we've taught
                        nearly 5,000 students from across 40+ U.S. states and 13 countries.</span>
                </p>

                <p class="mb-2">
                    Our teachers are high school students who are passionate about computer science - many of our
                    teachers have won awards and created apps in the past.
                </p>
                <p class="mb-2"><span class="font-medium">In today’s increasingly technology-centered world, computer
                        science is quickly becoming a
                        practically
                        essential skill.</span> Our mission is to teach and prepare kids to become active and engaged
                    citizens in the
                    future,
                    by <span class="font-medium">providing them access to computer science skills often not taught in
                        schools.</span></p>

                <p class="mb-2">By introducing computer science to children at an early age, we are
                    <span class="font-medium">setting them
                        up for a brighter future - a future that they can code themselves - and shaping a generation to
                        be
                        passionate and innovative.</span>
                </p>
            </div>

            <div class="w-10/12 md:w-9/12 lg:w-8/12 max-w-3xl grid grid-cols-1 md:grid-cols-2 mt-4 gap-6">

                <div class="text-left">
                    <h3 class="font-serif text-2xl font-semibold text-gray-700">Meet our teachers</h3>
                    <p class="mb-4">View our list of teachers & leadership members.</p>
                    <LinkButton to="/teachers" color="accent">Learn more</LinkButton>

                </div>
                <div class="text-left">
                    <h3 class="font-serif text-2xl font-semibold text-gray-700">Further questions?</h3>
                    <p class="mb-4">Reach out to us at kidsforcodeteam@gmail.com</p>
                    <LinkButton to="mailto:kidsforcodeteam@gmail.com" color="accent" ghost>Email us</LinkButton>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped>
.bg {
    background-size: cover;
    background-position: center center;
    background-image: url("/images/graphics/enroll-graphic.png");
}
</style>