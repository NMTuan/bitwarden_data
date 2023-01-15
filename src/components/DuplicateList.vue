<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-10 13:01:59
 * @LastEditTime: 2023-01-15 19:55:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\DuplicateList.vue
-->
<template>
  <div class="bg-cool-gray-200/50 px-4 pt-4 pb-2 mb-4">
    <div>
      <simplebar>
        <div class="flex">
          <DuplicateItem
            class="flex-1 max-w-50% min-w-30%"
            v-for="id in item.ids"
            :id="id"
            :sourceMode="sourceMode"
            :diffLabels="diffLabels"
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
            {{ $t("duplicate.saveSelected") }}
          </button>
          <button
            class="text-cool-gray-400 hover:(bg-red-400 text-white)"
            @click="removeAll"
          >
            {{ $t("duplicate.removeAll") }}
          </button>
        </div>
        <div
          class="bg-cool-gray-50 p-1 rounded cursor-pointer hover:(bg-white)"
          @click="sourceMode = !sourceMode"
          :title="$t('duplicate.sourceMode')"
        >
          <div class="i-ri-code-s-slash-line block text-cool-gray-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import simplebar from "simplebar-vue";
import { useDataStore } from "../stores/data";
import DuplicateItem from "./DuplicateItem.vue";
const props = defineProps({
  item: {
    type: Object,
    default() {
      return {};
    },
  },
});

const dataStore = useDataStore();
const sourceMode = ref(false); // 源码模式
const showPassword = ref(false); // 是否显示密码
const selectedId = ref(""); // 选中的id

// 找到值不同的项
const diffLabels = computed(() => {
  const diff = props.item.ids.reduce(
    (total, id) => {
      const itemData = dataStore.items.find((that) => that.id === id);
      total.folderId = total.folderId.filter(
        (that) => that !== itemData.folderId
      );
      total.folderId.push(itemData.folderId);

      total.name = total.name.filter((that) => that !== itemData.name);
      total.name.push(itemData.name);

      total.password = total.password.filter(
        (that) => that !== itemData.login.password
      );
      total.password.push(itemData.login.password);

      return total;
    },
    {
      folderId: [],
      name: [],
      password: [],
    }
  );
  return Object.keys(diff).reduce((total, key) => {
    if (diff[key].length > 1) {
      total.push(key);
    }
    return total;
  }, []);
});

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
