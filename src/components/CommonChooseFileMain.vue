<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-10 11:58:52
 * @LastEditTime: 2023-01-10 12:00:12
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\CommonChooseFileMain.vue
-->
<template>
  <CommonChooseFile
    class="flex items-center justify-between bg-white border w-full my-2 px-4 py-3 rounded overflow-hidden hover:(border-cool-gray-300)"
  >
    <div class="flex items-center overflow-hidden">
      <div
        class="flex-shrink-0 i-ri-folder-open-line text-2xl mr-2 text-cool-gray-300"
      ></div>
      <div class="text-cool-gray-400 truncate">
        {{ dataStore.file?.name || "Choose the data file" }}
      </div>
    </div>
    <!-- loading -->
    <div
      v-if="dataStore.loading"
      class="i-ri-loader-5-line animate-spin text-2xl"
    ></div>
    <!-- error -->
    <div
      class="flex items-center flex-shrink-0"
      v-else-if="dataStore.type === 'Password protected'"
    >
      <div class="i-ri-error-warning-line text-2xl mr-2 text-red-500"></div>
      Password protected is not supported
    </div>
    <!-- success -->
    <div
      class="flex items-center"
      v-else-if="['JSON', 'Account backup'].includes(dataStore.type)"
    >
      <div class="i-ri-check-line text-2xl text-green-500"></div>
    </div>
  </CommonChooseFile>
</template>
<script setup>
import { useDataStore } from "../stores/data";
import CommonChooseFile from "./CommonChooseFile.vue";
const dataStore = useDataStore();
</script>
