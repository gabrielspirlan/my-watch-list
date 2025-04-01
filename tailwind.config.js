import { colors } from './styles/colors.js'
import { fontFamily } from './styles/fontFamily.js'

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: colors,
        fontFamily: {
          poppins: ["Poppins_400Regular"],
          "poppins-bold": ["Poppins_700Bold"],
          "poppins-light": ["Poppins_300Light"],
          "poppins-medium": ["Poppins_500Medium"],
          "poppins-semibold": ["Poppins_600Semibold"]
        },
      },
    },
    plugins: [],
  }