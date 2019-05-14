module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        'linebreak-style': 'off',
        'no-console': isProd ? 'error' : 'off',
        'no-alert': isProd ? 'error' : 'off',
        'no-unused-expressions': 'off',
        'array-callback-return': 'off',
        'no-nested-ternary': 'off',
        'prefer-template': 'off',
        'curly': 'off',
        'max-len': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
        js: 'never',
        vue: 'never'
        }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': 'off',
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
        optionalDependencies: ['test/unit/index.js']
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
};