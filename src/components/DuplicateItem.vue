<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-10 20:10:43
 * @LastEditTime: 2023-01-15 19:51:57
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\DuplicateItem.vue
-->
<template>
  <div class="p-2">
    <template v-if="!sourceMode">
      <CommonItemBox
        :title="$t('duplicate.id')"
        @click="handleSelected"
        class="cursor-pointer"
      >
        {{ item.id }}
        <template #side>
          <div
            class="text-2xl"
            :class="{
              'i-ri-checkbox-blank-circle-line text-cool-gray-300':
                selectedId !== id,
              'i-ri-checkbox-circle-line text-blue-400': selectedId === id,
            }"
          ></div>
        </template>
      </CommonItemBox>
      <CommonItemBox
        :title="$t('duplicate.name')"
        :class="{ 'text-red-400': diffLabels.includes('name') }"
      >
        {{ item.name }}
      </CommonItemBox>
      <CommonItemBox :title="$t('duplicate.username')">
        {{ item.login.username }}
      </CommonItemBox>
      <CommonItemBox
        title=""
        :title="$t('duplicate.password')"
        :class="{ 'text-red-400': diffLabels.includes('password') }"
      >
        {{ showPassword ? item.login.password : "••••••••" }}
        <template #side>
          <div
            @click="toggleShowPassword"
            class="text-2xl cursor-pointer"
            :class="{
              'i-ri-eye-line text-cool-gray-300': !showPassword,
              'i-ri-eye-off-line text-blue-400': showPassword,
            }"
          ></div>
        </template>
      </CommonItemBox>
      <CommonItemBox
        :title="$t('duplicate.folder')"
        :class="{ 'text-red-400': diffLabels.includes('folderId') }"
      >
        {{
          dataStore.findFolderById(item.folderId)?.name ||
          $t("duplicate.noFolder")
        }}
      </CommonItemBox>
      <CommonItemBox :title="$t('duplicate.uri')">
        <div v-for="uri in item.login.uris" class="truncate">
          <a :href="uri.uri" target="_blank">{{ uri.uri }}</a>
        </div>
      </CommonItemBox>
    </template>
    <template v-else>
      <div class="relative">
        <div
          class="text-2xl absolute top-4 right-4 z-10 cursor-pointer"
          :class="{
            'i-ri-checkbox-blank-circle-fill text-blue-300/30':
              selectedId !== id,
            'i-ri-checkbox-circle-fill text-blue-300': selectedId === id,
          }"
          @click="handleSelected"
        ></div>
        <pre><simplebar>{{ item }}</simplebar></pre>
      </div>
    </template>
    <!-- <pre>{{ item }}</pre> -->
  </div>
</template>
<script setup>
import simplebar from "simplebar-vue";
import { ref, computed } from "vue";
import { useDataStore } from "../stores/data";
import CommonItemBox from "./CommonItemBox.vue";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  sourceMode: {
    type: Boolean,
    default: false,
  },
  selectedId: {
    type: String,
    default: "",
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  diffLabels: {
    type: Array,
    default() {
      return [];
    },
  },
});

const emits = defineEmits(["update:selectedId", "update:showPassword"]);

const dataStore = useDataStore();

const item = computed(() => {
  return dataStore.items.find((item) => item.id === props.id);
});

const handleSelected = () => {
  emits("update:selectedId", props.id);
};

const toggleShowPassword = () => {
  emits("update:showPassword", !props.showPassword);
};
</script>
