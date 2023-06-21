module.exports = {
  env: { browser: true, es2020: true },
  settings: {"react": {version: "detect"}},
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    "plugin:jsx-a11y/recommended",
    "../.eslintrc.js"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['react-refresh'],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'unicorn/filename-case': 'off'
  }, //TODO: Add rules
  overrides: [
    {
      files: ["vite-env.d.ts"],
      rules: {
        'unicorn/prevent-abbreviations': 'off'
      }
    }
  ]
}
