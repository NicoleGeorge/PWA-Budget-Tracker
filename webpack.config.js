const WebpackPwaManifest = require("webpack-pwa-manifest");
const webpack = require("webpack");
const path = require("path");

const config = {
  entry: {
    app: __dirname + "/public/index.js"
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker app",
      short_name: "BT",
      description: "An application that allows you to debit/credit transactions while online or offline.",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve(__dirname, "public/icons/icon-512x512.png"),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ]
};

module.exports = config;
