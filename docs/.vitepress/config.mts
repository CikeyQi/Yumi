import { defineConfig } from 'vitepress';
// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'Yumi',
  description: 'Constructing a Personal Yunzai Plugin Project Documentation Integration Repository.',

  head: [
    ['link', { rel: 'icon', href: '/img/pink_logo.png' }],
  ],

  themeConfig: {
    logo: { light: '/img/light_logo.png', dark: '/img/dark_logo.png'},

    nav: nav(),

    sidebar: sidebar(),

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
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

    outline: {
      level: 'deep',
      label: '页面导航'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
});

function nav(): any[] {
  return [
    { text: '首页', link: '/' },

    {
      text: '文档',
      items: [
        { text: 'AP-PLUGIN', link: '/plugins/ap-plugin/getting-started/getting-started' },
        { text: 'MJ-PLUGIN', link: '/plugins/mj-plugin/getting-started/getting-started' },
        { text: 'NAI-PLUGIN', link: '/plugins/nai-plugin/getting-started/getting-started' },
        { text: 'NSFWJS-PLUGIN', link: '/plugins/nsfwjs-plugin/getting-started/getting-started' },
        { text: 'MC-PLUGIN', link: '/plugins/mc-plugin/getting-started/getting-started' },
        { text: 'MIJIA-PLUGIN', link: '/plugins/mijia-plugin/getting-started/getting-started' },
        { text: 'GPTI-PLUGIN', link: '/plugins/gpti-plugin/getting-started/getting-started' },
        { text: 'EXLOLI-PLUGIN', link: '/plugins/exloli-plugin/getting-started/getting-started' },
        { text: 'NEKO-STATUS-PLUGIN', link: '/plugins/neko-status-plugin/getting-started/getting-started' },
      ],
    },

    { text: '关于', link: '/about/about' },
  ]
}

function sidebar() {
  return {
    "/plugins/ap-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/ap-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/ap-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/ap-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/exloli-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/exloli-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/exloli-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/exloli-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/gpti-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/gpti-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/gpti-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/gpti-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/mc-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/mc-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/mc-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/mc-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/mijia-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/mijia-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/mijia-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/mijia-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/mj-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/mj-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/mj-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/mj-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/nai-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/nai-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/nai-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/nai-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/neko-status-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/neko-status-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/neko-status-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/neko-status-plugin/faq/faq.md"
          }
        ]
      }
    ],
    "/plugins/nsfwjs-plugin/": [
      {
        text: "快速开始",
        collapsed: false,
        items: [
          {
            text: "安装",
            link: "/plugins/nsfwjs-plugin/getting-started/getting-started.md"
          }
        ]
      },
      {
        text: "基础配置",
        collapsed: false,
        items: [
          {
            text: "配置",
            link: "/plugins/nsfwjs-plugin/configuration/configuration.md"
          }
        ]
      },
      {
        text: "常见问题",
        collapsed: false,
        items: [
          {
            text: "问题",
            link: "/plugins/nsfwjs-plugin/faq/faq.md"
          }
        ]
      }
    ]
  }
}