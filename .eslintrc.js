module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'], // Add 'prettier' to the list of extends
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}], // Configure ESLint to use Prettier's end-of-line preference
  },
};
