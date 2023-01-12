<template>
  <div class="flex items-center bg-white rounded mb-2 p-4 group">
    <i class="i-ri-folder-2-line text-2xl mr-2 text-cool-gray-400"></i>
    <div class="flex-1 flex items-center">
      <div class="flex items-center cursor-pointer">
        {{ item.name || "无文件夹" }}
      </div>
      <div class="ml-2 p-1 bg-cool-gray-50 text-cool-gray-400 rounded text-xs">
        {{ item.count }}
      </div>
    </div>
    <!-- <div
      v-if="item.id"
      class="action flex items-center text-2xl transition-all opacity-0 group-hover:(opacity-100)"
    >
      <i class="i-ri-share-box-line"></i>
      <i class="i-ri-edit-box-line"></i>
      <i class="i-ri-delete-bin-2-line"></i>
    </div> -->
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
</script>
<style lang="scss" scoped>
.action {
  i {
    @apply mx-2 cursor-pointer text-cool-gray-500 hover:(text-blue-400);
  }
}
</style>
