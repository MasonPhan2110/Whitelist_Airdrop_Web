/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      // sans: ['var(--font-poppins)'],
    },
    dropShadow: {
      pepe: '0px 3px 0px #002BC4',
    },
    backgroundColor: {
      header: 'rgba(11, 18, 32, 0.5);',
    },

    backgroundImage: {
      'hero-image': "url('/assets/images/hero-image.png')",
      'pursure-nft': "url('/assets/images/pursure-nft.png')",
      'pursure-nft-pc': "url('/assets/images/pursure-nft-pc.png')",

      aboutus: "url('/assets/images/aboutus-bg.png')",
      tokenomic: "url('/assets/images/tokenomic-bg.png')",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)'],
        pepe: ['var(--font-pepe)'],
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },

    borderRadius: {
      DEFAULT: 96,
    },
  },
  plugins: [],
};
