<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-06 10:31:33
 * @LastEditTime: 2023-01-11 21:52:38
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\README.md
-->

# Bitwarden Data

这是一个整理 Bitwarden 数据的小项目。

整个项目完全离线，你可以直接访问[演示页面](https://bitwarden.muyi.dev)，也可以去 [GitHub](https://github.com/NMTuan/bitwarden_data) 下载源码自行搭建使用。

## 背景

正常情况下 Bitwarden 中的数据是不会重复的。

但由于我在多种密码管理软件中做过数据迁移，导致出现重复数据。

虽然重复数据不怎么影响使用，但终究是不舒服。趁着年前有点时间，就有了这个项目。

## 功能

- [x] 数据的导入导出

- [x] 重复数据的处理

- [x] 浏览器数据缓存，方便下次继续处理

- [ ] 数据的列表展示

- [ ] 数据编辑与删除

## 使用

详见项目[演示页面](https://bitwarden.muyi.dev)。

## 自建

整个项目使用以下技术栈搭建，需要你有一定的前端基础。

[vite](https://vitejs.dev/) [vue](https://vuejs.org/) [vue-router](https://router.vuejs.org/) [pinia](https://pinia.vuejs.org/) [scss](https://sass-lang.com/) [unocss](https://uno.antfu.me/) [iconify](https://iconify.design/) [remixicon](https://remixicon.com/) [simplebar](http://grsmto.github.io/simplebar/)

```bash
# 克隆项目
git clone https://github.com/NMTuan/bitwarden_data.git
cd bitwarden_data

# 初始化依赖
yarn install # or npm install

# 启动
yarn dev # or npm run dev
```

## 支持

如果你觉得此项目对你有帮助，欢迎 [GitHub Star](https://github.com/NMTuan/bitwarden_data) [爱发电]([[爱发电 · 连接创作者与粉丝的会员制平台]()](https://afdian.net/a/muyi_dev/plan)) [PayPal me](https://paypal.me/muyi86) 。
