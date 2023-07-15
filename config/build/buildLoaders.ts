import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

//порядок, при котором лоадеры возвращаются в массиве имеет значение!
export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

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
          isDev ? 'style-loader': MiniCssExtractPlugin.loader,
		  {
			loader: 'css-loader',
            options: {
                modules:  {
                    auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                },
            }
		  },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      
	}

	return [ 
		typescriptLoader,
		cssLoader
	]
}