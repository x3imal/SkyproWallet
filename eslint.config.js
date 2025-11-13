import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
    globalIgnores(["dist", "node_modules"]),

    {
        files: ["**/*.{js,jsx}"],
        extends: [
            js.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
            prettierConfig // отключает все конфликтующие правила
        ],

        languageOptions: {
            ecmaVersion: "latest",
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },

        rules: {
            "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }],
            "no-console": "off",
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off"
        },
    },
]);
