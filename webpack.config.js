const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

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
const babelOptions = () => {
    const opts = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties  '
        ]
    }
    return opts
}
const jsLoaders = () => {
    const loaders = [
        {
            loader: 'babel-loader',
            optons: babelOptions()
        }
    ]
    if(isDev) {
        loaders.push('elsint-loader')
    }
    return [
        loaders
    ]
}
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
console.log('isDev:', isDev)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill', './index.js'], //
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        // extensions: ['.js', 'css'],  //можно не указывать расширения
        alias: {
            //уменьшает длинные пути @styles
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    // Source maps для удобства отладки
    devtool: isDev ? 'source-map' : false,
    
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            inject: true,
            minify: {
                removeComments: isProd,
                collapseWhitespace: isProd,
            }
        }),
    
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
                {
                    from: path.resolve(__dirname, './src/fonts'),
                    to: path.resolve(__dirname, 'dist/fonts'),
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
            // Eslint 
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: [
            //         'eslint-loader',
            //         'babel-loader'
            //     ]
            // }, 
            //Подключаем стили свайпера
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            // Компилируем SCSS в CSS
            {
                test: /\.(s[ac]ss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },

            // Переносим шрифты
            // {
            //     test: /\.(eot|ttf|woff|woff2)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name].[ext]'
            //     }
            // },

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
