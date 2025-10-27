const HtmlWebPackPlugin = require("html-webpack-plugin")
const { resolve } = require("path")

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: {loader: "html-loader"}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"]
            },
            
        ]
    },
    resolve: {
        extensions: [".js", ".jsc"]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        })
    ],
};