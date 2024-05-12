/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			screens: {
				md900: '900px',
				mdSmall: '550px',
			},
		},
	},
	plugins: [require('daisyui')],
};
