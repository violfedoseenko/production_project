import webpack from 'webpack'

//порядок, при котором лоадеры возвращаются в массиве имеет значение!
export function buildLoaders(): webpack.RuleSetRule[] {

	//конфигурируем лоадеры, которые нужны для того, чтобы обрабатывать файлы, которые выходят за рамки js(png, jpg, gif, svg, css, scss, ts)

	// если не используем typescript - нужен bable-loader(транспилятор переводит новый стандарт js  в старый для поддержки больнинством браузеров)
	const typescriptLoader = {		
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}
	const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      
	}

	return [ 
		typescriptLoader,
		cssLoader
	]
}