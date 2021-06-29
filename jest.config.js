/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  modulePathIgnorePatterns: [
    '<rootDir>/src/interfaces'
  ]
}
