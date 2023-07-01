//const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration = {
	//аналог обычного экспорта в js, но это верстия для node.js
		mode: "development",
		entry: path.resolve(__dirname, 'src', 'index.ts'), // склеиваем участки пути (__dirname - текущая папка)
		// настройки куда и как будем делать сборку приложения
		output: {
			filename: "[name].[contenthash].js",// название главного файла в сборке
			path: path.resolve(__dirname, 'build'), //куда сохраняется
			clean: true,
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'), // при создании index.html в build используем шаблон из папки public файл index.html
			}),
			new webpack.ProgressPlugin(),
		],
		module: {
			rules: [ //конфигурируем лоадеры, которые нужны для того, чтобы обрабатывать файлы, которые выходят за рамки js(png, jpg, gif, svg, css, scss, ts)
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'], //благодаря этому свойству не нужно указывать расширение при импорте
		},
	}


export default config

