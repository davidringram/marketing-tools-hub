/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        // Manually defined "Stone" scale (Muddy Dark)
        gray: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917', // <--- This is your "Stone 900"
            950: '#0c0a09',
        },
        // Manually defined "Dusty Olive" (Primary)
        primary: {
          50: '#f4f7f2',
          100: '#e3ebd3',
          200: '#cbe4b4',
          300: '#9ecf85',
          400: '#7ab859',
          500: '#5F6F52', // <--- CORE OLIVE
          600: '#4A5D23',
          700: '#3d4d1d',
          800: '#323e1b',
          900: '#2a3319',
          950: '#151b0a',
        },
        // Manually defined "Safety Orange" (Accent)
        accent: {
            DEFAULT: '#D97706', 
            bright: '#F97316',
        }
      },
      fontFamily: {
        'mono': ['Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [
    flowbitePlugin
  ],
}