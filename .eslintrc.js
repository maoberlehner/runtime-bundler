module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    `@avalanche/eslint-config`,
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    `prefer-let`,
  ],
  rules: {
    'prefer-let/prefer-let': `error`,
    'prefer-const': `off`,
  },
};
