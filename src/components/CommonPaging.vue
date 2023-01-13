<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-13 15:43:00
 * @LastEditTime: 2023-01-13 16:13:38
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\CommonPaging.vue
-->
<template>
  <div class="sticky left-0 right-0 bottom-0 bg-gray-50 p-4">
    <div class="flex items-center justify-center flex-wrap text-sm">
      <template v-for="num in Math.ceil(count / limit)">
        <div
          v-if="
            num === Math.ceil(count / limit) &&
            page < Math.ceil(count / limit) - max
          "
        >
          ...
        </div>
        <div
          v-if="
            (page > num - max && page < num + max) ||
            num === 1 ||
            num === Math.ceil(count / limit)
          "
          class="rounded p-2 mx-2 min-w-8 text-center"
          :class="{
            'bg-blue-400 text-white': num === page,
            'bg-white cursor-pointer': num !== page,
          }"
          @click="handleChoose(num)"
        >
          {{ num }}
        </div>
        <div v-if="num === 1 && page > max">...</div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  limit: {
    type: Number,
    default: 20,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const max = ref(5);

const emits = defineEmits(["update:page"]);

const handleChoose = (num) => {
  emits("update:page", num);
};
</script>
