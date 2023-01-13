<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-12 18:39:39
 * @LastEditTime: 2023-01-13 14:07:27
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\views\ListView.vue
-->
<template>
  <LayoutEmpty>
    <h1># 密码库</h1>
    <ListItem
      v-for="item in dataStore.items.slice(0, page * limit)"
      :item="item"
      @handleEdit="handleEdit"
      @handleRemove="handleRemove"
    >
      {{ item }}
    </ListItem>
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
import { ref, computed } from "vue";
import { useDataStore } from "../stores/data";
import { throttle } from "throttle-debounce";
import LayoutEmpty from "../components/LayoutEmpty.vue";
import ListItem from "../components/ListItem.vue";
import ListDialogRemove from "../components/ListDialogRemove.vue";
import ListDialogEdit from "../components/ListDialogEdit.vue";

const correction = 100; // 修正值，滚动到距离边缘多少px时触发

const dataStore = useDataStore();
const page = ref(1);
const limit = ref(20);
const editDialogState = ref(false);
const editData = ref({});
const removeDialogState = ref(false);
const removeData = ref({});

// 加载分页
const loadNextPage = () => {
  if (limit.value * page.value >= dataStore.items.length) {
    return;
  }
  page.value++;
};

// 防抖，单位时间内防止重复执行
const throttleLoadNextPage = throttle(300, () => {
  loadNextPage();
});

// 供父组件中滚动监听调用
const onScroll = (e) => {
  if (e.scrollHeight - e.scrollTop - e.clientHeight <= correction) {
    throttleLoadNextPage();
  }
};

const handleEdit = (item) => {
  editData.value = item;
  editDialogState.value = true;
};

const handleRemove = (item) => {
  removeData.value = item;
  removeDialogState.value = true;
};

defineExpose({ onScroll });
</script>
