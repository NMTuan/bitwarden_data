<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-09 13:20:09
 * @LastEditTime: 2023-01-09 13:37:40
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\CommonChooseFile.vue
-->
<template>
  <div class="cursor-pointer relative" @click="handleClick">
    <slot />
    <input ref="input" type="file" class="hidden" @change="handleChange" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useDataStore } from "../stores/data";

const emits = defineEmits(["change"]);

const input = ref();
const dataStore = useDataStore();

const handleClick = () => {
  input.value.click();
};

const handleChange = () => {
  if (input.value.files[0]) {
    dataStore.file = input.value.files[0];
  }
};
</script>
