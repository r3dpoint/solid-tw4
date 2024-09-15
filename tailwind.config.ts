import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{css,json,js,jsx,ts,tsx}"],
  darkMode: [
    "variant",
    [
      "@media (prefers-color-scheme: dark) { &:not(.light *) }",
      "&:is(.dark *)",
    ],
  ],
} satisfies Config;
