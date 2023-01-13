<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 11:37:33
 * @LastEditTime: 2023-01-13 11:48:42
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\CommonInput.vue
-->
<template>
  <div class="flex items-center bg-white rounded px-4 py-3 border">
    <input
      class="flex-1"
      ref="input"
      type="text"
      :value="value"
      @input="handleUpdate"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:value"]);
const input = ref();

const handleUpdate = (e) => {
  emits("update:value", e.target.value);
};

const focus = () => {
  input.value.focus();
};

defineExpose({ focus });
</script>
