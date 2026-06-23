<script setup lang="ts">
useHead({
    title: "CodeQuest Challenge 2026",
})
</script>

<template>
    <NuxtLayout>
        <!-- Hero -->
        <div class="pt-16 flex flex-col items-center text-center gap-2 mx-2">
            <div class="flex items-center bg-brand-100 dark:bg-brand-950/50 rounded-xl p-2 drop-shadow-light mb-2">
                <img src="/images/icons/about.png" class="w-20">
            </div>
            <div class="mb-2">
                <h3 class="font-sans font-semibold text-gray-300">Kids for Code Presents</h3>
                <h1 class="font-serif text-4xl md:text-5xl text-gray-700 dark:text-night-text font-semibold">CodeQuest Challenge</h1>
                <h1 class="font-serif text-4xl md:text-5xl text-brand-600 font-semibold mb-0">2026</h1>
            </div>
            <p class="text-gray-500 dark:text-night-muted text-sm max-w-lg">
                Our very first coding competition! Showcase your creativity, demonstrate your skills, and make an impact through technology.
            </p>
            <div class="flex gap-2 mt-2">
                <LinkButton to="mailto:kidsforcodeteam@gmail.com" color="brand">Submit Your Entry</LinkButton>
            </div>
        </div>

        <!-- Stats / Highlights -->
        <div class="py-6 lg:px-48 xl:px-72 mt-16 w-full border-y-2 border-y-gray-200 dark:border-y-night-border grid-flow-col grid auto-cols-fr gap-y-8 max-sm:grid-rows-2">
            <div class="text-center">
                <h1 class="px-2 py-1 rounded-md bg-brand-50 dark:bg-brand-950/40 border-2 border-brand-200 inline-block font-serif font-bold text-brand-600 text-4xl">
                    1st
                </h1>
                <p class="font-body font-medium text-gray-400 dark:text-night-muted">ever competition</p>
            </div>
            <div class="text-center">
                <h1 class="px-2 py-1 rounded-md bg-accent-50 dark:bg-accent-950/25 inline-block border-2 border-amber-200 font-serif font-bold text-accent-500 text-4xl">
                    Free
                </h1>
                <p class="font-body font-medium text-gray-400 dark:text-night-muted">to enter</p>
            </div>
            <div class="text-center">
                <h1 class="px-2 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-200 inline-block font-serif font-bold text-emerald-500 text-4xl">
                    3
                </h1>
                <p class="font-body font-medium text-gray-400 dark:text-night-muted">award placements</p>
            </div>
            <div class="text-center">
                <h1 class="px-2 py-1 rounded-md bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-200 inline-block font-serif font-bold text-sky-600 text-4xl">
                    Open
                </h1>
                <p class="font-body font-medium text-gray-400 dark:text-night-muted">to all students</p>
            </div>
        </div>

        <!-- Overview -->
        <div class="relative overflow-hidden flex flex-col items-center text-center gap-2 mt-24 pb-32 lg:pb-48 mx-2">
            <div class="max-md:hidden absolute width-0 height-0">
                <div class="relative -rotate-[10deg] -z-20 w-[256rem] h-[30vh] bg-[#F9F0F5] dark:bg-night-pink top-[14vw]"></div>
                <div class="relative rotate-[10deg] -z-20 w-[256rem] h-[30vh] bg-[#F9F0F5] dark:bg-night-pink top-[24vw]"></div>
            </div>

            <h1 class="font-serif text-5xl text-gray-700 dark:text-night-text font-semibold my-4">Competition Overview</h1>
            <p class="text-gray-500 dark:text-night-muted max-w-2xl text-base">
                Participants will design and build an <span class="font-semibold text-gray-700 dark:text-night-text">original app, website, or coding-based project</span> that demonstrates their technical skills, creativity, and problem-solving abilities.
            </p>

            <!-- Submission Requirements -->
            <div class="z-10 mt-10 w-11/12 md:w-10/12 lg:w-9/12 max-w-4xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 bg-white dark:bg-night-card border border-gray-200 dark:border-night-border shadow-md rounded-xl text-left">
                        <Icon name="tabler:package" class="text-4xl text-brand-500 mb-3"></Icon>
                        <h3 class="font-semibold text-gray-700 dark:text-night-text text-xl mb-3">Submission Requirements</h3>
                        <ul class="space-y-2 text-gray-500 dark:text-night-muted text-sm">
                            <li class="flex items-start gap-2">
                                <Icon name="tabler:check" class="text-brand-500 mt-0.5 shrink-0"></Icon>
                                <span>Your completed project — app, website, or other coding creation</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <Icon name="tabler:check" class="text-brand-500 mt-0.5 shrink-0"></Icon>
                                <span>A <span class="font-medium text-gray-700 dark:text-night-text">2-minute video presentation</span> explaining the purpose, a demo, code explanation, and key features</span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-6 bg-white dark:bg-night-card border border-gray-200 dark:border-night-border shadow-md rounded-xl text-left">
                        <Icon name="tabler:award" class="text-4xl text-accent-500 mb-3"></Icon>
                        <h3 class="font-semibold text-gray-700 dark:text-night-text text-xl mb-3">Judging Criteria</h3>
                        <ul class="space-y-2 text-gray-500 dark:text-night-muted text-sm">
                            <li class="flex items-start gap-2">
                                <Icon name="tabler:check" class="text-accent-500 mt-0.5 shrink-0"></Icon>
                                <span>Creativity &amp; originality</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <Icon name="tabler:check" class="text-accent-500 mt-0.5 shrink-0"></Icon>
                                <span>Functionality &amp; design</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <Icon name="tabler:check" class="text-accent-500 mt-0.5 shrink-0"></Icon>
                                <span>Clarity of explanation</span>
                            </li>
                            <li class="flex items-start gap-2">
                                <Icon name="tabler:check" class="text-accent-500 mt-0.5 shrink-0"></Icon>
                                <span>Real-world impact</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Awards -->
            <div class="z-10 mt-10 w-11/12 md:w-10/12 lg:w-9/12 max-w-4xl">
                <h2 class="font-serif text-3xl text-gray-700 dark:text-night-text font-semibold mb-6">Awards</h2>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="p-6 bg-white dark:bg-night-card border-2 border-accent-200 rounded-xl text-center shadow-sm">
                        <p class="text-4xl mb-2">🏆</p>
                        <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg">1st Place</h3>
                        <p class="text-gray-500 dark:text-night-muted text-sm mt-1">Certificate of Achievement</p>
                    </div>
                    <div class="p-6 bg-white dark:bg-night-card border-2 border-gray-200 dark:border-night-border rounded-xl text-center shadow-sm">
                        <p class="text-4xl mb-2">🥈</p>
                        <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg">2nd Place</h3>
                        <p class="text-gray-500 dark:text-night-muted text-sm mt-1">Certificate of Achievement</p>
                    </div>
                    <div class="p-6 bg-white dark:bg-night-card border-2 border-gray-200 dark:border-night-border rounded-xl text-center shadow-sm">
                        <p class="text-4xl mb-2">🥉</p>
                        <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg">3rd Place</h3>
                        <p class="text-gray-500 dark:text-night-muted text-sm mt-1">Certificate of Achievement</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Who Can Participate + Why -->
        <div class="relative overflow-hidden flex flex-col items-center text-center gap-2 pb-32 lg:pb-48 mx-2">
            <div class="max-md:hidden absolute width-0 height-0">
                <div class="relative rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F4FCF8] dark:bg-night-mint top-[12vw]"></div>
                <div class="relative -rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F4FCF8] dark:bg-night-mint top-[22vw]"></div>
            </div>

            <h1 class="font-serif text-5xl text-gray-700 dark:text-night-text font-semibold my-4">Why Participate?</h1>

            <div class="z-10 mt-4 w-11/12 md:w-10/12 lg:w-9/12 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 rounded-xl text-left shadow-sm">
                    <Icon name="tabler:history" class="text-3xl text-emerald-500 mb-3"></Icon>
                    <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg mb-1">Be Part of History</h3>
                    <p class="text-gray-500 dark:text-night-muted text-sm">Be part of the very beginning of a new Kids for Code tradition.</p>
                </div>
                <div class="p-6 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 rounded-xl text-left shadow-sm">
                    <Icon name="tabler:briefcase" class="text-3xl text-sky-500 mb-3"></Icon>
                    <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg mb-1">Build Your Portfolio</h3>
                    <p class="text-gray-500 dark:text-night-muted text-sm">Create a real project to show off your skills to schools and employers.</p>
                </div>
                <div class="p-6 bg-brand-50 dark:bg-brand-950/40 border border-brand-200 rounded-xl text-left shadow-sm">
                    <Icon name="tabler:world" class="text-3xl text-brand-500 mb-3"></Icon>
                    <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg mb-1">Reach a Wider Audience</h3>
                    <p class="text-gray-500 dark:text-night-muted text-sm">Share your ideas with our community of students, teachers, and families.</p>
                </div>
            </div>

            <div class="z-10 mt-10 w-11/12 md:w-10/12 lg:w-9/12 max-w-2xl p-6 bg-white dark:bg-night-card border-dashed border-2 border-gray-300 dark:border-night-border rounded-xl text-left">
                <h3 class="font-serif text-2xl font-semibold text-gray-700 dark:text-night-text mb-2">Who Can Participate?</h3>
                <p class="text-gray-500 dark:text-night-muted">Open to <span class="font-medium text-gray-700 dark:text-night-text">all students</span> who are passionate about coding and innovation. No prior competition experience needed.</p>
            </div>
        </div>

        <!-- How to Submit -->
        <div class="relative overflow-hidden flex flex-col items-center text-center gap-2 pt-8 pb-32 lg:pb-48 mx-2">
            <div class="max-md:hidden absolute width-0 height-0">
                <div class="relative -rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F0F9FF] dark:bg-night-sky top-[8vw]"></div>
                <div class="relative rotate-[10deg] -z-10 w-[256rem] h-[30vh] bg-[#F0F9FF] dark:bg-night-sky top-[20vw]"></div>
            </div>

            <h1 class="font-serif text-5xl text-gray-700 dark:text-night-text font-semibold my-4 mb-8">How to Submit</h1>

            <div class="z-10 w-11/12 md:w-10/12 lg:w-9/12 max-w-2xl p-8 bg-white dark:bg-night-card border border-gray-200 dark:border-night-border shadow-md rounded-xl text-left">
                <div class="flex items-start gap-4 mb-6">
                    <div class="bg-brand-100 dark:bg-brand-950/50 rounded-full p-2 shrink-0">
                        <Icon name="tabler:mail" class="text-2xl text-brand-600"></Icon>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg">Email your submission</h3>
                        <p class="text-gray-500 dark:text-night-muted text-sm mt-1">Send everything to <span class="font-medium text-gray-700 dark:text-night-text">kidsforcodeteam@gmail.com</span></p>
                    </div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="bg-sky-100 dark:bg-sky-950/50 rounded-full p-2 shrink-0">
                        <Icon name="tabler:tag" class="text-2xl text-sky-600"></Icon>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-700 dark:text-night-text text-lg">Use the subject line</h3>
                        <p class="text-gray-500 dark:text-night-muted text-sm mt-1">Format: <span class="font-mono bg-gray-100 dark:bg-night-input px-1.5 py-0.5 rounded text-gray-700 dark:text-night-text text-xs">Your Name – Project Name – Competition Entry</span></p>
                    </div>
                </div>

                <div class="mt-8">
                    <LinkButton to="mailto:kidsforcodeteam@gmail.com?subject=Your Name – Project Name – Competition Entry" color="brand">Submit Your Entry</LinkButton>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
