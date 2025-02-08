module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
  
    extends: [
      'plugin:react/recommended',
    ],
  
    rules: {
      'no-unused-vars': ['warn'],
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-target-blank': 'off',
    },
  };