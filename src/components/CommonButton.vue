<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 11:52:03
 * @LastEditTime: 2023-01-13 12:58:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\CommonButton.vue
-->
<template>
  <button :class="className"><slot /></button>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
});

const className = computed(() => {
  const names = [];
  names.push("px-6 py-2 rounded");
  names.push("cursor-pointer");
  if (props.type === "primary") {
    names.push("bg-blue-400 text-white");
    names.push("hover:(bg-blue-500)");
  } else if (props.type === "danger") {
    names.push("bg-red-400 text-white");
    names.push("hover:(bg-red-500)");
  } else if (props.type === "text") {
    names.push(" hover:bg-cool-gray-200");
  }
  return names;
});
</script>
