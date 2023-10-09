import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildPlugins({paths, isDev}:BuildOptions): webpack.WebpackPluginInstance[] {
	return	[
		new HtmlWebpackPlugin({
			template: paths.html, // при создании index.html в build используем шаблон из папки public файл index.html
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
		}),
		// с помощью DefinePlugin можно в само приложения прокидывать глобальные переменные
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
}