module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': [0, 'always-multiline'] // 对象最后一个属性有逗号结尾
  },
  overrides: [
    {
      files: ['**/pages/**/*.{js,ts,vue}', '**/layouts/**/*.{js,ts,vue}', '**/app.{js,ts,vue}', '**/error.{js,ts,vue}'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
};
