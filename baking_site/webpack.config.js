const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: ["./src/js/app.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js"
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            //unnecessary, caused propblems
            // {
            //     test: /\.(png|jp(e*)g|svg)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 8000,
            //             name: 'images/[hash]-[name].[ext]'
            //         }
            //     }]
            // },
            {
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "static/media/[hash]-[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
};