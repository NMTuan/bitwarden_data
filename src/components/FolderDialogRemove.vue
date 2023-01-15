<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 12:52:22
 * @LastEditTime: 2023-01-15 19:37:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\FolderDialogRemove.vue
-->
<template>
  <CommonDialog
    :show="show"
    @update:show="updateShow"
    :title="$t('folder.remove.title')"
    closeOnClickModal
  >
    <div class="leading-8">
      <p v-if="item.count === 0">{{ $t("folder.remove.empty") }}</p>
      <p v-else>
        {{ $t("folder.remove.noEmpty", { count: item.count }) }}
      </p>
      <p
        v-html="
          $t('folder.remove.info', {
            name: `<span class=text-blue-400>${item.name}</span>`,
          })
        "
      ></p>
    </div>
    <div class="pt-6 text-right">
      <CommonButton type="text" @click="handleCancel">{{
        $t("folder.remove.cancel")
      }}</CommonButton>
      <CommonButton class="ml-4" type="danger" @click="handleRemove">
        {{ $t("folder.remove.submit") }}
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
