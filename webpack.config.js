const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
if (isProd) {
    config.minimizer = [
        new TerserWebpackPlugin(),
        new CssMinimizerWebpackPlugin()
    ]
}

    return config
}
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

console.log('isDev:' + isDev)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // extensions: ['.js', 'css'],
        alias: {
            //уменьшает длинные пути @styles
        }
    },
    optimization: optimization( ),
    devServer: {
        port: 4200,
        hot: isDev
    },
    // Source maps для удобства отладки
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),

        // Кладем стили в отдельный файлик
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),

        // Копируем картинки
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/images'),
                    to: path.resolve(__dirname, 'dist/images'),
                },
            ]
        })
    ],

    module: {
        rules: [

            // Транспилируем js с babel
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            }, 

            // Компилируем SCSS в CSS
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },

            // Подключаем шрифты из css
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]'
                    },
                ]
            },

            // Подключаем картинки из css
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                use: [
                    {
                        loader: 'file-loader?name=./static/[name].[ext]'
                    },
                ]
            },

        ]
    }

}
