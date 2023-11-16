import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// import WebpackDonePlugin from 'webpack-done-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }:BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html, // при создании index.html в build используем шаблон из папки public файл index.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // с помощью DefinePlugin можно в само приложения прокидывать глобальные переменные
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),

        // добавлено принудительное прерывание процесса в случае успеха сборки
        // добавлено после того как столкнулась с проблемой в Github Actions:
        // build успешно собирается, но продолжает быть "on running",
        // и workflow не переходит  к следующему шагу
        {
            apply: (compiler:any) => {
                compiler.hooks.done.tap('DonePlugin', () => {
                    setTimeout(() => {
                        process.exit(0);
                    });
                });
            },
        },
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }));
    }

    return plugins;
}
