const path = require("path");
const fs = require("fs");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split(".");
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false
        });
    });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

const config = {
    entry: [
        "./src/js/index.js", "./src/scss/style.scss"
    ],
    output: {
        filename: "./js/bundle.js"
    },
    devtool: "source-map",
    mode: "production",
    optimization: {
        minimizer: [new TerserPlugin({sourceMap: true, extractComments: true})]
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, "src/scss"),
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    }, {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    }, {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: () => [require("cssnano")({
                                    preset: [
                                        "default", {
                                            discardComments: {
                                                removeAll: true
                                            }
                                        }
                                    ]
                                })]
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.html$/,
                include: path.resolve(__dirname, "src/html/includes"),
                use: ["raw-loader"]
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                    }
                  },
                ],
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "./css/style.bundle.css"}),
        new CopyWebpackPlugin([
            {
                from: "./src/fonts",
                to: "./fonts"
            }, {
                from: "./src/favicon",
                to: "./favicon"
            }, {
                from: "./src/img",
                to: "./img"
            }, {
                from: "./src/css",
                to: "./css"
            } 
        ])
        //,
        // new webpack.ProvidePlugin({
        //       $: 'jquery',
        //       jQuery: 'jquery',
        //       'window.jQuery': 'jquery'
        //     }),
  


    ].concat(htmlPlugins)
};

module.exports = (env, argv) => {
    if (argv.mode === "production") {
        config
            .plugins
            .push(new CleanWebpackPlugin());
    }
    return config;
};
