module.exports = {
	setupFilesAfterEnv: ['<rootDir>/src/main/config/jest-setup.ts'],
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1'
	},
	moduleDirectories: ['node_modules', 'src'],
	testEnvironment: 'jest-environment-jsdom',
	collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/main/**/*', '!**/*.d.ts'],
	coverageDirectory: 'coverage',
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/src/test/e2e/',
		'<rootDir>/node_modules/'
	]
}
