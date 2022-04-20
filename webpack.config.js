const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production"
}


module.exports = {
    mode: mode,
    entry: "./src/index.tsx",
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", "jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}