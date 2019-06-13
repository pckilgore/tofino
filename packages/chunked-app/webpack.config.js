const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");

const outputDir = path.join(__dirname, "build");

const isProd = process.env.NODE_ENV === "production";

const publicPath = process.env.PUBLIC_PATH || "/";
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
const publicUrl = isProd ? publicPath.slice(0, -1) : "";

module.exports = {
  new: {
    mode: isProd ? "production" : "development",
    bail: isProd,
    entry: ["./src/Index.bs.js"].filter(Boolean),
    output: {
      path: outputDir,
      filename: isProd
        ? "static/js/[name].[contenthash:8].js"
        : "static/js/bundle.js",
      // TODO: remove this when upgrading to webpack 5
      futureEmitAssets: true,
      // There are also additional JS chunk files if you use code splitting.
      chunkFilename: isProd
        ? "static/js/[name].[contenthash:8].chunk.js"
        : "static/js/[name].chunk.js",
      publicPath: publicPath
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    optimization: {
      minimize: isProd,
      // Automatically split vendor and commons
      // https://twitter.com/wSokra/status/969633336732905474
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      splitChunks: {
        chunks: "all",
        name: false
      },
      // Keep the runtime chunk separated to enable long term caching
      // https://twitter.com/wSokra/status/969679223278505985
      runtimeChunk: true
    },
    node: {
      module: "empty",
      dgram: "empty",
      dns: "mock",
      fs: "empty",
      http2: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
        inject: true,
        ...(isProd
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
              }
            }
          : {})
      }),
      // Inline our runtime chunk created above to avoid extra network request.
      isProd &&
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      isProd &&
        new ManifestPlugin({
          fileName: "asset-manifest.json",
          publicPath: publicPath,
          generate: (seed, files) => {
            const manifestFiles = files.reduce(function(manifest, file) {
              manifest[file.name] = file.path;
              return manifest;
            }, seed);

            return {
              files: manifestFiles
            };
          }
        }),
      // Moment.js is an extremely popular library that bundles large locale files
      // by default due to how Webpack interprets its code. This is a practical
      // solution that requires the user to opt into importing specific locales.
      // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
      // You can remove this if you don't use Moment.js:
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // Generate a service worker script that will precache, and keep up to date,
      // the HTML & assets that are part of the Webpack build.
      isProd &&
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          exclude: [/\.map$/, /asset-manifest\.json$/],
          importWorkboxFrom: "cdn",
          navigateFallback: publicUrl + "/index.html",
          navigateFallbackBlacklist: [
            // Exclude URLs starting with /_, as they're likely an API call
            new RegExp("^/_"),
            // Exclude URLs containing a dot, as they're likely a resource in
            // public/ and not a SPA route
            new RegExp("/[^/]+\\.[^/]+$")
          ]
        })
    ],
    devtool: "sourcemap"
  },
  old: {
    entry: "./src/Index.bs.js",
    mode: isProd ? "production" : "development",
    output: {
      path: outputDir,
      filename: "Index.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
        inject: true
      })
    ],
    devtool: "sourcemap",
    devServer: {
      compress: true,
      contentBase: outputDir,
      port: process.env.PORT || 8000,
      historyApiFallback: true
    }
  }
}["new"];
