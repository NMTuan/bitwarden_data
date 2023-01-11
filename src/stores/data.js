/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-09 09:33:57
 * @LastEditTime: 2023-01-11 14:33:25
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

  // 处理 localStorage
  const lsFile = localStorage.getItem("bitwarden_file");
  const lsData = localStorage.getItem("bitwarden_data");
  if (lsFile && lsData) {
    file.value = JSON.parse(lsFile);
    data.value = JSON.parse(lsData);
  }

  // 监听文件变化，加载文件数据
  watch(file, (val) => {
    if (!val) {
      return {};
    }

    // localStorage 保存下文件相关信息
    localStorage.setItem(
      "bitwarden_file",
      JSON.stringify({
        name: val.name,
      })
    );

    const reader = new FileReader();
    reader.readAsText(val, "utf8"); //gbk编码
    loading.value = true;
    reader.onload = function () {
      loading.value = false;
      data.value = JSON.parse(this.result);
    };
  });

  // 监听数据变化，保存到 logcalStorage
  watch(
    data,
    (val) => {
      localStorage.setItem("bitwarden_data", JSON.stringify(val));
    },
    {
      deep: true,
    }
  );

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
