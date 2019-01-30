/* eslint-disable */
module.exports = function () {
    return {
      files: [
        '!node_modules',
        '**/*.js',
        '!**/*test.js',
      ],
  
      tests: [
        '!node_modules',
        '**/*test.js',
      ],
  
      env: {
        type: 'node',
        runner: 'node'
      },
  
      testFramework: 'jest',
    };
  };
  