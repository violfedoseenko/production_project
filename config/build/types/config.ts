// import { paths } from './../../../webpack.config';
export type BuildMode= 'production' | 'development'
export interface BuildPath {
	entry: string,
	build: string, // папка со сборкой build
	html: string, // путь до html в папке public
}

export interface BuildEnv {
	mode: BuildMode,
	port: number
}

// создаем тип, в котором опишем опции сборки
export interface BuildOptions {
	mode: BuildMode,
	paths: BuildPath,
	isDev: boolean,
	port: number,
}