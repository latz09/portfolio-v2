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
			dark: '#00082D',
			primary: '#0065B7',
			secondary: '',
			teriary: '#A3D6FF'
		}
	},
	plugins: [],
};
