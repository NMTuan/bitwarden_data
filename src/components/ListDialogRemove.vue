<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 12:52:22
 * @LastEditTime: 2023-01-14 22:13:53
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\ListDialogRemove.vue
-->
<template>
  <CommonDialog
    :show="show"
    @update:show="updateShow"
    :title="$t('list.remove.title')"
    closeOnClickModal
  >
    <div class="leading-8">
      <p
        v-html="
          $t('list.remove.info', {
            name: `<span class=text-blue-400>${item.name} </span>`,
          })
        "
      ></p>
    </div>
    <div class="pt-6 text-right">
      <CommonButton type="text" @click="handleCancel">
        {{ $t("list.remove.cancel") }}
      </CommonButton>
      <CommonButton class="ml-4" type="danger" @click="handleRemove">
        {{ $t("list.remove.submit") }}
      </CommonButton>
    </div>
  </CommonDialog>
</template>
<script setup>
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
  dataStore.removeItemById(props.item.id);
  updateShow(false);
};
const handleCancel = () => {
  updateShow(false);
};
</script>
