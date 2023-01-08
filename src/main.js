/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2023-01-08 17:27:54
 * @LastEditTime: 2023-01-08 18:02:56
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \bitwarden_data_de_duplication\src\main.js
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@unocss/reset/tailwind.css";
import "simplebar/dist/simplebar.min.css";
import "uno.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
