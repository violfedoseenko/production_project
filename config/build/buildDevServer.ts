import { BuildOptions } from "./types/config"
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options:BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		open: true,
		//свойство позволяет проксировать запросы через корневую страницу index page
		historyApiFallback: true,
		//  для возможности работы  hot module replacement
		hot: true,
	}
}