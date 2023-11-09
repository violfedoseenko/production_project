import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    // путь до папки с исходным кодом
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    // storybook  используется только на этапе разработки , поэтому передаем true
    config.module?.rules?.push(buildCssLoader(true));

    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map(
            (
                // rule: RuleSetRule

                rule: false | '' | 0 | RuleSetRule | '...' | null | undefined,
            ) => {
                // находим правило обрабатывающее svg и исключаем обработку svg для этого правила
                if (
                    // @ts-ignore
                    rule !== '...' && rule.test instanceof RegExp && rule.test.toString().includes('svg')
                    // && /svg/.test(rule?.test as string)
                ) {
                    return { ...rule, exclude: /\.svg$/i };
                }
                //  если праило не связано с кейсом выше - возвращаем его
                return rule;
            },
        );
    }
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    return config;
};
