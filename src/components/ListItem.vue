<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-12 19:13:18
 * @LastEditTime: 2023-01-12 19:48:35
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\ListItem.vue
-->
<template>
  <div class="flex items-center bg-white rounded mb-2 p-4 text-sm">
    <i :class="icon" class="text-2xl mr-4 text-cool-gray-400"></i>
    <div class="flex-1">
      <div class="text-cool-gray-500">{{ item.name }}</div>
      <div class="flex items-center" v-if="item.type === 1">
        {{ item.login.username }}
      </div>
    </div>
    <div class="flex-1 flex items-center text-base" v-if="item.folderId">
      <i class="i-ri-folder-2-line text-2xl mr-4 text-cool-gray-400"></i>
      {{ dataStore.findFolderById(item.folderId)?.name || "无" }}
    </div>
  </div>
  <!-- <pre>{{ item }}</pre> -->
</template>
<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "../stores/data";

const props = defineProps({
  item: {
    type: Object,
    default() {
      return {};
    },
  },
});

const dataStore = useDataStore();

const icon = computed(() => {
  let className = "";
  switch (props.item.type) {
    case 1:
      className = "i-ri-lock-password-line";
      break;
    case 2:
      className = "i-ri-file-list-line";
      break;
    case 3:
      className = "i-ri-bank-card-line";
      break;
    case 4:
      className = "i-ri-user-smile-line";
      break;
  }
  return className;
});
</script>
<style lang="scss" scoped>
.item {
  @apply ml-4;
}
</style>
