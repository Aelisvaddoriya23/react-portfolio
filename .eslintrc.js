module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
  
    extends: [
      'plugin:react/recommended',
    ],
  
    rules: {
      'no-unused-vars': ['warn'], // Treat unused variables as warnings
    },
  };