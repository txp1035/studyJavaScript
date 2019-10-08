const MyPlugin = require('./wplugin');
const MyPlugin2 = require('./wplugin2');
module.exports = {
  entry: './app.js',
  output: {
    filename: './app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      },
      {
        test: /\.wy$/,
        use: {
          loader: './wyloader/index.js',
          options: {}
        }
      }
    ]
  },
  plugins: [new MyPlugin(), new MyPlugin2()]
};
