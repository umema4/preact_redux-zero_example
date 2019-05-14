const path = require('path');
const postCssCssNano = require('cssnano');

const isDebug = process.env.NODE_ENV !== 'production';
console.log(`debug is ${isDebug}`);

module.exports = {
  mode: isDebug ? 'development' : 'production',
  devtool: isDebug ? 'source-map' : false,
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true,
        },
      },
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    hot: true,
    compress: false,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  chrome: '73',
                },
              },
            ],
          ],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            [
              '@babel/plugin-transform-react-jsx', { pragma: 'h' },
            ],
          ],
        },
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: isDebug ? '[name]__[local]___[hash:base64:8]' : '[hash:base64:32]',
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDebug,
              plugins: () => [
                postCssCssNano({
                  zindex: false,
                  autoprefixer: false,
                }),
              ],
            },
          },
        ],
      },
    ],
  },
};
