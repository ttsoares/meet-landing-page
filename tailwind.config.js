/** @type {import('tailwindcss').Config} */

import { platformSelect } from "nativewind/theme";

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        // P1
        xl: ["4rem", "110%"],
        // P2
        lg: ["2.5rem", "110%"],
        // P4
        md: ["1.125rem", "110%"],
        // P3
        sm: ["1rem", "110%"],
        // P5
        xs: ["1rem", "150%"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        c_cyan_l: "rgb(153, 227, 249)",
        c_cyan_d: "rgb(77,150,168)",
        c_cyan_hv: "rgb(113, 192, 212)",
        c_purp_l: "rgb(217, 184, 225)",
        c_purp_d: "rgb(133, 95, 177)",
        c_purp_hv: "rgb(177, 134, 221)",
        c_stale_l: "rgb(209, 209, 223)",
        c_stale_n: "rgb(136, 135, 157)",
        c_stale_d: "rgb(40, 40, 61)",
        c_white: "rgb(250, 250, 250)",
      },
      fontFamily: {
        RedHat: ["RedHat", "sans-serif"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "RedHat",
        }),
      },
    },
  },
  plugins: [],
};
