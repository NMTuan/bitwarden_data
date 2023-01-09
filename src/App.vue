<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-09 16:33:52
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\App.vue
-->

<template>
  <div class="h-full flex">
    <!-- menu -->
    <div
      class="fixed z-10 h-full overflow-hidden w-0 bg-cool-gray-100/90 border-r-8 border-cool-gray-300/50 transition-all duration-500 hover:(w-64 border-r)"
      :class="menuClass"
    >
      <div class="w-64 h-full">
        <simplebar class="simplebar h-full">
          <LayoutMenuVue />
        </simplebar>
      </div>
    </div>
    <!-- main -->
    <div
      class="flex-1 h-full overflow-hidden ml-0 transition-all duration-500"
      :class="mainClass"
    >
      <simplebar class="simplebar h-full" ref="mainScroll">
        <div
          class="flex items-center justify-between h-14 px-4 leading-none bg-cool-gray-50/50 backdrop-blur sticky left-0 top-0 right-0 z-10"
        >
          <div class="flex items-center">
            <LayoutPinVuew v-model:pin="pin" />
            <div class="ml-4 flex items-center">
              <LayoutGuideVue />
            </div>
          </div>
          <LayoutSocialVue />
        </div>
        <div class="w-85% max-w-6xl mx-auto mt-6 mb-32">
          <RouterView v-slot="{ Component }">
            <component :is="Component" ref="mainView"></component>
          </RouterView>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "./stores/data";
import { useRouter } from "vue-router";
import simplebar from "simplebar-vue";

import LayoutMenuVue from "./components/LayoutMenu.vue";
import LayoutGuideVue from "./components/LayoutGuide.vue";
import LayoutPinVuew from "./components/LayoutPin.vue";
import LayoutSocialVue from "./components/LayoutSocial.vue";

const router = useRouter();
const dataStore = useDataStore();
const pin = ref(localStorage.getItem("pin") === "1" ? true : false);
const menuClass = computed(() => {
  if (pin.value) {
    return "lg:(w-64 bg-cool-gray-200/50 !border-none)";
  } else {
    return "";
  }
});
const mainClass = computed(() => {
  if (pin.value) {
    return "lg:ml-64";
  } else {
    return "";
  }
});

if (dataStore.type === "") {
  router.replace({ name: "home" });
}
</script>

<style lang="scss">
html,
body,
#app {
  @apply text-base text-cool-gray-800 bg-cool-gray-50 h-full overflow-hidden;
}
*:focus-visible {
  @apply outline-none;
}

.simplebar {
  &:hover {
    .simplebar-track {
      @apply bg-black/5;
    }
  }

  .simplebar-scrollbar {
    &:before {
      @apply bg-black/50;
    }
  }
}
</style>
