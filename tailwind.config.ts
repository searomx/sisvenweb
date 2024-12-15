import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		// screens: {
		// 	lg: '1366px'
		// 	// => @media (min-width: 992px) { ... }
		// },
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'tomato': '#ea4e3c',
			},
			backgroundImage: {
				// 'hero-pattern': "url('images/background-body.png')",
				// 'footer-texture': "url('/img/footer-texture.png')",
			}
		}
		
	},
	plugins: []
} satisfies Config;
