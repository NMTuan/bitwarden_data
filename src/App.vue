<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-13 16:40:08
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
          <LayoutMenu />
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
              <LayoutGuide />
            </div>
          </div>
          <LayoutSocial />
        </div>
        <div class="main w-85% max-w-6xl mx-auto mt-6 mb-32">
          <RouterView v-slot="{ Component }">
            <component :is="Component" ref="mainView"></component>
          </RouterView>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, provide } from "vue";
import { useRoute } from "vue-router";
import simplebar from "simplebar-vue";

import LayoutMenu from "./components/LayoutMenu.vue";
import LayoutGuide from "./components/LayoutGuide.vue";
import LayoutPinVuew from "./components/LayoutPin.vue";
import LayoutSocial from "./components/LayoutSocial.vue";

const route = useRoute();
const mainScroll = ref();
const mainView = ref();
const pin = ref(localStorage.getItem("pin") === "0" ? false : true);

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

// 滚动主体区域
const mainScrollTop = (value = 0) => {
  mainScroll.value.scrollElement.scrollTop = value;
};
provide("mainScrollTop", mainScrollTop);

onMounted(() => {
  // 滚动监听，如果子组件有 onScroll 方法，则执行
  mainScroll.value.scrollElement.addEventListener("scroll", () => {
    if (mainView.value?.onScroll) {
      mainView.value.onScroll(mainScroll.value.scrollElement);
    }
  });
});

// 切换路由时，重置滚动条
watch(route, () => {
  mainScroll.value.scrollElement.scrollTop = 0;
});
</script>

<style lang="scss">
html,
body,
#app {
  @apply text-base text-cool-gray-800 bg-cool-gray-50 h-full overflow-hidden;
}

// fix simplebar 异常的 focus 效果
*:focus-visible {
  @apply outline-none;
}

// 滚动条颜色
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

// 统一主体区域样式
.main {
  h1 {
    @apply text-2xl font-bold mb-2;
  }
  a {
    @apply text-blue-400;
  }
  a + a {
    @apply ml-2;
  }
  a[target="_blank"] {
    &::after {
      content: " ";
      @apply i-ri-share-box-line;
      @apply align-super text-xs text-cool-gray-400;
    }
  }
  h2 {
    @apply text-lg font-bold mt-6 mb-2;
  }
  pre {
    @apply block rounded p-4 my-2;
    @apply bg-cool-gray-800;
    @apply text-sm leading-6 text-blue-300;
    span {
      @apply text-gray-400;
    }
  }
}
</style>
