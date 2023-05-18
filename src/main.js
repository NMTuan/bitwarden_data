/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-05-17 22:03:31
 * @LastEditors: Please set LastEditors
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\src\main.js
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

import "@unocss/reset/tailwind.css";
import "simplebar-vue/dist/simplebar.min.css";

import "uno.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
