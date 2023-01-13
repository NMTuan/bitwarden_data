<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 11:37:33
 * @LastEditTime: 2023-01-13 15:23:07
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\CommonSelect.vue
-->
<template>
  <div class="relative cursor-pointer">
    <div
      @click="handleToggle"
      class="flex items-center justify-between bg-white rounded px-4 py-3 border"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <div>
        <input
          type="text"
          :value="current?.name"
          read-only=""
          placeholder="所属文件夹"
        />
      </div>
      <div
        v-if="hover && value"
        class="i-ri-close-circle-line text-2xl text-cool-gray-300 hover:(text-blue-400)"
        @click.stop="handleClear"
      ></div>
      <div
        v-else
        class="i-ri-arrow-down-s-line text-2xl text-cool-gray-300"
      ></div>
    </div>
    <div
      v-if="showMenu"
      class="shadow border bg-white rounded-b text-sm absolute left-0 right-0 top-12"
    >
      <simplebar class="max-h-200px">
        <div
          v-for="folder in dataStore.folders"
          class="px-4 py-3 transition-all"
          :class="{
            'bg-blue-400 text-white hover:(bg-blue-400)': folder.id === value,
            'hover:(bg-cool-gray-100)': folder.id !== value,
          }"
          @click="handleChoose(folder)"
        >
          {{ folder.name }}
        </div>
      </simplebar>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "../stores/data";
import simplebar from "simplebar-vue";

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:value"]);

const dataStore = useDataStore();
const showMenu = ref(false);
const hover = ref(false);

const current = computed(() => {
  return dataStore.folders.find((item) => item.id === props.value);
});

const handleToggle = () => {
  showMenu.value = !showMenu.value;
};

const handleClear = () => {
  emits("update:value", null);
  showMenu.value = false;
};

const handleChoose = ({ id }) => {
  emits("update:value", id);
  showMenu.value = false;
};
</script>
