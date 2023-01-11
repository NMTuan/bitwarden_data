<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-10 11:55:41
 * @LastEditTime: 2023-01-11 21:57:30
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\LayoutEmpty.vue
-->
<template>
  <div>
    <template
      v-if="
        ['Password protected', 'Account backup', ''].includes(dataStore.type)
      "
    >
      <h2>## 使用</h2>
      <p>请先选择你的 Bitwarden 数据</p>
      <CommonChooseFileMain />
    </template>
    <slot v-else />
  </div>
</template>
<script setup>
import { useDataStore } from "../stores/data";
import CommonChooseFileMain from "./CommonChooseFileMain.vue";

const dataStore = useDataStore();
</script>
<style scoped lang="scss">
h2 {
  @apply text-lg font-bold mt-6 mb-2;
}
</style>
