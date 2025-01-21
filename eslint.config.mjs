import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// For compatibility with traditional ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"), // Extend Next.js ESLint configs
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Match JavaScript and TypeScript files
    rules: {
      "react/react-in-jsx-scope": "off", // Example: Disable rule if using React 17+
    },
  },
];
