const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css',
    allChunks: true
})
const extractLESS = new ExtractTextPlugin({
    filename: '[name].[contenthash:8].css',
    allChunks: true 
})

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: 'style-loader', 
                    use: {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true
                        }
                    }
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: 'style-loader', 
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                camelCase: true
                            }
                        },
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(jpg|png)$/,
                use: ['url-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    },
    plugins: [         
       extractCSS,
       extractLESS,
       new HtmlWebpackPlugin({
           filename: 'index.html',
           template: './src/static/template/index.tpl'
       })
    ]
}