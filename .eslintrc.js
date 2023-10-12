module.exports = {

    env: {

        browser: true,

        es2021: true,

        jest: true,

    },

    extends: [

        'plugin:react/recommended',

        'airbnb',

        'plugin:i18next/recommended',

    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {

        ecmaVersion: 'latest',

        sourceType: 'module',

    },

    plugins: [

        'react',

        '@typescript-eslint',

        'i18next',

    ],

    rules: {

        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],

        'react/jsx-indent': [2, 4], // 2- будет бросаться error при несоблюдении правила , 4 кол-во пробелов

        indent: [2, 4],

        'react/jsx-indent-props': [2, 4],

        'react/react-in-jsx-scope': 'off',

        'import/no-unresolved': 'off',

        'import/prefer-default-export': 'off',

        'no-unused-vars': 'warn',

        'react/require-default-props': 'off',

        'react/jsx-props-no-spreading': 'warn',

        'react/function-component-definition': 'off',

        'no-shadow': 'off',

        'import/extensions': 'off',

        'import/no-extraneous-dependencies': 'off',

        'no-underscore-dangle': 'off',

        'max-len': ['error', { code: 150 }],

        'i18next/no-literal-string': ['error', { markupOnly: true }], // следит только за отсутствием перевродов внутри jsx

        'linebreak-style': 'off',

    },

    globals: {

        __IS_DEV__: true,

    },

};
