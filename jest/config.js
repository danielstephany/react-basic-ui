 module.exports = {
    "verbose": true,
    "rootDir": "../",
    "roots": ["<rootDir>/src"],
    "setupFilesAfterEnv": ["<rootDir>/jest/setupTests.js"],
    "moduleFileExtensions": ["js", "jsx"],
    "moduleDirectories": ["node_modules"],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/mocks/fileMock.js",
        "\\.(css|less|less)$": "<rootDir>/jest/mocks/styleMock.js"
      }
}