/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'arial', 'halvetica', ...defaultTheme.fontFamily.sans],
      heading: ['Bricolage Grotesque'],
      body_type: ['Exo2'],
    },
    extend: {
      borderRadius: {
        lg: '40px',
        md: '32px',
        sm: '24px'
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
        scroll2: 'scroll2 10s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        scroll2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      colors: {
        neutralWhite: '#FFFFFF',
        neutralLightest: '#F2F2F2',
        neutralLighter: '#D9D8DA',
        neutralLight: '#B4B2B5',
        neutral: '#828084',
        neutralDark: '#504D53',
        neutralDarker: '#1E1A22',
        neutralDarkest: '#06010A',

        purpleHeartLightest: '#F2E7F8',
        purpleHeartLighter: '#E5D0F2',
        purpleHeartLight: '#A65DD4',
        purpleHeart: '#8118C2',
        purpleHeartDark: '#67139B',
        purpleHeartDarker: '#33094D',
        purpleHeartDarkest: '#26073A',

        navyBlueLightest: '#E7E5F3',
        navyBlueLighter: '#D0CCE8',
        navyBlueLight: '#5D4CAE',
        navyBlue: '#18008C',
        navyBlueDark: '#130070',
        navyBlueDarker: '#090038',
        navyBlueDarkest: '#07002A',

        thunderbirdLightest: '#FBE8E7',
        thunderbirdLighter: '#F7D1D0',
        thunderbirdLight: '#E4605B',
        thunderbird: '#D91C15',
        thunderbirdDark: '#AD1610',
        thunderbirdDarker: '#560B08',
        thunderbirdDarkest: '#410806',

        "color-blue-100": "#DED7FF",
        "color-blue-200": "#BCB0FF",
        "color-blue-300": "#9A88FF",
        "color-blue-400": "#7F6BFF",
        "color-blue-500": "#523AFF",
        "color-blue-600": "#3D2ADB",
        "color-blue-700": "#2C1DB7",
        "color-blue-800": "#1D1293",
        "color-blue-900": "#130B7A",

        "color-purple-100": "#F7D3FE",
        "color-purple-200": "#EAA7FE",
        "color-purple-300": "#D77BFD",
        "color-purple-400": "#C25AFB",
        "color-purple-500": "#A224F9",
        "color-purple-600": "#7E1AD6",
        "color-purple-700": "#5E12B3",
        "color-purple-800": "#420B90",
        "color-purple-900": "#2F0677",
      }
    }
  },
  plugins: [],
}

