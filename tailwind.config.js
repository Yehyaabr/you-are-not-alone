/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			display: ["Open Sans", "sans-serif"],
			body: ["Open Sans", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "rgb(var(--primary) / <alpha-value>)",
			},
		},
	},
	plugins: [],
};
