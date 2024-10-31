/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { 
			backgroundImage:{
				'custom-gradient': 'linear-gradient(to top, rgb(22,24,29), rgba(255, 255, 255, 0) 28%), linear-gradient(to bottom, rgb(22,24,29), rgba(255, 255, 255, 0) 8%), url("../assets/cuadre.svg")',
				'footer-gradient':'linear-gradient(to bottom, rgb(22,24,29), rgba(221,221,221,0) 58%), linear-gradient(to bottom, rgba(0, 0, 0, .36), rgba(0, 0, 0, .36)), linear-gradient(to top, rgba(36,103,236,.16), rgb(221,221,221,0)),url("../assets/cuadre.svg")'
			},
			backgroundPosition:{
				'position-footer':'0 0, 0 0, 0 0, 50%'
			},
			
			keyframes: {
			'slide-left': {
			  from: { transform: 'translateX(0)' },
			  to: { transform: 'translateX(-100%)' },
			},
		  },
		  animation: {
			'slide-left': 'slide-left 10s linear infinite',
		  },
		},
	  
	},
	plugins: [],
}
