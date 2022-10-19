import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^@Entities/(.*)$': '<rootDir>/src/domain/entities/$1',
    '^@Ports/(.*)$': '<rootDir>/src/domain/ports/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  }
};

export default config;

