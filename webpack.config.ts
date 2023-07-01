//const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

import webpack from 'webpack'
import path from 'path'

import { buildPlugins } from './config/build/buildPlugins'
import { buildLoaders } from './config/build/buildLoaders'
import { buildResolvers } from './config/build/buildResolvers'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildPath } from './config/build/types/config'

export const paths: BuildPath = {
	entry: path.resolve(__dirname, 'src', 'index.ts'), // склеиваем участки пути (__dirname - текущая папка)
	output: path.resolve(__dirname, 'build'), //куда сохраняется
	html: path.resolve(__dirname, 'public', 'index.html'), // при создании index.html в build используем шаблон из папки public файл index.html
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
	mode: 'development',
	paths,
	isDev
})


export default config

