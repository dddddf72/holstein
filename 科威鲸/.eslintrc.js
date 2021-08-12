module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  // "browserslist": [
  //   "> 1%",
  //   "last 2 versions",
  //   "not dead"
  // ],
  
  // "eslintConfig": {
  //   "root": true,
  //   "env": {
  //     "node": true
  //   },
  //   "extends": [
  //     "plugin:vue/essential",
  //     "eslint:recommended"
  //   ],
  //   "parserOptions": {
  //     "parser": "babel-eslint"
  //   },
  //   "rules": {}
  // },
  // "browserslist": [
  //   "> 1%",
  //   "last 2 versions",
  //   "not dead"
  // ]
}
