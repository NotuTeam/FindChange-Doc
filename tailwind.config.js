/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#09090b',
          surface: '#18181b',
          elevated: '#1f1f23',
        },
        border: {
          DEFAULT: '#27272a',
        },
        accent: {
          DEFAULT: '#f59e0b',
          soft: '#f59e01a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
      borderRadius: {
        card: '0.5rem',
        badge: '0.375rem',
      },
    },
  },
  plugins: [],
};
