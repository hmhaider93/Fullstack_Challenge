
// path to configure the path variable
// mode changed to development to stop mimnification
// loader to handle css files
// npm install --save-dev style-loader css-loader
// in test object, every time you find a css file, handle with the use loaders
// css loader converst css file to a avalid javascript
// style loader injetcs it to the document

const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
        ],
      },
    ],
  },
};
