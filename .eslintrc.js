module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: false
  },
  plugins: [
    'react-hooks',
    'react',
    'jest-formatting',
    'jest',
    'cypress',
    'eslint-plugin-no-inline-styles',
    'import',
    'node'
  ],
  extends: [
    'plugin:promise/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:cypress/recommended',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    linkComponents: [
      {
        linkAttribute: 'href'
      }
    ]
  },
  rules: {
    // override standard - allows function foo() {} instead of function foo () {}
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    // newlines between variable declarations, returns, if blocks
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    // allows "e" for event, "_" for useless parameter
    'id-length': [
      'error',
      {
        properties: 'never',
        exceptions: ['e', '_']
      }
    ],
    // override standard, allows using `my 'string'` instead of "my 'string'" or 'my \'string\''
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'no-else-return': 'error',
    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // react
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-no-target-blank': [
      'warn',
      {
        allowReferrer: true
      }
    ],
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true
      }
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'getters',
          'setters',
          '/^on.+$/',
          '/^handle.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ],
          rendering: ['/^render.+$/', 'render']
        }
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'error',
    // import
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index', 'unknown']
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'unknown'
          }
        ],
        'newlines-between': 'always'
      }
    ],
    'import/no-extraneous-dependencies': 'error',
    // typescript
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    // TODO: should be switched to error in the next major version (5.x) of syntax package
    '@typescript-eslint/method-signature-style': 'warn',
    // already covered by @typescript-eslint/no-non-null-assertion
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // must be turned off in favor of typescript-eslint/no-use-before-define
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    // must be turned off in favor of typescript-eslint/no-shadow
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // must be turned off in favor of typescript-eslint/naming-convention
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'property',
        format: null
      }
    ],
    // must be turned off in favor of typescript-eslint/no-unused-vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // must be turned off in favor of typescript-eslint/func-call-spacing
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    // must be turned off in favor of typescript-eslint/no-unused-expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
          Function: false,
          object: false
        }
      }
    ],
    complexity: [
      'warn',
      {
        max: 10
      }
    ],
    'max-params': ['warn', 3],
    'max-statements': ['warn', 20],
    'max-statements-per-line': [
      'warn',
      {
        max: 1
      }
    ],
    'max-nested-callbacks': [
      'warn',
      {
        max: 3
      }
    ],
    'max-depth': [
      'warn',
      {
        max: 3
      }
    ],
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'warn',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'no-param-reassign': 'warn',
    'no-invalid-this': 'warn',
    'func-style': ['error', 'expression'],
    'no-inline-styles/no-inline-styles': 'warn',
    curly: ['error', 'all']
  },
  overrides: [
    // Aggregated Jest/Pact/Cypress files
    {
      extends: ['plugin:jest/style', 'plugin:jest-formatting/strict'],
      files: [
        '**/test.*',
        '**/*.test.*',
        '**/*.pact.*',
        '**/cypress/integration/**/*',
        '**/cypress/support/mockScalars.ts'
      ],
      excludedFiles: ['**/test.*.snap'],
      rules: {
        'max-nested-callbacks': ['error', 50],
        // TODO: should be switched to error in the next major version (5.x) of syntax package
        'jest/require-top-level-describe': 'warn',
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'it'
          }
        ]
      }
    },
    // Cypress test files
    {
      extends: ['plugin:jest/recommended'],
      files: ['**/cypress/**/spec.ts', '**/cypress/**/*.spec.ts'],
      rules: {
        'jest/expect-expect': 'off',
        'jest/valid-expect': 'off',
        'jest/no-focused-tests': 'error',
        'promise/always-return': 'off',
        'promise/catch-or-return': 'off'
      }
    },
    // Jest based test files
    {
      extends: ['plugin:jest/recommended'],
      files: ['**/test.*', '**/*.test.*', '**/*.pact.*'],
      excludedFiles: ['**/test.*.snap', '**/*test.*.snap']
    }
  ],
  env: {
    jest: true,
    browser: true,
    node: true
  },
  globals: {
    localStorage: true,
    fetch: true,
    Event: true
  }
}
