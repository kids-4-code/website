<template>
    <nav>
        <div
            class="md:flex justify-between p-3 px-4 items-center fixed top-0 left-0 dark:bg-gray-800 bg-white right-0 z-50 drop-shadow-sm">
            <div class="flex items-center gap-2 mb-2 md:mb-0">
                <img src="../assets/logo.png" alt="logo" class="h-10">
                <router-link class="text-2xl font-sans font-semibold dark:text-gray-300" to="/">Kids for
                    Code</router-link>
            </div>
            <hr class="md:hidden my-2">
            <div
                class="flex items-center text-lg md:text-xl font-serif font-medium dark:text-gray-300  sm:space-x-5 justify-between sm:justify-start">
                <router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500" to="/">
                    Home
                </router-link>
                <router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500"
                    to="/courses">Courses</router-link>
                <router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500"
                    to="/teachers">Teachers</router-link>
                <router-link class="hidden sm:block decoration-2 decoration-primary-700 hover:text-primary-500"
                    to="/donate">Donate</router-link>
                <router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500" to="/faq">FAQ</router-link>
                <!-- <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGXa26ecBIs3v1CBOTWYi4kmnTKoXxhtXm7u59acVcSbQppA/viewform"
				class=" px-3 py-1 rounded bg-primary-800 text-white transition hover:bg-primary-600"
				target="_blank">Enroll</a> -->
            </div>
        </div>

    </nav>
</template>