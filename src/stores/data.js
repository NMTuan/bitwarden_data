/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-09 09:33:57
 * @LastEditTime: 2023-01-11 14:06:34
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

  // 根据 id 删除 item
  const removeItemById = (ids = []) => {
    if (typeof ids === "string") {
      ids = [ids];
    }
    ids.forEach((id) => {
      const index = data.value.items.findIndex((item) => item.id === id);
      data.value.items.splice(index, 1);
    });
  };

  // 根据 id 找到 文件夹名称
  const findFolderById = (id = "") => {
    if (!id) {
      return undefined;
    }
    return folders.value.find((folder) => folder.id === id);
  };

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
    removeItemById,
    findFolderById,
  };
});
