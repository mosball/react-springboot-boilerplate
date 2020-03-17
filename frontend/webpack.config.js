const webpack = require('webpack');
const path = require('path');
require("babel-polyfill");

module.exports = {
    mode: 'production',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, './../backend/src/main/resources/static'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'], // 파일 확장자를 전부 써줘야함
    }
};