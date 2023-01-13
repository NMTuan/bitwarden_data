<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 11:20:34
 * @LastEditTime: 2023-01-13 15:27:23
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\FolderDialogEdit.vue
-->
<template>
  <CommonDialog :show="show" @update:show="updateShow" title="修改文件夹">
    <!-- <input type="text" v-model="data.name" /> -->
    <CommonInput
      v-model:value="data.name"
      placeholder="文件夹名称"
      ref="nameEl"
    />
    <div class="pt-6 text-right">
      <CommonButton type="text" @click="handleCancel">取消</CommonButton>
      <CommonButton class="ml-4" type="primary" @click="handleUpdate">
        更新
      </CommonButton>
    </div>
  </CommonDialog>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useDataStore } from "../stores/data";
import CommonDialog from "../components/CommonDialog.vue";
import CommonInput from "./CommonInput.vue";
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
const data = ref({});
const nameEl = ref();

const updateShow = (value) => {
  emits("update:show", value);
};

const handleUpdate = () => {
  dataStore.updateFolderById(data.value);
  updateShow(false);
};
const handleCancel = () => {
  updateShow(false);
};

onMounted(() => {
  data.value = { ...props.item };
  //   console.log(nameEl);
  nameEl.value.focus();
});
</script>
