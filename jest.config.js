module.exports = {
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: [
        "**/*.(test|spec).(ts|tsx)"
    ],
    globals: {
        "ts-jest": {
            babelConfig: ".babelrc",
            tsConfig: "jest.tsconfig.json"
        }
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "enzyme.js"
    ],
    setupFiles: ['<rootDir>/jest-setup'],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "text-summary"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js"
    }
};
