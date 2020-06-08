const path = require('path');

module.exports = {

  mode: 'development',

  entry: './src/es/app.js',
  output: {
      path: path.resolve(__dirname, 'www/assets/js'),
      filename: 'app.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};