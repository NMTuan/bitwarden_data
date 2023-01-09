<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:47:14
 * @LastEditTime: 2023-01-09 16:34:59
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\LayoutMenu.vue
-->
<template>
  <div class="menu">
    <template v-for="menu in menus">
      <template v-if="Array.isArray(menu.children) && menu.children.length > 0">
        <div class="title">
          {{ menu.label }}
        </div>
        <div v-for="item in menu.children">
          <router-link class="link" :to="item.to">
            <div v-if="item.icon" :class="`${item.icon} icon`"></div>
            {{ item.label }}
          </router-link>
        </div>
      </template>
      <template v-else>
        <router-link class="link" :to="menu.to">
          <div v-if="menu.icon" :class="`${menu.icon} icon`"></div>
          {{ menu.label }}
        </router-link>
      </template>
    </template>
  </div>
</template>
<script setup>
import { ref } from "vue";

const menus = ref([
  {
    label: "Bitwarden Data",
    children: [
      { label: "home", to: { name: "home" } },
      { label: "about", to: { name: "about" } },
    ],
  },
]);
</script>
<style scoped lang="scss">
.menu {
  @apply leading-none mt-2;
}
.title {
  @apply px-4 pt-5 pb-2;
  @apply text-cool-gray-400 capitalize text-sm;
}
.link {
  @apply block p-4 flex items-center;
  @apply capitalize font-bold text-cool-gray-600;
  @apply hover:bg-cool-gray-200;
}
.icon {
  @apply text-20px mr-2 text-cool-gray-400;
}
.router-link-active,
.router-link-active:hover {
  @apply bg-blue-400;
  @apply text-white;
  .icon {
    @apply text-blue-200;
  }
}
</style>
