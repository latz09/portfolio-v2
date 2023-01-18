/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			black: '#111111',
			white: '#F5F5F5',
			primary: '#67e8f9'
		}
	},
	plugins: [],
};
