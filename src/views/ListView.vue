<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-12 18:39:39
 * @LastEditTime: 2023-01-13 16:39:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\views\ListView.vue
-->
<template>
  <LayoutEmpty>
    <h1># 密码库</h1>
    <ListItem
      v-for="item in dataStore.items.slice((page - 1) * limit, page * limit)"
      :item="item"
      @handleEdit="handleEdit"
      @handleRemove="handleRemove"
    >
    </ListItem>
    <CommonPaging
      v-model:page="page"
      v-model:limit="limit"
      :count="dataStore.items.length"
    />
    <ListDialogRemove
      v-if="removeDialogState"
      v-model:show="removeDialogState"
      :item="removeData"
    />
    <ListDialogEdit
      v-if="editDialogState"
      v-model:show="editDialogState"
      :item="editData"
    />
  </LayoutEmpty>
</template>
<script setup>
import { ref, inject, watch } from "vue";
import { useDataStore } from "../stores/data";
import LayoutEmpty from "../components/LayoutEmpty.vue";
import ListItem from "../components/ListItem.vue";
import ListDialogRemove from "../components/ListDialogRemove.vue";
import ListDialogEdit from "../components/ListDialogEdit.vue";
import CommonPaging from "../components/CommonPaging.vue";

const mainScrollTop = inject("mainScrollTop");

const dataStore = useDataStore();
const page = ref(1);
const limit = ref(20);
const editDialogState = ref(false);
const editData = ref({});
const removeDialogState = ref(false);
const removeData = ref({});

const handleEdit = (item) => {
  editData.value = item;
  editDialogState.value = true;
};

const handleRemove = (item) => {
  removeData.value = item;
  removeDialogState.value = true;
};

watch(page, () => {
  mainScrollTop(0);
});
</script>
