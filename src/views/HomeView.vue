<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-09 17:30:32
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\views\HomeView.vue
-->

<template>
  <div class="leading-8">
    <h1># Bitwarden Data</h1>
    <p>
      这是一个整理
      <a href="https://bitwarden.com/" target="_blank"> Bitwarden </a>
      数据的小项目。
    </p>
    <p>
      整个项目完全离线，你可以直接在本站操作，也可以去
      <a href="https://github.com/NMTuan/bitwarden_data" target="_blank">
        GitHub
      </a>
      下载源码自行搭建使用。
    </p>

    <h2>## 功能</h2>
    <ul>
      <li class="done">数据的导入导出</li>
      <li>重复数据的处理</li>
      <li>数据的列表展示</li>
      <li>数据编辑与删除</li>
    </ul>

    <h2>## 使用</h2>
    <p>首先，需要你导出 Bitwarden 数据为 json 格式。</p>
    <p>然后在下方选择你的 json 数据文件。</p>
    <CommonChooseFileMain />
    <p>如果数据加载成功，你将会看到页面头部显示的相关信息。</p>
    <p>最后，在左侧菜单中选择你想要操作的功能即可。</p>

    <h2>## 自建</h2>
    <dl>
      <dt>整个项目使用以下技术栈搭建，需要你有一定的前端基础。</dt>
      <dd>
        <a href="https://vitejs.dev/" target="_blank"> vite </a>
        <a href="https://vuejs.org/" target="_blank"> vue </a>
        <a href="https://router.vuejs.org/" target="_blank"> vue-router </a>
        <a href="https://pinia.vuejs.org/" target="_blank"> pinia </a>
        <a href="https://sass-lang.com/" target="_blank"> scss </a>
        <a href="https://uno.antfu.me/" target="_blank"> unocss </a>
        <a href="https://iconify.design/" target="_blank"> iconify </a>
        <a href="https://remixicon.com/" target="_blank"> remixicon </a>
        <a href="http://grsmto.github.io/simplebar/" target="_blank">
          simplebar
        </a>
      </dd>
    </dl>
    <pre>
<span># 克隆项目</span>
git clone https://github.com/NMTuan/bitwarden_data.git
cd bitwarden_data

<span># 初始化依赖</span>
yarn install <span># or npm install</span>

<span># 启动</span>
yarn dev <span># or npm run dev</span></pre>

    <h2>## 支持</h2>
    <p>
      如果你觉得此项目对你有帮助，欢迎
      <a href="https://github.com/NMTuan/bitwarden_data" target="_blank">
        GitHub Star
      </a>
      <a href="https://afdian.net/a/muyi_dev/plan" target="_blank">爱发电</a>
      <a href="https://paypal.me/muyi86" target="_blank">PayPal me</a>
      。
    </p>
  </div>
</template>

<script setup>
import CommonChooseFileMain from "../components/CommonChooseFileMain.vue";
</script>
<style scoped lang="scss">
li {
  @apply flex items-center text-cool-gray-400;
  &::before {
    content: " ";
    @apply i-ri-checkbox-blank-line;
    @apply mr-2 text-2xl text-cool-gray-400;
  }
  &.done {
    @apply text-cool-gray-700;
    &::before {
      content: " ";
      @apply i-ri-checkbox-line;
      @apply mr-2 text-2xl text-cool-gray-400;
    }
  }
}
</style>
