module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/tests/enzyme.config.js'],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    enzymeAdapter: "react16",
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^config$': '<rootDir>/webpack.config.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
