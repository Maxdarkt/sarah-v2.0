/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {},
      backdropGrayscale: {
        25: '.25',
        50: '.5',
        75: '0.75',
      }
    },
    screens: {
      'xxs': '350px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'mymd': '962px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'xxs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      'quotes': ['Alex Brush, cursive'],
      'title': ['Against', 'ui-sans-serif', 'system-ui'],
      'body': ['NewYork',  'ui-sans-serif', 'system-ui']
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '1rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '5rem',
      '5xl': '7rem',
      'full': '9999px',
      'large': '12px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#b58f82", // original : #8C0427
        "secondary": "#2f363b",
        "accent": "#00af94",
        "neutral": "#f4f4ec",
        "base-50": "#E8E8E8",
        "base-100": "#e5e7eb",
        "base-content": "#20232d",
        "info": "#41AEBD",
        "success": "#489380",
        "warning": "#EB7F13",
        "error": "#E0192E",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

