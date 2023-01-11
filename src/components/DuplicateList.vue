<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-10 13:01:59
 * @LastEditTime: 2023-01-11 13:56:18
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\DuplicateList.vue
-->
<template>
  <div class="bg-cool-gray-200/50 px-4 pt-4 pb-2 mb-4">
    <!-- <div>{{ item.uri }}</div> -->
    <div>
      <simplebar>
        <!-- <pre>{{ item }}</pre> -->
        <!-- <div>
          <span class="bg-blue-400 text-white inline-block px-2 rounded">{{
            item.ids.length
          }}</span>
          条数据完全相同 
        </div> -->
        <div class="flex">
          <DuplicateItemVue
            class="flex-1 max-w-50% min-w-30%"
            v-for="id in item.ids"
            :id="id"
            :sourceMode="sourceMode"
            v-model:selectedId="selectedId"
            v-model:showPassword="showPassword"
          />
        </div>
      </simplebar>

      <div class="flex items-center justify-between p-2 pt-0">
        <div>
          <button
            :class="{
              'bg-cool-gray-50 text-cool-gray-400 cursor-not-allowed':
                selectedId === '',
              'bg-blue-400 text-white cursor-pointer': selectedId !== '',
            }"
            @click="saveSelected"
          >
            保留选中项
          </button>
          <button
            class="text-cool-gray-400 hover:(bg-red-400 text-white)"
            @click="removeAll"
          >
            全部删除
          </button>
        </div>
        <div
          class="bg-cool-gray-50 p-1 rounded cursor-pointer hover:(bg-white)"
          @click="sourceMode = !sourceMode"
          title="toggle source mode"
        >
          <div class="i-ri-code-s-slash-line block text-cool-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import simplebar from "simplebar-vue";
import { useDataStore } from "../stores/data";
import DuplicateItemVue from "./DuplicateItem.vue";
const props = defineProps({
  item: {
    type: Object,
    default() {
      return {};
    },
  },
});

const dataStore = useDataStore();
const sourceMode = ref(false);
const showPassword = ref(false);
const selectedId = ref("");

// 保留选中项
const saveSelected = () => {
  if (!selectedId.value) {
    return;
  }
  // if (confirm(`仅保留编号为 ${selectedId.value} 的数据？`)) {
  dataStore.removeItemById(
    props.item.ids.filter((id) => id !== selectedId.value)
  );
  selectedId.value = "";
  // }
};

// 全部删除
const removeAll = () => {
  if (confirm("确定要全部删除么？")) {
    dataStore.removeItemById(props.item.ids);
    selectedId.value = "";
  }
};
</script>
<style scoped lang="scss">
button {
  @apply mr-4 px-3 py-2 rounded text-sm;
  @apply transition-all;
}
</style>
