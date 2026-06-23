/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./pages/**/*.vue",
		"./components/**/*.vue",
		"./layouts/**/*.vue",
		"./content/**/*.md",
		"./app.vue",
	],
	theme: {
		fontFamily: {
			sans: ["Clash Grotesk"],
			serif: ["Sentient"],
			body: ["General Sans"],
		},
		extend: {
			colors: {
				// Dark-mode palette (warm plum-charcoal so the pink brand still pops).
				// Used only via dark: variants — light mode is unaffected.
				night: {
					bg: "#18141c",
					card: "#221d28",
					input: "#2a2431",
					border: "#383040",
					text: "#ece9f1",
					muted: "#a39daf",
					mint: "#122019",
					pink: "#221620",
					sky: "#121d27",
					cream: "#211e12",
				},
				brand: {
					50: "hsl(327, 60%, 97%)",
					100: "hsl(325, 63%, 95%)",
					200: "hsl(325, 65%, 90%)",
					300: "hsl(327, 68%, 82%)",
					400: "hsl(328, 66%, 70%)",
					500: "hsl(330, 62%, 60%)",
					600: "hsl(332, 55%, 55%)",
					700: "hsl(334, 60%, 42%)",
					800: "hsl(335, 57%, 35%)",
					900: "hsl(335, 54%, 30%)",
					950: "hsl(335, 63%, 17%)",
				},
				accent: {
					50: "hsl(54, 83%, 95%)",
					100: "hsl(55, 90%, 88%)",
					200: "hsl(53, 90%, 77%)",
					300: "hsl(51, 90%, 65%)",
					400: "hsl(48, 88%, 53%)",
					500: "hsl(46, 86%, 47%)",
					600: "hsl(41, 88%, 40%)",
					700: "hsl(36, 85%, 33%)",
					800: "hsl(32, 74%, 29%)",
					900: "hsl(28, 66%, 26%)",
					950: "hsl(26, 78%, 14%)",
				},
			},
		},
	},
	plugins: [],
};
