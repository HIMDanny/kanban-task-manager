module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: ['../.eslintrc.js', 'plugin:jest/recommended'],
  env: {
    node: true,
    jest: true,
  },
  plugins: ['jest'],
  ignorePatterns: ['.eslintrc.js', 'app.e2e-spec.ts'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['app.module.ts'],
      rules: {
        '@typescript-eslint/no-extraneous-class': 'off',
        'no-restricted-syntax': 'off',
      },
    },
    {
      files: ['main.ts'],
      rules: {
        'function-name/starts-with-verb': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
    {
      files: ['board.module.ts'],
      rules: {
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
      },
    },
    {
      files: ['prisma.service.ts'],
      rules: {
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
      },
    },
    {
      files: ['prisma.module.ts'],
      rules: {
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-extraneous-class': 'off',
      },
    },
    {
      files: ['board.repository.ts'],
      rules: {
        '@typescript-eslint/require-await': 'off',
      },
    },
  ],
};
