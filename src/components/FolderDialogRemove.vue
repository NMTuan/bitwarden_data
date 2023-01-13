<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 12:52:22
 * @LastEditTime: 2023-01-13 13:06:11
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\FolderDialogRemove.vue
-->
<template>
  <CommonDialog
    :show="show"
    @update:show="updateShow"
    title="删除文件夹"
    closeOnClickModal
  >
    <div class="leading-8">
      <p v-if="item.count === 0">当前文件夹为空，</p>
      <p v-else>
        检测到当前文件夹有
        {{ item.count }}
        条数据，删除文件夹后数据将归属于“无文件夹”，
      </p>
      <p>
        确定要删除 <span class="text-blue-400">{{ item.name }}</span> 吗？
      </p>
    </div>
    <div class="pt-6 text-right">
      <CommonButton type="text" @click="handleCancel">取消</CommonButton>
      <CommonButton class="ml-4" type="danger" @click="handleRemove">
        删除
      </CommonButton>
    </div>
  </CommonDialog>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useDataStore } from "../stores/data";
import CommonDialog from "../components/CommonDialog.vue";
import CommonButton from "./CommonButton.vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object,
    default() {
      return {};
    },
  },
});
const emits = defineEmits(["update:show"]);

const dataStore = useDataStore();

const updateShow = (value) => {
  emits("update:show", value);
};

const handleRemove = () => {
  dataStore.removeFolderById(props.item);
  updateShow(false);
};
const handleCancel = () => {
  updateShow(false);
};
</script>
