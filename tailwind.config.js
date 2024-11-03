/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Colors
        'bg-main': '#d7d7e3',
        'bg-card': '#f7f8fa',
        'bg-success': '#eefef0',
        'bg-progressing': '#e8f3fa',
        'purple-600': '#d5c7fe',
        'purple-900': '#6f34fe',
        white: '#ffffff',
        black: '#0d0d0d',
        green: '#509772',
        blue: '#6d90bb',
        gray: '#b3b3b3',
        orange: '#f0833a',
        yellow: '#fdd124'
      }
    }
  },
  plugins: []
};
