import eslint from "@eslint/js"
import tseslint, { configs as tsConfigs } from "typescript-eslint"
import globals from "globals"
import react from "eslint-plugin-react"
import { importX } from "eslint-plugin-import-x"
import * as tsParser from "@typescript-eslint/parser"

export default tseslint.config(
  eslint.configs.recommended,
  tsConfigs.recommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.app.json",
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-boolean-value": ["warn", "never"],
      "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }],
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": ["warn", { callbacksLast: true, shorthandFirst: true }],
      "react/no-unknown-property": ["error", { ignore: [] }],
      "react/display-name": "off",
      "import-x/no-dynamic-require": "warn",
      "import-x/no-nodejs-modules": "warn",
      "import-x/no-named-as-default": ["off", { ignoreModuleList: ["clsx"] }],
      "import-x/no-named-as-default-member": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },
  {
    files: ["*.js", "*.cjs", "*.ts", "*.cts", "*.config.ts", "*.config.js"],
    ignores: ["node_modules/**", "dist/**"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      ecmaVersion: "latest",
      globals: globals.node,
    },

    rules: {
      "import-x/no-dynamic-require": "warn",
      "import-x/no-nodejs-modules": "warn",
    },
  },
  {
    files: ["vite.config.ts"],
    rules: {
      "import-x/no-nodejs-modules": "off",
    },
  },
  {
    ignores: ["**/.vscode/**", "**/.git/**", "**/.env/**", "**/.idea/**", "**/dist/**"],
  },
)
