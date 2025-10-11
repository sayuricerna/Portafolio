

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // 1. Indicar a Tailwind dónde buscar las clases (archivos .jsx/.tsx)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'accent': 'var(--accent-color)',
        'background': 'var(--background)',
        'text': 'var(--text-color)',
      },
      fontSize: {
        'title': 'var(--title-size)',
        'subtitle': 'var(--subtitle-size)',
        'paragraph': 'var(--paragraph-size)',
        'caption': 'var(--caption-size)',
      },
      keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    '50%': { transform: 'translateY(-15px) rotate(5deg)' }, // La animación de movimiento
  },
  
  fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
},
animation: {
  float: 'float 6s ease-in-out infinite',
  'pulse-slow': 'pulseSlow 10s ease-in-out infinite',
  'fade-in-up': 'fadeInUp 1s ease-out forwards',
}
      
      
    },
  },
  
  plugins: [],
}