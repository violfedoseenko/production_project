import webpack from 'webpack'
import path from 'path'
import { BuildOptions } from "./types/config"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolvers"
import { buildLoaders } from "./buildLoaders"
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options:BuildOptions): webpack.Configuration {

	const {paths, mode, isDev} = options

	return {
		//аналог обычного экспорта в js, но это верстия для node.js
		mode: mode,
		entry: paths.entry, // склеиваем участки пути (__dirname - текущая папка)
		// настройки куда и как будем делать сборку приложения
		output: {
			filename: "[name].[contenthash].js",// название главного файла в сборке
			path: paths.build, //куда сохраняется
			clean: true,
		},
		plugins: buildPlugins(options), 
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(options),
		// webpack на вхлде имеет кучу файлов, на выходе может быть вскего один, если произошла ошибка - ее становится сложно отследить
		// webpack создает карты исходного кода, по которым можно четко по стэк-трейсу увидеть где произошла ошибка
		devtool: isDev ? 'inline-source-map' : undefined, 
		devServer: isDev ? buildDevServer(options) : undefined
	}
}