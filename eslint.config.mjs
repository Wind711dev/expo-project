import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import pluginReactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactNative.configs.all, // Thêm React Native plugin
  pluginReactHooks.configs.recommended, // Thêm React Hooks plugin
  prettier, // Disable các rules ESLint có thể xung đột với Prettier
  {
    rules: {
      "react-native/no-inline-styles": "off",
      "react-native/no-unused-styles": "warn",
      "react-native/split-platform-components": "warn",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];
