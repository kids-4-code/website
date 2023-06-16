<script setup>
import { RouterView } from "vue-router";
</script>

<template>
	<nav
		class="flex justify-between p-3 border border-gray-200 items-center fixed top-0 left-0 bg-white right-0 z-50 drop-shadow-sm">
		<router-link class="text-2xl font-sans font-semibold" to="/">Kids for Code</router-link>
		<div class="flex items-center text-xl font-serif font-medium space-x-5">
			<router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500" to="/">
				Home
			</router-link>
			<router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500"
				to="/courses">Courses</router-link>
			<router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500"
				to="/teachers">Teachers</router-link>
			<router-link class=" decoration-2 decoration-primary-700 hover:text-primary-500" to="/faq">FAQ</router-link>
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdGXa26ecBIs3v1CBOTWYi4kmnTKoXxhtXm7u59acVcSbQppA/viewform"
				class="px-3 py-1 rounded bg-primary-800 text-white transition hover:bg-primary-600"
				target="_blank">Enroll</a>
		</div>
	</nav>
	<router-view />
</template>
