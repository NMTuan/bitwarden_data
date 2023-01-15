<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-12 14:37:03
 * @LastEditTime: 2023-01-15 19:23:00
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\views\FolderView.vue
-->
<template>
  <LayoutEmpty>
    <h1># {{ $t("menu.folder") }}</h1>
    <FolderItem
      v-for="item in folders"
      :item="item"
      @handle-edit="handleEdit"
      @handleRemove="handleRemove"
    >
    </FolderItem>
    <FolderDialogEdit
      v-if="editDialogState"
      v-model:show="editDialogState"
      :item="editItemData"
    />

    <FolderDialogRemove
      v-if="removeDialogState"
      v-model:show="removeDialogState"
      :item="removeItemData"
    />
  </LayoutEmpty>
</template>
<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import LayoutEmpty from "../components/LayoutEmpty.vue";
import { useDataStore } from "../stores/data";
import FolderItem from "../components/FolderItem.vue";
import FolderDialogEdit from "../components/FolderDialogEdit.vue";
import FolderDialogRemove from "../components/FolderDialogRemove.vue";

const dataStore = useDataStore();
const { t } = useI18n();
const editDialogState = ref(false);
const editItemData = ref({});
const removeDialogState = ref(false);
const removeItemData = ref({});

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
    name: t("folder.noFolder"),
    count: counts.null,
  });

  return data;
});

const handleEdit = (item) => {
  editItemData.value = item;
  editDialogState.value = true;
};

const handleRemove = (item) => {
  removeItemData.value = item;
  removeDialogState.value = true;
};
</script>
