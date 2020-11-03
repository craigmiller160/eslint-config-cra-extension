/*
 *     lint-config-cra-extension
 *     Copyright (C) 2020 Craig Miller
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
    root: true,
    parser: 'babel-eslint',
    plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'semi': ['error', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'object-curly-newline': ['error', { consistent: true }],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true
            }
        ],
        'no-console': 'error',
        'no-use-before-define': 'error',
        'array-callback-return': 'error',
        'default-case': ['error', { commentPattern: '^no default$' }],
        'dot-location': ['error', 'property'],
        eqeqeq: ['error', 'smart'],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-cond-assign': ['error', 'except-parens'],
        'no-const-assign': 'error',
        'no-control-regex': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-func-assign': 'error',
        'no-implied-eval': 'error',
        'no-invalid-regexp': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': ['error', { allowLoop: true, allowSwitch: false }],
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof'],
                ],
                allowSamePrecedence: false,
            },
        ],
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-negated-in-lhs': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-redeclare': ['error', { builtinGlobals: false }],
        'no-regex-spaces': 'error',
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-undef': 'error',
        'no-restricted-globals': ['error'].concat(restrictedGlobals),
        'no-unreachable': 'error',
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        'no-unused-labels': 'warn',
        'no-unused-vars': [
            'warn',
            {
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],
        'no-with': 'error',
        'no-whitespace-before-property': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        strict: ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'no-restricted-properties': [
            'error',
            {
                object: 'require',
                property: 'ensure',
                message:
                    'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
            },
            {
                object: 'System',
                property: 'import',
                message:
                    'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting',
            },
        ],
        'getter-return': 'error',
        'import/first': 'error',
        'import/no-amd': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
            'error',
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-is-mounted': 'error',
        'react/no-typos': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-render-return': 'error',
        'react/style-prop-object': 'error',
        'jsx-a11y/accessible-emoji': 'error',
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                aspects: ['noHref', 'invalidHref'],
            },
        ],
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
        'react-hooks/rules-of-hooks': 'error'
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                warnOnUnsupportedTypeScriptVersion: true,
            },
            plugins: ['@typescript-eslint'],
            rules: {
                // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
                'default-case': 'off',
                // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
                'no-dupe-class-members': 'off',
                // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
                'no-undef': 'off',
                '@typescript-eslint/consistent-type-assertions': 'error',
                '@typescript-eslint/no-use-before-define': 'error',
                'no-array-constructor': 'off',
                '@typescript-eslint/no-array-constructor': 'error',
                'no-use-before-define': 'off',
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTernary: true,
                        allowTaggedTemplates: true,
                    },
                ],
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'none',
                        ignoreRestSiblings: true,
                    },
                ],
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'error'
            }
        }
    ]
};