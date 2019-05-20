module.exports = {
  title: '前端自省清单',
  description: '全面、深入解析MDN推荐使用的JavaScript API',
  themeConfig: {
    algolia: {
      apiKey: '5304c2403a41a7c2d17a71016438d6fc',
      indexName: 'docsearch'
    },
    activeHeaderLinks: true,
    repo: 'https://github.com/Gavin1997/vuepress_web.git',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: [{
        text: 'JavaScript',
        link: '/JavaScript/',
      }, {
        text: 'BOM',
        link: '/BOM/',
      },
      {
        text: 'DOM',
        link: '/DOM/',
      },

      {
        text: '个人博客',
        link: 'http://www.gavin88.top:5800',
      },
    ],

    sidebar: [{
        title: "javaScript",
        collapsable: true,
        children: [
          '/JavaScript/VarandTypes/',


        ],
      },
      {
        title: 'BOM',
        collapsable: false,
        children: [
          // '/BOM/',
        ],
      },
      {
        title: 'DOM',
        collapsable: false,
        children: [
          // '/DOM/',
        ],
      },
    ],
    displayAllHeaders: true,
    lastUpdated: '上次更新',

  },
};
