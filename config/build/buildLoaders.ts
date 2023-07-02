import webpack from 'webpack'

//порядок, при котором лоадеры возвращаются в массиве имеет значение!
export function buildLoaders(): webpack.RuleSetRule[] {

	const typescriptLoader = {		
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	return [ 
		//конфигурируем лоадеры, которые нужны для того, чтобы обрабатывать файлы, которые выходят за рамки js(png, jpg, gif, svg, css, scss, ts)
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
	]
}