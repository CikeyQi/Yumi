# 快速开始


## 插件介绍

EXLOLI-PLUGIN是一款每日萝莉本子推送插件，实时同步 [exhentai](https://exhentai.org/) 画廊上更新的萝莉本子，推送到你所想的任何地方

::: danger STOP
 - **年龄限制**：本插件仅供年满18岁（或您所在国家/地区的法定成年年龄）的用户使用。使用本软件即表示您确认自己符合这一年龄要求。

 - **遵守当地法律**：用户必须遵守自己所在国家或地区的所有法律和规定。请注意，在某些国家和地区（例如中国），使用或访问本插件中的内容可能是非法的。用户有责任确保自己的行为符合当地法律。

 - **免责声明**：本插件的开发者不对用户如何使用本软件承担任何法律责任。用户需对使用本插件可能产生的任何法律后果负责。

 - **确认同意**：在使用本插件之前，请确认您已阅读、理解并同意遵守以上所有条款。

 - **隐私和安全**：本插件尊重并保护所有用户的隐私和安全。有关数据收集和处理的详细信息，请参阅我们的隐私政策
:::

::: tip
**在开始安装本插件之前，请向群 551081559 内的管理员 四條戀路 获取数据库Token**
:::

## 克隆插件

首先，您需要将插件克隆到您的本地环境。根据您的网络情况选择最适合的方法进行克隆操作，如果您的网络环境能够直接访问 Github，您可以直接选择 `Github`命令进行克隆。如果您无法直接访问 Github，建议使用 `Ghproxy` 服务进行克隆，命令如下

::: code-group

```sh [Github]
git clone https://github.com/erzaozi/exloli-plugin.git ./plugins/exloli-plugin
```

```sh [Ghproxy]
git clone https://mirror.ghproxy.com/https://github.com/erzaozi/exloli-plugin.git ./plugins/exloli-plugin
```

:::

## 安装依赖

安装完插件后，接下来您需要安装相关的依赖以确保插件能够正确运行。如果您安装了 `pnpm` 包管理器，您可以执行以下命令来安装依赖项

```sh [pnpm]
pnpm install --filter=exloli-plugin
```

::: warning
**如果您使用的不是 `pnpm`，您需要直接进入插件的文件夹来进行依赖安装。例如，如果您是 `cnpm` 用户，您需要进入 `/plugins/exloli-plugin` 目录并执行`cnpm install` 命令**
:::