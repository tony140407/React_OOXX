// jest.config.ts
export default {
    // testEnvironment: 'jsdom',
    moduleNameMapper: {
        // '^react$': '<rootDir>/node_modules/react',
        // '^react-dom$': '<rootDir>/node_modules/react-dom',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^types/(.*)$': '<rootDir>/types/$1',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'd.ts'],
}
