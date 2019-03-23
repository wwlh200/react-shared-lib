module.exports = {
  "preset": 'ts-jest',
  "collectCoverage": true,
  "collectCoverageFrom": [
    'packages/pco-*/src/components/**/*.{ts,tsx}',
    '!packages/pco-*/src/components/**/index.{ts,tsx}',
  ],
  "coverageDirectory": "build/coverage/",
  "coveragePathIgnorePatterns": ['/node_modules/'],
  "coverageReporters": [
    "html"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "moduleFileExtensions": ["js", "jsx", "json", "ts", "tsx"],
  "moduleNameMapper": {
    "^.+\\.(scss|less|css)$": "identity-obj-proxy"
  },
  "setupTestFrameworkScriptFile": "<rootDir>/test/setup.js",
  "testMatch": [
    "<rootDir>/packages/**/__tests__/**/*.(ts|tsx|js|jsx)"
  ],
  "testPathIgnorePatterns": [
    "/build/",
    "/node_modules/",
    "/types/",
    "/dist/"
  ],
  "transformIgnorePatterns": [
    "/node_modules",
    "node"
  ],
  "transform": {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  },
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
};
