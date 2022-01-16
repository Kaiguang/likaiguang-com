// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const gitHubUrl = 'https://github.com/Kaiguang'

/** @type {import('@docusaurus/types').Config} */
const config = {
   title: 'Kaiguang Li',
   url: 'https://likaiguang.com',
   baseUrl: '/',
   onBrokenLinks: 'throw',
   onBrokenMarkdownLinks: 'warn',
   favicon: 'img/logo.png',
   organizationName: 'Kaiguang',
   projectName: 'likaiguang-com',

   presets: [
      [
         'classic',
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({ theme: { customCss: require.resolve('./src/css/custom.css') }, docs: false, blog: false }),
      ],
   ],

   plugins: [
      [
         '@docusaurus/plugin-content-docs',
         {
            id: 'about',
            path: 'about',
            routeBasePath: '/',
         },
      ],
      [
         '@docusaurus/plugin-content-docs',
         {
            id: 'notes',
            path: 'notes',
            routeBasePath: 'notes',
            editUrl: `${gitHubUrl}/likaiguang-com/tree/main`,
         },
      ],
      [
         '@docusaurus/plugin-content-blog',
         {
            id: 'articles',
            path: 'articles',
            routeBasePath: 'articles',
            editUrl: `${gitHubUrl}/likaiguang-com/tree/main`,
            blogSidebarCount: 15,
            postsPerPage: 2,
            blogTitle: 'Articles',
            blogDescription: 'Articles',
         },
      ],
   ],

   themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
         navbar: {
            title: 'guang Li',
            logo: { alt: 'Logo of Kai', src: 'img/logo.png' },
            items: [
               { label: 'About', type: 'doc', docsPluginId: 'about', docId: 'kai', position: 'left' },
               { label: 'Notes', type: 'doc', docsPluginId: 'notes', docId: 'notes', position: 'left' },
               { label: 'Articles', to: '/articles', position: 'left' },
               {
                  href: gitHubUrl,
                  position: 'right',
                  className: 'header-github-link',
                  'aria-label': 'GitHub repository',
               },
            ],
         },
         footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Kaiguang Li`,
            links: [
               {
                  title: 'Articles',
                  items: [
                     { label: 'tags', to: '/articles/tags' },
                     { label: 'archive', to: '/articles/archive' },
                  ],
               },
            ],
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
         },
      }),
}

module.exports = config
