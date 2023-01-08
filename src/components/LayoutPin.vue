<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:52:39
 * @LastEditTime: 2023-01-08 18:05:36
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\LayoutPin.vue
-->
<template>
  <div @click="togglePin" class="i-ri-menu-line text-xl cursor-pointer"></div>
</template>
<script setup>
import { watch } from "vue";
const props = defineProps({
  pin: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:pin"]);
const togglePin = () => {
  emits("update:pin", !props.pin);
};

watch(
  () => props.pin,
  (value) => {
    localStorage.setItem("pin", value === true ? "1" : "0");
  }
);
</script>
