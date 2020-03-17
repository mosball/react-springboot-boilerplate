module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map', // 번들링시 소스맵을 함께 생성. 크롬 개발자 도구에서 디버깅시 유용함
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js',
    },

    devServer: {
        port: 3000,
        host: "0.0.0.0",
        contentBase: __dirname + '/public/',
        disableHostCheck: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
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