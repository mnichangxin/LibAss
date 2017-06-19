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
                            camelCase: true,
                            localIdentName: '[local]'
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
                                camelCase: true,
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        },
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(jpg|png)$/,
                use: ['url-loader']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'file-loader'
                }
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