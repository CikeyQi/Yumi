import { defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'Yumi',
  description: 'Constructing a Personal Yunzai Plugin Project Documentation Integration Repository.',

  vite: {
    plugins: [
      AutoSidebar({
        ignoreIndexItem: true,
        deletePrefix: '.',
        collapsed: true,
        titleFromFile: true,
      }),
    ],
  },



  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },

      {
        text: '文档',
        items: [
          { text: 'AP-PLUGIN', link: '/plugins/ap-plugin/about' },
          { text: 'MJ-PLUGIN', link: '/plugins/mj-plugin/about' },
          { text: 'NAI-PLUGIN', link: '/plugins/nai-plugin/about' },
          { text: 'NSFWJS-PLUGIN', link: '/plugins/nsfwjs-plugin/about' },
          { text: 'MC-PLUGIN', link: '/plugins/mc-plugin/about' },
          { text: 'MIJIA-PLUGIN', link: '/plugins/mijia-plugin/about' },
          { text: 'GPTI-PLUGIN', link: '/plugins/gpti-plugin/about' },
          { text: 'EXLOLI-PLUGIN', link: '/plugins/exloli-plugin/about' },
          { text: 'NEKO-STATUS-PLUGIN', link: '/plugins/neko-status-plugin/about' },
        ],
      },

      { text: '关于', link: '/about/about' },
    ],

    editLink: {
      pattern: 'https://github.com/CikeyQi/Yumi/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CikeyQi/Yumi'}
    ],

    footer:{
      copyright: 'Copyright © 2024-present CikeyQi. All rights reserved.',
      message: 'Powered by vitepress'
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换"
            },
          },
        },
      },
    },
  },

});
