<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-10 11:51:29
 * @LastEditTime: 2023-01-15 19:40:48
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\views\DuplicateView.vue
-->
<template>
  <LayoutEmpty>
    <div class="leading-8 mb-2">
      <h1># {{ $t("menu.duplicate") }}</h1>
      <p>
        {{ $t("duplicate.total", { count: duplicateUriData.length }) }}
      </p>
      <p>
        {{ $t("duplicate.info") }}
      </p>
      <p>
        {{ $t("duplicate.tip") }}
      </p>
    </div>
    <DuplicateList
      v-for="(item, index) in duplicateUriData.slice(0, page * limit)"
      :key="`${item.uri}_${item.username}`"
      :item="item"
    />
  </LayoutEmpty>
</template>
<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "../stores/data";
import { throttle } from "throttle-debounce";
import LayoutEmpty from "../components/LayoutEmpty.vue";
import DuplicateList from "../components/DuplicateList.vue";

const correction = 100; // 修正值，滚动到距离边缘多少px时触发

const dataStore = useDataStore();
const page = ref(1);
const limit = ref(10);

// 列出所有 uri，及相关的 ids。注意，这里需要判断用户名是否相同，相同的才算重复。
const uriData = computed(() => {
  return dataStore.items.reduce((total, item) => {
    if (
      item.type === 1 &&
      item?.login?.uris &&
      Array.isArray(item.login.uris)
    ) {
      item.login.uris.forEach((i) => {
        // 这里找 uri 相同 并且 username 相同的数据
        const exits = total.findIndex(
          (that) => that.uri === i.uri && that.username === item.login.username
        );
        if (exits >= 0) {
          total[exits].ids.push(item.id);
        } else {
          total.push({
            uri: i.uri,
            username: item.login.username,
            ids: [item.id],
          });
        }
      });
    }
    return total;
  }, []);
});

// 重复的 uri， 也就是 ids.length > 1 的
const duplicateUriData = computed(() => {
  return uriData.value.filter((item) => item.ids.length >= 2);
});

// 加载分页
const loadNextPage = () => {
  if (limit.value * page.value >= duplicateUriData.value.length) {
    return;
  }
  page.value++;
};

// 防抖，单位时间内防止重复执行
const throttleLoadNextPage = throttle(300, () => {
  loadNextPage();
});

// 供父组件中滚动监听调用
const onScroll = (e) => {
  if (e.scrollHeight - e.scrollTop - e.clientHeight <= correction) {
    throttleLoadNextPage();
  }
};

defineExpose({ onScroll });
</script>
