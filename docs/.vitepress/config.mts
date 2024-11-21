import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'zh-CN',
  title: 'Yumi',
  description: 'Constructing a Personal Yunzai Plugin Project Documentation Integration Repository.',

  head: [
    ['link', { rel: 'icon', href: '/img/pink_logo.png' }],
  ],

  themeConfig: {
    logo: { light: '/img/light_logo.png', dark: '/img/dark_logo.png'},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CikeyQi/Yumi'}
    ],

    footer:{
      copyright: 'Copyright © 2024-present CikeyQi. All rights reserved.',
      message: 'Powered by vitepress'
    },

    nav: [
      { text: '主页', link: '/' },
      {
        text: '项目',
        items: [
          { text: 'AP-AI绘图插件', link: 'https://github.com/AiPreface/ap-plugin' },
          { text: 'MJ-AI绘图插件', link: 'https://github.com/CikeyQi/mj-plugin' },
          { text: 'NAI-AI绘图插件', link: 'https://github.com/CikeyQi/nai-plugin' },
          { text: 'NSFWJS-色图监听插件', link: 'https://github.com/CikeyQi/nsfwjs-plugin' },
          { text: 'MC-我的世界插件', link: 'https://github.com/CikeyQi/mc-plugin' },
          { text: 'MIJIA-米家插件', link: 'https://github.com/CikeyQi/mijia-plugin' },
          { text: 'GPTI-AI问答插件', link: 'https://github.com/CikeyQi/gpti-plugin' },
          { text: 'WAVES-鸣潮插件', link: 'https://github.com/erzaozi/waves-plugin' },
          { text: 'NEKO-猫猫状态插件', link: 'https://github.com/erzaozi/neko-status-plugin' },
          { text: 'IMGS-以图搜图插件', link: 'https://github.com/erzaozi/imgS-plugin' },
          { text: 'VITS-语音合成插件', link: 'https://github.com/erzaozi/vits-plugin' },
          { text: 'SKLAND-明日方舟插件', link: 'https://github.com/erzaozi/skland-plugin' },
          { text: 'SUNOAI-AI作曲插件', link: 'https://github.com/erzaozi/sunoai-plugin' },
          { text: 'EXLOLI-每日本子插件', link: 'https://github.com/erzaozi/exloli-plugin' },
        ]
      },
      { text: '开发者', link: '/team' },
      { text: '关于', link: '/about' },
    ],

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

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
});