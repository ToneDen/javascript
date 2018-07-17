module.exports = {
    extends: 'eslint:recommended',
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true
    },
    settings: {
        ecmascript: 6,
        jsx: true
    },
    plugins: [
        'import',
        'react'
    ],
    rules: {
        'array-callback-return': 2,
        'arrow-spacing': [2, {
            before: true,
            after: true
        }],
        'block-spacing': 1,
        'brace-style': 1,
        camelcase: [1, {
            properties: 'never'
        }],
        'comma-spacing': 1,
        'comma-style': 1,
        'computed-property-spacing': 1,
        'constructor-super': 2,
        'dot-notation': 1,
        eqeqeq: 1,
        'func-call-spacing': 1,
        'function-paren-newline': [1, 'consistent'],
        'implicit-arrow-linebreak': 1,
        'import/first': 1,
        'import/no-webpack-loader-syntax': 2,
        'import/prefer-default-export': 1,
        indent: [1, 4, {
            SwitchCase: 1
        }],
        'jsx-quotes': [2, 'prefer-single'],
        'key-spacing': 1,
        'keyword-spacing': [2, {
            overrides: {
                if: {
                    after: false
                },
                catch: {
                    after: false
                },
                for: {
                    after: false
                },
                while: {
                    after: false
                }
            }
        }],
        /*'newline-per-chained-call': [1, {
            ignoreChainWithDepth: 2
        }],*/
        'no-array-constructor': 2,
        'no-case-declarations': 1,
        'no-console': 0,
        'no-control-regex': 0,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-eval': 2,
        'no-iterator': 2,
        'no-lonely-if': 1,
        'no-loop-func': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 2,
        'no-multi-spaces': 1,
        'no-nested-ternary': 0,
        'no-new-func': 1,
        'no-new-wrappers': 1,
        'no-restricted-syntax': [
            1,
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            }, {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            }, {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            }, {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            }
        ],
        'no-spaced-func': 1,
        'no-sparse-arrays': 0,
        'no-trailing-spaces': 1,
        'no-unneeded-ternary': 1,
        'no-unused-vars': [1, {
            args: 'none'
        }],
        'no-useless-constructor': 1,
        'nonblock-statement-body-position': [1, 'beside'],
        'object-shorthand': [1, 'properties'],
        'one-var': [1, 'never'],
        'operator-linebreak': [1, 'after', {
            overrides: {
                '?': 'after',
                ':': 'after'
            }
        }],
        'padded-blocks': [1, 'never'],
        'prefer-arrow-callback': 1,
        'prefer-const': 2,
        'prefer-rest-params': 1,
        'prefer-spread': 1,
        'prefer-template': 1,
        'quote-props': [0, 'consistent-as-needed'],
        quotes: [2, 'single', {
            allowTemplateLiterals: true,
            avoidEscape: true
        }],
        'react/jsx-boolean-value': 2,
        'react/jsx-curly-spacing': 2,
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-indent-props': [2, 4],
        'react/jsx-key': 2,
        'react/jsx-max-props-per-line': [2, {
            maximum: 4
        }],
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-no-undef': 2,
        'react/jsx-pascal-case': 2,
        'react/jsx-tag-spacing': [1, {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never'
        }],
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 1,
        'react/no-direct-mutation-state': 2,
        'react/no-multi-comp': [2, {
            ignoreStateless: true
        }],
        'react/no-string-refs': 1,
        'react/prefer-es6-class': 2,
        'react/require-render-return': 2,
        'react/self-closing-comp': 2,
        'react/sort-comp': [1, {
            order: [
                'static-methods',
                'lifecycle',
                '/^(on|handle).+$/',
                'everything-else',
                '/^render.+$/',
                'render'
            ]
        }],
        semi: [2, 'always'],
        'space-before-blocks': 1,
        'space-before-function-paren': [1, 'never'],
        'space-in-parens': 1,
        'space-infix-ops': 1,
        'template-curly-spacing': 0
    }
};
