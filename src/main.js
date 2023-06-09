import "./assets/base.css";

import { createApp } from "vue";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import FAQ from "./pages/FAQ.vue";
import Courses from "./pages/Courses.vue";
import Teachers from "./pages/Teachers.vue";
import Donate from "./pages/Donate.vue";

import Python1A from "./pages/courses/Python1A.vue";
import Python1AB from "./pages/courses/Python1AB.vue";
import Python2 from "./pages/courses/Python2.vue";

import WebDesign1A from "./pages/courses/WebDesign1A.vue";
import WebDesign1AB from "./pages/courses/WebDesign1AB.vue";
import WebDesign2 from "./pages/courses/WebDesign2.vue";

import Java1 from "./pages/courses/Java1.vue";
import Java2 from "./pages/courses/Java2.vue";

import Cpp1 from "./pages/courses/Cpp1.vue";

import IntroToProgramming from "./pages/courses/IntroToProgramming.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: "/", component: Home, name: "Home | Kids for Code" },
		{ path: "/faq", component: FAQ, name: "FAQ | Kids for Code" },
		{
			path: "/courses",
			component: Courses,
			name: "Courses | Kids for Code",
		},
		{
			path: "/teachers",
			component: Teachers,
			name: "Teachers | Kids for Code",
		},
		{ path: "/donate", component: Donate, name: "Donate | Kids for Code" },

		// this *cannot* be the most efficient way to do this
		// todo rewrite this
		{
			path: "/courses/web-design-1A",
			component: WebDesign1A,
			name: "Web Design 1A | Kids for Code",
		},
		{
			path: "/courses/web-design-1AB",
			component: WebDesign1AB,
			name: "Web Design 1AB | Kids for Code",
		},
		{
			path: "/courses/web-design-2",
			component: WebDesign2,
			name: "Web Design 2 | Kids for Code",
		},

		{
			path: "/courses/python-1A",
			component: Python1A,
			name: "Python 1A | Kids for Code",
		},
		{
			path: "/courses/python-1AB",
			component: Python1AB,
			name: "Python 1AB | Kids for Code",
		},
		{
			path: "/courses/python-2",
			component: Python2,
			name: "Python 2 | Kids for Code",
		},

		{
			path: "/courses/intro-to-programming",
			component: IntroToProgramming,
			name: "Intro to Programming | Kids for Code",
		},

		{
			path: "/courses/java-1",
			component: Java1,
			name: "Java 1 | Kids for Code",
		},
		{
			path: "/courses/java-2",
			component: Java2,
			name: "Java 2 | Kids for Code",
		},

		{
			path: "/courses/cpp-1",
			component: Cpp1,
			name: "C++ 1 | Kids for Code",
		},
	],
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		if (to.hash) {
			return {
				el: to.hash,
				top: 75,
			};
		} else if (savedPosition) {
			return savedPosition;
		} else {
			document
				.getElementById("app")
				.scrollIntoView({ behavior: "smooth" });
		}
	},
});

router.beforeEach((to, from, next) => {
	document.title = to.name;
	next();
});

const app = createApp(App);
app.use(router);
app.mount("#app");
