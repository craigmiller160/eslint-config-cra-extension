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
        'no-use-before-define': 'error'
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