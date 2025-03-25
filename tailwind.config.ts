import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        text: 'var(--text)',
      },
      backgroundImage: {
        'gradient-button':
          'linear-gradient(270deg, #10E9A2 -0.08%, #429FD6 50.48%, #9749FB 100%)',
        'gradient-main':
          'linear-gradient(349deg, #4A056A 2.44%, #09092E 14.03%, #000617 32.67%)',
        'gradient-about':
          'linear-gradient(to bottom right, #12056A, #020A07, #06012E, #09092E, #4A056A)',
        'gradient-card':
          'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'card': '0 0 20px rgba(0, 0, 0, 0.1)',
      },
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
export default config
