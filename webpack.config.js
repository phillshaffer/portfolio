const path = require('path');

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        loader: 'file-loader',
        options: {
          //name: '/images/[name].[ext]'
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: 'images/'
        }
      }
      /*{
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          //name: '/images/[name].[ext]'
          name: '[name].[ext]',
          outputPath: 'images/',
          //publicPath: 'images/',
          esModule: false
        }
      }*/
    ]
  }
};