<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-10 11:55:41
 * @LastEditTime: 2023-01-15 19:59:32
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
      <h2>## {{ $t("empty.use") }}</h2>
      <p>{{ $t("empty.tip") }}</p>
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
