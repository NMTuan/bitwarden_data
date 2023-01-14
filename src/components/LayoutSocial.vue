<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 18:11:03
 * @LastEditTime: 2023-01-14 21:52:26
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\components\LayoutSocial.vue
-->
<template>
  <div class="mr-2 flex items-center">
    <i
      class="i-ri-translate item cursor-pointer text-2xl"
      :title="$t('social.language')"
      @click="toggleLocales"
    ></i>
    <a
      class="item"
      href="https://github.com/NMTuan/bitwarden_data"
      target="_blank"
    >
      <i class="i-ri-github-fill text-2xl"></i>
    </a>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { locale, availableLocales } = useI18n();
const locales = availableLocales;

// 切换语言
const toggleLocales = () => {
  const language =
    locales[(locales.indexOf(locale.value) + 1) % locales.length];
  localStorage.setItem("i18n", language);
  locale.value = language;
};
// 设置当前语言
if (localStorage.getItem("i18n")) {
  locale.value = localStorage.getItem("i18n");
}
</script>
<style lang="scss" scoped>
.item {
  @apply ml-4;
}
</style>
