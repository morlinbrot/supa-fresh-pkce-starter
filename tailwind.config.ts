import { type Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx,js,jsx}"],
  // deno-lint-ignore no-explicit-any
  plugins: [daisyui as any, typography],
  theme: {
    extend: {
      colors: {
        primary: "#88CACA",
        secondary: "#6FB0B0",
        highlight: "#B2FCFB",
        minor: "#102E44",
        minorSecondary: "#405A73",
      },
    },
  },
} satisfies Config;
