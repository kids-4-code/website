import "./assets/base.css";

import { createApp } from "vue";
import App from "./App.vue";

import Home from "./pages/Home.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [{ path: "/", component: Home }],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
