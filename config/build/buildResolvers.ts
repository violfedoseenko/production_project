import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
	return	{
		extensions: ['.tsx', '.ts', '.js'], //благодаря этому свойству не нужно указывать расширение при импорте
	}
}