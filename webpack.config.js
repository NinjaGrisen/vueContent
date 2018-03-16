const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
module.exports = {
  entry: ["./src/main.js", "./src/scss/main.scss"],
  output: {
    filename: 'build.js',
    path: path.join(__dirname, "./build/")
  },
  node: {
      fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { minimize: true }
            },
            { loader: "postcss-loader" },
            { loader: "sass-loader" }
          ]
        })
      },
      
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/main.css"
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}