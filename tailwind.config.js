/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0f9',
          100: '#e9e0f4',
          200: '#d4c2e9',
          300: '#ba9ddb',
          400: '#9c70c8',
          500: '#8A2BE2', // Purple
          600: '#7631d5',
          700: '#663399', // Deep Purple
          800: '#532680',
          900: '#45216b',
        },
        secondary: {
          50: '#ecf9f3',
          100: '#d8f3e7',
          200: '#b1e7cf',
          300: '#7ed9b2',
          400: '#50c498',
          500: '#3CB371', // Medium Sea Green
          600: '#2E8B57', // Sea Green
          700: '#276749',
          800: '#22543d',
          900: '#1c4532',
        },
        accent: {
          300: '#f3d4bc',
          400: '#f0c19e',
          500: '#edae80',
          600: '#e6945a',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};