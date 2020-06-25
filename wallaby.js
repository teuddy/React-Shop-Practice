module.exports = function (wallaby) {
  return {
    files: ['src/**/*.js'],

    tests: ['test/**/*test.js'],
    extensions: ['.js', '.ts', '.json'],

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
