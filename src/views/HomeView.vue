<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-15 20:54:45
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \bitwarden_data_de_duplication\src\views\HomeView.vue
-->

<template>
  <div class="leading-8">
    <h1># Bitwarden Data</h1>
    <p
      v-html="
        $t('home.info[0]', {
          bitwarden: `<a href=https://bitwarden.com/ target=_blank> Bitwarden </a>`,
        })
      "
    ></p>
    <p
      v-html="
        $t('home.info[1]', {
          github: `<a href=https://github.com/NMTuan/bitwarden_data target=_blank> GitHub </a>`,
        })
      "
    ></p>

    <h2>## {{ $t("home.background.title") }}</h2>
    <p>{{ $t("home.background.info[0]") }}</p>
    <p>{{ $t("home.background.info[1]") }}</p>
    <p>{{ $t("home.background.info[2]") }}</p>

    <h2>## {{ $t("home.feature.title") }}</h2>
    <ul>
      <li class="done">{{ $t("home.feature.list[0]") }}</li>
      <li class="done">{{ $t("home.feature.list[1]") }}</li>
      <li class="done">{{ $t("home.feature.list[2]") }}</li>
      <li class="done">{{ $t("home.feature.list[3]") }}</li>
      <li class="done">{{ $t("home.feature.list[4]") }}</li>
    </ul>

    <h2>## {{ $t("home.use.title") }}</h2>
    <p>{{ $t("home.use.info[0]") }}</p>
    <p>{{ $t("home.use.info[1]") }}</p>
    <CommonChooseFileMain />
    <p>{{ $t("home.use.info[2]") }}</p>
    <p>{{ $t("home.use.info[3]") }}</p>
    <p>{{ $t("home.use.info[4]") }}</p>
    <p
      class="mt-2 p-4 rounded bg-red-50 text-red-600 border border-red-200 first-line:font-bold"
    >
      {{ $t("home.use.warning[0]") }}<br />
      {{ $t("home.use.warning[1]") }}<br />
      {{ $t("home.use.warning[2]") }}
    </p>

    <h2>## {{ $t("home.selfHost.title") }}</h2>
    <dl>
      <dt>{{ $t("home.selfHost.info") }}</dt>
      <dd>
        <a href="https://vitejs.dev/" target="_blank"> vite </a>
        <a href="https://vuejs.org/" target="_blank"> vue </a>
        <a href="https://router.vuejs.org/" target="_blank"> vue-router </a>
        <a href="https://pinia.vuejs.org/" target="_blank"> pinia </a>
        <a href="https://sass-lang.com/" target="_blank"> scss </a>
        <a href="https://uno.antfu.me/" target="_blank"> unocss </a>
        <a href="https://iconify.design/" target="_blank"> iconify </a>
        <a href="https://remixicon.com/" target="_blank"> remixicon </a>
        <a href="http://grsmto.github.io/simplebar/" target="_blank">
          simplebar
        </a>
      </dd>
    </dl>
    <pre>
<span># clone</span>
git clone https://github.com/NMTuan/bitwarden_data.git
cd bitwarden_data

<span># init</span>
yarn install <span># or npm install</span>

<span># run</span>
yarn dev <span># or npm run dev</span></pre>

    <h2>## {{ $t("home.sponsors.title") }}</h2>
    <p>
      {{ $t("home.sponsors.info") }}
      <a href="https://github.com/NMTuan/bitwarden_data" target="_blank">
        GitHub Star
      </a>
      <a href="https://afdian.net/a/muyi_dev/plan" target="_blank">爱发电</a>
      <a href="https://paypal.me/muyi86" target="_blank">PayPal me</a>
      。
    </p>
  </div>
</template>

<script setup>
import CommonChooseFileMain from "../components/CommonChooseFileMain.vue";
</script>
<style scoped lang="scss">
li {
  @apply flex items-center text-cool-gray-400;
  &::before {
    content: " ";
    @apply i-ri-checkbox-blank-line;
    @apply mr-2 text-2xl text-cool-gray-400;
  }
  &.done {
    @apply text-cool-gray-700;
    &::before {
      content: " ";
      @apply i-ri-checkbox-line;
      @apply mr-2 text-2xl text-cool-gray-400;
    }
  }
}
</style>
