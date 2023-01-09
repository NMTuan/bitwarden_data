<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-09 16:44:42
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
    <CommonChooseFile
      class="flex justify-between bg-white border w-full my-2 px-4 py-3 rounded hover:(border-cool-gray-300)"
    >
      <div class="flex items-center">
        <div
          class="i-ri-folder-open-line text-2xl mr-2 text-cool-gray-300"
        ></div>
        <div class="text-cool-gray-400">Choose the data file</div>
      </div>
      <div
        class="flex items-center"
        v-if="dataStore.type === 'Password protected'"
      >
        <div class="i-ri-error-warning-line text-2xl mr-2 text-red-500"></div>
        Password protected is not supported
      </div>
    </CommonChooseFile>
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
# 克隆项目
git clone https://github.com/NMTuan/bitwarden_data.git
cd bitwarden_data

# 初始化依赖
yarn install # or npm install 

# 启动
yarn dev # or npm run dev</pre
    >

    <h2>## 支持</h2>
    <p>
      如果你觉得此项目对你有帮助，欢迎
      <a href="https://github.com/NMTuan/bitwarden_data" target="_blank">
        GitHub Star
      </a>
      <a href="https://afdian.net/a/nmtuan/plan" target="_blank">爱发电</a>
      <a href="https://paypal.me/muyi86" target="_blank">PayPal me</a>
    </p>
  </div>
</template>

<script setup>
import { useDataStore } from "../stores/data";
import CommonChooseFile from "../components/CommonChooseFile.vue";
const dataStore = useDataStore();
</script>
<style scoped lang="scss">
h1 {
  @apply text-2xl font-bold mb-2;
}
p {
  // @apply flex items-center;
}
a {
  @apply mx-2 text-blue-400;
}
a[target="_blank"] {
  &::after {
    content: " ";
    @apply i-ri-share-box-line;
    @apply align-super text-xs text-cool-gray-400;
  }
}
h2 {
  @apply text-lg font-bold mt-6 mb-2;
}
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
pre {
  @apply block rounded p-4 my-2;
  @apply bg-cool-gray-900 text-cool-gray-400;
  @apply text-sm leading-6;
}
</style>
