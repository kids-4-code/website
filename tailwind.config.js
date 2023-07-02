/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.vue"],
	theme: {
		extend: {
			colors: {
				primary: {
					800: "#9e426c",
					700: "#A24972",
					600: "#A64F77",
					500: "#AE5C81",
					400: "#BD7696",
					300: "#CC90AB",
					200: "#D49DB5",
					100: "#DBA9BF",
				},
				yellow: {
					800: "#D8BE34",
					700: "#DDC335",
					600: "#E2C736",
					500: "#f4e225",
				},
				blue: {
					800: "#2469AC",
					700: "#266EB5",
					600: "#2873BD",
					500: "#2D77C0",
					400: "#327BC2",
					300: "#377FC5",
					200: "#3C82C7",
					100: "#4689CC",
				},
				green: {
					800: "#327E2A",
					700: "#378B2E",
					600: "#3C9933",
					500: "#43A03A",
					400: "#49A640",
				},
				dark: {
					DEFAULT: "##404040",
				},
				light: "#fafafa",
			},
			fontFamily: {
				sans: ["Public Sans", "sans-serif"],
				serif: ["IBM Plex Serif", "serif"],
				monospace: ["IBM Plex Mono", "monospace"],
			},
		},
	},
	plugins: [],
};
