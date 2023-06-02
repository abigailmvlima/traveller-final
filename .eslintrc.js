module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/prefer-default-export': 0,
        'class-methods-use-this': 0,
        'max-classes-per-file': 0,
        'no-console': 'off',
        '@typescript-eslint/dot-notation': 'off',
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'tprefer-destructuring': 'off',
        'no-else-return': 'off',
        'no-plusplus': 'off',
        'no-await-in-loop': 'off',
        'import/no-import-module-exports': 'off',
        'no-case-declarations': 'off',
        'consistent-return': 'off',
        'import/extensions': 'off',
        'prefer-destructuring': 'off',
        'new-cap': 'off',
        'no-async-promise-executor': 'off',
        'no-promise-executor-return': 'off',
        'no-underscore-dangle': 'off',
        'prefer-promise-reject-errors': 'off',
        'prettier/prettier': 'off',
        'react/react-in-jsx-scope': 'off',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
