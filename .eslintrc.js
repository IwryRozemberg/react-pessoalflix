module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        camelcase: 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        // "linebreak-style": ["error", "windows"],
        "arrow-parens": ["error", "as-needed"],
        "comma-dangle": ["error", "never"],
        "react/button-has-type": ["error", {reset: false}],
        "import/prefer-default-export": off,
    }
};