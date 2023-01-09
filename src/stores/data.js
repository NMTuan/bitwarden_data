/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-09 09:33:57
 * @LastEditTime: 2023-01-09 13:38:23
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\src\stores\data.js
 */
import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  const file = ref(null);
  const data = ref({});

  const loading = ref(false);
  const encrypted = computed(() => data.value.encrypted);
  const passwordProtected = computed(() => data.value.passwordProtected);
  const folders = computed(() => data.value.folders || []);
  const items = computed(() => data.value.items || []);
  const type = computed(() => {
    if (data.value.encrypted) {
      if (data.value.passwordProtected) {
        return "Password protected";
      } else {
        return "Account backup";
      }
    } else if (data.value.encrypted === false) {
      return "JSON";
    } else {
      return "";
    }
  });

  watch(file, (val) => {
    if (!val) {
      return {};
    }
    const reader = new FileReader();
    reader.readAsText(val, "utf8"); //gbk编码
    loading.value = true;
    reader.onload = function () {
      loading.value = false;
      data.value = JSON.parse(this.result);
    };
  });

  return {
    file,
    loading,
    data,
    type,
    passwordProtected,
    encrypted,
    folders,
    items,
  };
});
