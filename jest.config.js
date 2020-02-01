module.exports = {
  verbose: true,
  testPathIgnorePatterns: [
    '/\.cache/'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/jestPreprocess.js'
  },
  setupFiles: ['./test/jest/jestsetup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/jest/mocks/fileMock.js'
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
