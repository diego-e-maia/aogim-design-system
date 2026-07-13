/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d7b0',
          300: '#e9bb7c',
          400: '#df9a45',
          500: '#d68020',
          600: '#c86a16',
          700: '#a65014',
          800: '#854018',
          900: '#6c3516',
        },
        sacred: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#ddd4ff',
          300: '#c4b3ff',
          400: '#a788ff',
          500: '#8b55ff',
          600: '#7c33ff',
          700: '#6c1feb',
          800: '#5b19c5',
          900: '#4c17a1',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e2e2e5',
          200: '#c4c5cb',
          300: '#9fa0a9',
          400: '#7b7c87',
          500: '#61626e',
          600: '#4d4d57',
          700: '#3f3f47',
          800: '#27272f',
          900: '#1a1a21',
          950: '#0d0d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        'sidebar': '280px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(139, 85, 255, 0.15)',
        'glow-lg': '0 0 40px rgba(139, 85, 255, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
