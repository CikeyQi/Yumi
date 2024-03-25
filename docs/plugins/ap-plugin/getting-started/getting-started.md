# 快速开始


## 插件介绍

AP-PLUGIN是一款强大的插件，专为调用Stable Diffusion接口而设计，支持多种AI图像生成功能。无论是文字生成图像、图像生成图像，还是提高图片清晰度、
二次元风格化、生成卢浮宫艺术效果，以及图像搜索等，AP-PLUGIN都能满足您的需求

::: tip
**在开始安装本插件之前，请确保您已经在本地或云端成功部署了Stable Diffusion环境，并在启动时打开了API接口，并且机器人所在网络环境能够直接访问它，以确保插件能够正确运行**
:::

## 克隆插件

首先，您需要将插件克隆到您的本地环境。根据您的网络情况选择最适合的方法进行克隆操作，如果您的网络环境能够直接访问 Github，您可以直接选择 `Github`命令进行克隆。如果您无法直接访问 Github，建议使用 `Ghproxy` 服务进行克隆，命令如下

::: code-group

```sh [Github]
git clone https://github.com/ap-plugin/ap-plugin.git ./plugins/ap-plugin
```

```sh [Ghproxy]
git clone https://mirror.ghproxy.com/https://github.com/ap-plugin/ap-plugin.git ./plugins/ap-plugin
```

:::

## 安装依赖

安装完插件后，接下来您需要安装相关的依赖以确保插件能够正确运行。如果您安装了 `pnpm` 包管理器，您可以执行以下命令来安装依赖项

```sh [pnpm]
pnpm install --filter=ap-plugin
```

::: warning
**如果您使用的不是 `pnpm`，您需要直接进入插件的文件夹来进行依赖安装。例如，如果您是 `cnpm` 用户，您需要进入 `/plugins/ap-plugin` 目录并执行`cnpm install` 命令**
:::