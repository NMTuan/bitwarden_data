<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:49:08
 * @LastEditTime: 2023-01-14 20:45:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\LayoutGuide.vue
-->
<template>
  <div
    class="flex items-center gap-4 text-sm"
    v-if="
      !['Password protected', 'Account backup', ''].includes(dataStore.type)
    "
  >
    <!-- file -->
    <CommonChooseFile
      class="item hover:(bg-blue-400 text-white) group"
      :title="$t('guide.choose')"
    >
      <div class="i-ri-file-2-line group-hover:(text-white)"></div>
      {{ dataStore.file.name }}
    </CommonChooseFile>
    <!-- type -->
    <div class="item">
      <div class="i-ri-text"></div>
      {{ dataStore.type }}
    </div>

    <template v-if="dataStore.type === 'JSON'">
      <!-- folder -->
      <router-link
        :to="{ name: 'folder' }"
        class="item hover:(bg-blue-400 text-white) group"
      >
        <div class="i-ri-folder-2-line group-hover:(text-white)"></div>
        {{ dataStore.folders.length }}
      </router-link>
      <!-- item -->
      <router-link
        :to="{ name: 'list' }"
        class="item hover:(bg-blue-400 text-white) group"
      >
        <div class="i-ri-database-2-line group-hover:(text-white)"></div>
        {{ dataStore.items.length }}
      </router-link>
      <!-- download -->
      <a
        :href="downloadHref"
        :download="dataStore.file.name"
        class="item hover:(bg-blue-400 text-white) group"
        :title="$t('guide.download.title')"
      >
        <div class="i-ri-download-2-line group-hover:(text-white)"></div>
        {{ $t("guide.download.label") }}
      </a>
    </template>
    <div v-if="dataStore.loading" class="i-ri-loader-5-line animate-spin"></div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useDataStore } from "../stores/data";
import CommonChooseFile from "./CommonChooseFile.vue";
const dataStore = useDataStore();

const downloadHref = computed(() => {
  const blobURL = new Blob([JSON.stringify(dataStore.data)], {
    type: "text/json",
  });
  return window.URL.createObjectURL(blobURL);
});
</script>
<style scoped lang="scss">
[class^="i-ri"] {
  @apply mr-2 text-cool-gray-400 text-lg;
}
.item {
  @apply flex items-center;
  @apply rounded px-2 py-1;
  @apply bg-cool-gray-100;
  @apply transition-all;
}
</style>
