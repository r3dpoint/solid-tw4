import pluginJs from "@eslint/js";
import * as tsParser from "@typescript-eslint/parser";
import solid from "eslint-plugin-solid/configs/typescript";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [".output/**/*.*", ".vinxi/**/*.*"],
  },
  {
    ...solid,
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
    },
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
  },
];
