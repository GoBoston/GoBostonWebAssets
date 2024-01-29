module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // Add more extends if necessary
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react-refresh',
    'import', 
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc', 
          'caseInsensitive': true
        }
      }
    ],
    // Enforce semicolons at the end of statements
    'semi': ['error', 'always'],

    // Enforce the use of double quotes
    'quotes': ['error', 'double', { 'avoidEscape': true, 'allowTemplateLiterals': true }],

    // Enforce consistent indentation of 2 spaces
    'indent': ['error', 2, { 'SwitchCase': 1 }]
  },
}
