<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-12 15:54:58
 * @LastEditTime: 2023-01-15 19:29:00
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\FolderItem.vue
-->
<template>
  <div class="flex items-center bg-white rounded mb-2 p-4 group">
    <i class="i-ri-folder-2-line text-2xl mr-2 text-cool-gray-400"></i>
    <div class="flex-1 flex items-center">
      <div class="flex items-center cursor-pointer">
        {{ item.name }}
      </div>
      <div class="ml-2 p-1 bg-cool-gray-50 text-cool-gray-400 rounded text-xs">
        {{ item.count }}
      </div>
    </div>
    <div
      v-if="item.id"
      class="action flex items-center text-2xl transition-all opacity-0 group-hover:(opacity-100)"
    >
      <!-- <i class="i-ri-share-box-line"></i> -->
      <i class="i-ri-edit-box-line" @click="handleEdit"></i>
      <i class="i-ri-delete-bin-2-line" @click="handleRemove"></i>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default() {
      return {};
    },
  },
});

const emits = defineEmits(["handleEdit", "handleRemove"]);

const handleEdit = () => {
  emits("handleEdit", props.item);
};

const handleRemove = () => {
  emits("handleRemove", props.item);
};
</script>
<style lang="scss" scoped>
.action {
  i {
    @apply mx-2 cursor-pointer text-cool-gray-500 hover:(text-blue-400);
  }
}
</style>
