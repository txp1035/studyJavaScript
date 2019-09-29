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
  plugins: [{}]
};
