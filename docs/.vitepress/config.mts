import { defineConfig } from 'vitepress';
import { setSidebar } from './autoSidebar.js';

console.log(setSidebar('docs/plugins/ap-plugin'))
// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'Yumi',
  description: 'Constructing a Personal Yunzai Plugin Project Documentation Integration Repository.',

  head: [
    [
        'link', { rel: 'icon', href: '/img/pink_logo.png' }
    ]
  ],



  themeConfig: {
    logo: { light: '/img/light_logo.png', dark: '/img/dark_logo.png'},

    nav: [
      { text: '首页', link: '/' },

      {
        text: '文档',
        items: [
          { text: 'AP-PLUGIN', link: '/plugins/ap-plugin/configuration/configuration' },
          { text: 'MJ-PLUGIN', link: '/plugins/mj-plugin/configuration/configuration' },
          { text: 'NAI-PLUGIN', link: '/plugins/nai-plugin/configuration/configuration' },
          { text: 'NSFWJS-PLUGIN', link: '/plugins/nsfwjs-plugin/configuration/configuration' },
          { text: 'MC-PLUGIN', link: '/plugins/mc-plugin/configuration/configuration' },
          { text: 'MIJIA-PLUGIN', link: '/plugins/mijia-plugin/configuration/configuration' },
          { text: 'GPTI-PLUGIN', link: '/plugins/gpti-plugin/configuration/configuration' },
          { text: 'EXLOLI-PLUGIN', link: '/plugins/exloli-plugin/configuration/configuration' },
          { text: 'NEKO-STATUS-PLUGIN', link: '/plugins/neko-status-plugin/configuration/configuration' },
        ],
      },

      { text: '关于', link: '/about/about' },
    ],

    sidebar: {
      'about': setSidebar('docs/plugins'),
      'plugins/ap-plugin': setSidebar('docs/plugins/ap-plugin'),
      'plugins/mj-plugin': setSidebar('docs/plugins/mj-plugin'),
      'plugins/nai-plugin': setSidebar('docs/plugins/nai-plugin'),
      'plugins/nsfwjs-plugin': setSidebar('docs/plugins/nsfwjs-plugin'),
      'plugins/mc-plugin': setSidebar('docs/plugins/mc-plugin'),
      'plugins/mijia-plugin': setSidebar('docs/plugins/mijia-plugin'),
      'plugins/gpti-plugin': setSidebar('docs/plugins/gpti-plugin'),
      'plugins/exloli-plugin': setSidebar('docs/plugins/exloli-plugin'),
      'plugins/neko-status-plugin': setSidebar('docs/plugins/neko-status-plugin'),
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium'
      }
    },

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

    outline: 'deep',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
});
