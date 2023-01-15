<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 11:20:34
 * @LastEditTime: 2023-01-14 22:18:48
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\ListDialogEdit.vue
-->
<template>
  <CommonDialog
    :show="show"
    @update:show="updateShow"
    :title="$t('list.edit.title')"
  >
    <!-- <input type="text" v-model="data.name" /> -->
    <CommonInput
      v-model:value="data.name"
      :placeholder="$t('list.edit.namePlaceholder')"
      ref="nameEl"
      class="mb-2"
    />
    <CommonSelect
      :placeholder="$t('list.edit.folderPlaceholder')"
      v-model:value="data.folderId"
    />
    <div class="pt-6 text-right">
      <CommonButton type="text" @click="handleCancel">{{
        $t("list.edit.cancel")
      }}</CommonButton>
      <CommonButton class="ml-4" type="primary" @click="handleUpdate">
        {{ $t("list.edit.update") }}
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
import CommonSelect from "./CommonSelect.vue";

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
  dataStore.updateItemById(data.value);
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
