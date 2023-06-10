<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <nav
			class="flex justify-between p-3 border border-gray-200 items-center fixed top-0 left-0 bg-white right-0 z-50 drop-shadow-sm"
		>
			<a class="text-2xl font-sans font-semibold">Kids for Code</a>
			<div
				class="flex items-center text-xl font-serif font-medium space-x-5"
			>
				<a
					class="hover:underline decoration-primary-700"
					href="index.html"
					>About</a
				>
				<a
					class="hover:underline decoration-primary-700"
					href="#courses"
					>Courses</a
				>
				<a class="hover:underline decoration-primary-700">Teachers</a>
				<a
					class="hover:underline decoration-primary-700"
					href="faq.html"
					>FAQ</a
				>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSdGXa26ecBIs3v1CBOTWYi4kmnTKoXxhtXm7u59acVcSbQppA/viewform"
					class="px-3 py-1 rounded bg-primary-500 text-white transition hover:bg-primary-800"
					>Enroll</a
				>
			</div>
		</nav>
    <router-view /> 

</template>
