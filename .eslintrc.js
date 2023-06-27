module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],

  settings: {
    typescript: true,
    node: true,
  },
  plugins: [
    'simple-import-sort',
    'import',
    'typescript-sort-keys',
    'function-name',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './backend/tsconfig.json',
      './client/tsconfig.json',
    ],
  },
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.ts'],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ExportAllDeclaration,ImportAllDeclaration',
        message: 'Export/Import all (*) is forbidden',
      },
      {
        selector: 'ExportNamedDeclaration[declaration!=null]',
        message: 'Exports should be at the end of the file.',
      },
      {
        selector: 'TSEnumDeclaration',
        message: 'Enums is forbidden.',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'function-name/starts-with-verb': 'error',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    'max-params': ['error', 3],
    'no-nested-ternary': 'error',
    'no-console': 'error',
    // prettier-ignore
    'curly': ['error', 'all'],
    '@typescript-eslint/lines-between-class-members': ['error'],
    '@typescript-eslint/quotes': ['error', 'single'],
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'import/no-default-export': 'error',
    'import/first': 'error',
    'import/newline-after-import': ['error', '1'],
    'import/newline-after-import': ['error', { count: 1 }],
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
  },
};
