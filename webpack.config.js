const path = require('path');

module.exports = {
  entry: './src/site.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};