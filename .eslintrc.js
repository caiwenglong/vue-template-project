let isProdection = process.env.NODE_ENV === 'production';
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  /*
  *   0 或 off: 关闭规则：允许使用
  *   1 或 warn: 警告：发出警告，程序正常允许
  *   2 或 error：错误：错误提示，程序终止
  * */
  rules: {
    'no-console': isProdection ? 'warn' : 'warn', //禁止使用console
    'no-debugger': isProdection ? 'warn' : 'warn', //禁止使用console
    "semi": [2, "always"],//语句强制分号结尾
    "indent": [2, 2],
    "space-before-function-paren": 0,
  }
};
