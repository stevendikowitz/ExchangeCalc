const path = require('path')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isProd = NODE_ENV === 'production'
const webpack = require('webpack')

const plugins = [
  new webpack.DefinePlugin({
    '__DEV__': JSON.stringify(!isProd)
  })
]

const config = {
  context: __dirname,
  devtool: (NODE_ENV === 'development') ? 'source-map' : null,
  entry: "./frontend/index",
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'app.js',
    library: 'ExchangeCalculator',
    libraryTarget: 'umd'
  },
  plugins: plugins,
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"],
    fallback: [path.join(__dirname, 'node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  }
}

if (isProd) {
  config.plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ])
}

module.exports = config
