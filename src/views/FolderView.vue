<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-12 14:37:03
 * @LastEditTime: 2023-01-12 18:03:13
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\views\FolderView.vue
-->
<template>
  <LayoutEmpty>
    <h1># 文件夹</h1>
    <FolderItem v-for="item in folders" :item="item"> </FolderItem>
  </LayoutEmpty>
</template>
<script setup>
import { ref, unref, computed } from "vue";
import LayoutEmpty from "../components/LayoutEmpty.vue";
import { useDataStore } from "../stores/data";
import FolderItem from "../components/FolderItem.vue";

const dataStore = useDataStore();

const folders = computed(() => {
  const counts = dataStore.items.reduce((total, item) => {
    const exits = total[item.folderId];
    if (exits) {
      total[item.folderId]++;
    } else {
      total[item.folderId] = 1;
    }
    return total;
  }, {});

  const data = dataStore.folders.reduce((total, item) => {
    total.push({
      id: item.id,
      name: item.name,
      count: counts[item.id] || 0,
    });
    return total;
  }, []);

  // 排序
  data.sort((a, b) => {
    return b.count - a.count;
  });

  // 把无文件夹的加上一起处理
  data.unshift({
    name: "无文件夹",
    count: counts.null,
  });

  return data;
});
</script>
