module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    reporters: ['progress'],
    files: [{ pattern: 'src/test.ts', watched: false }],
    preprocessors: { 'src/test.ts': ['@angular-devkit/build-angular'] },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222']
      }
    }
  });
};
