const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: './',
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./jest.setup.ts'],
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
    setupFilesAfterEnv: ['./jest.setup.ts'],
    modulePathIgnorePatterns: ["./__tests__/__lib__"],
    testEnvironment: 'node',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);