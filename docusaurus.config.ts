import type {Config} from '@docusaurus/types';
import {themes} from 'prism-react-renderer';
import rehypeRaw from 'rehype-raw';

const lightCodeTheme = themes.github
const darkCodeTheme = themes.vsDark
const organizationName = 'rawat9';
const projectName = 'ts-generics';

const rehypeRawOptions = {
    passThrough: ['mdxjsEsm', 'mdxJsxTextElement', 'mdxJsxFlowElement', 'mdxFlowExpression']
};

export default {
    title: 'TS Generics',
    favicon: 'img/ts.svg',
    url: `https://${organizationName}.github.io`,
    baseUrl: `/${projectName}`,

    organizationName,
    projectName,

    onBrokenLinks: 'warn',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        }
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',
                    rehypePlugins: [[rehypeRaw, rehypeRawOptions]],
                    editUrl:
                        `https://github.com/${organizationName}/${projectName}/tree/main/`,
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
        [
            "docusaurus-preset-shiki-twoslash",
            {
                themes: ["min-light", "min-dark"],
            },
        ],
    ],

    themeConfig:
        ({
            navbar: {
                title: 'ts-generics',
                logo: {
                    alt: 'ts-logo',
                    src: 'img/ts.svg',
                },
                items: [
                    {
                        href: 'https://github.com/rawat9/ts-generics',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                copyright: `Copyright © ${new Date().getFullYear()} TS Generics.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
} satisfies Config;
