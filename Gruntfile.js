module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var webpack = require("webpack");
  var ExtractTextPlugin = require("extract-text-webpack-plugin");

  grunt.initConfig({
    "webpack-dev-server": {
      users: {
        port: 7000,
        host: "localhost",
        contentBase: "./app",
        publicPath: "/assets/js/",
        keepAlive: true,
        historyApiFallback: true,
        hot: true,
        progress: false,
        webpack: {
          entry: {
            app: ['webpack/hot/dev-server', "./app/js/entry.js"],
          },
          output: {
            path: "./app/assets/js/",
            filename: "bundle.js",
          },
          resolve: [".js", ".jsx", ".ts"],
          module: {
            loaders: [
              {
                test: /\.css$/,
                loader: "style-loader!css-loader"
              },
              {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
              },
              {
                test: /\.jsx$/,
                loader: "jsx-loader"
              },
              {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=/fonts/[name].[ext]"
              },
              {
                test: /\.(jpe?g|png|gif)?$/,
                loader: "file-loader?name=/images/[name].[ext]"
              }
            ]
          },
          plugins: [
            new webpack.HotModuleReplacementPlugin()
          ],
          devtool: "eval",
          debug: true,
          node: {
            net : 'empty',
            dns : 'empty'
          }
        }
      }
    },
    watch: {
      jshint: {
        files: ['app/{,**/}*.js', 'app/{,**/}*.jsx'],
        tasks: ['jshint:users']
      },
    },
    concurrent: {
      devserver: {
        tasks: ['webpack-dev-server', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    jshint : {
      options: {
        jshintrc: true
      },
      users: ['app/{,**/}*.js', 'app/{,**/}*.jsx']
    }
  });

  grunt.registerTask('client', [
    'concurrent:devserver'
  ]);

  grunt.registerTask('default', [
    'client'
  ]);

};
