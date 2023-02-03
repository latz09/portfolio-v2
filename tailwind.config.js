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
			light: '#F5F5F5',
			dark: '#00136C',
			primary: '#0065B7'
		}
	},
	plugins: [],
};
