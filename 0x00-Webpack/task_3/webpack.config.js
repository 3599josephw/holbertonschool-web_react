const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry : {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },
  output : {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "./public/.index.html",
    }),
    new CleanWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  chunks: ["all"],
  module: {
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8564,
    },
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  }
}