//const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

import webpack from 'webpack'
import path from 'path'

import { buildPlugins } from './config/build/buildPlugins'
import { buildLoaders } from './config/build/buildLoaders'
import { buildResolvers } from './config/build/buildResolvers'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPath } from './config/build/types/config'




export default (env: BuildEnv)=> {
	const paths: BuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.ts'), // склеиваем участки пути (__dirname - текущая папка)
		build: path.resolve(__dirname, 'build'), //куда сохраняется
		html: path.resolve(__dirname, 'public', 'index.html'), // при создании index.html в build используем шаблон из папки public файл index.html
	}

	const PORT = env.port || 3000 // в первую очередь пытаемся получить переменные, но если они не заданы - используем значения по умолчанию
	const mode = env.mode || 'development'
	const isDev = mode === 'development'

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	})
	return config
}

