import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pricing-button': 'linear-gradient(270deg, #10E9A2 -0.08%, #429FD6 50.48%, #9749FB 100%)',
        'pricing-box': `linear-gradient(to right, rgba(164, 183, 255, 0.16), rgba(164, 183, 255, 0.16))`,
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // mountain: 'url(/img/hero-mountains.png)'
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
    },
  },
  plugins: [],
}
export default config
