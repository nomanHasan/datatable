module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: './dist'
    },
  };