/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F5F1E7',
        ink: '#241C15',
        wood: {
          light: '#8A5A38',
          DEFAULT: '#6B4226',
          dark: '#43281B',
        },
        pine: {
          light: '#3E7C6B',
          DEFAULT: '#2F5D50',
          dark: '#1F3E35',
        },
        ochre: {
          light: '#E0A85C',
          DEFAULT: '#C97A2B',
          dark: '#95591D',
        },
        cream: '#FBF8F2',
        line: '#DDD4C2',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
