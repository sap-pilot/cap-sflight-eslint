'use strict'

const eslint_js = require('@eslint/js')
const globals = require('globals')
const cdsPlugin = require('@sap/eslint-plugin-cds')

module.exports = [
  {
    ignores: ["**/dist/*"]
  },
  // global rules for all files
  eslint_js.configs.recommended,
  // Generic config for JavaScript files: Setup environment, version, etc.
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.es6,
        SELECT: true,
        INSERT: true,
        UPDATE: true,
        DELETE: true,
        CREATE: true,
        DROP: true,
        CDL: true,
        CQL: true,
        CXL: true,
        cds: true,
        sap: true
      }
    },
    rules: {
      'no-console': 'off',
      'require-atomic-updates': 'off'
    }
  },
  {
    ...cdsPlugin.configs.recommended,
    files: ['**/*.cds'],
    rules: {
      ...cdsPlugin.configs.recommended.rules
    }
  }
]
