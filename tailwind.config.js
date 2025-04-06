/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      neu: {
        DEFAULT: '#e0e0e0',
        shadow1: '#bababa',
        shadow2: '#ffffff',
      },
      neushad: {
        'neumorphic': 'inset 5px 5px 9px #bababa, inset -5px -5px 9px #ffffff',
        'neumorphic-dark': 'inset 5px 5px 9px #1a1a1a, inset -5px -5px 9px #3c3c3c',

      },
      colors: {
        w: "#EAE2B7",
        w2: "#f0ead2",
        y: "#FCBF49",
        or: "#F77F00",
        tos: "#003049",
        r: "#A31621",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
