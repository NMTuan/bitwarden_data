import { createI18n } from "vue-i18n";

const files = import.meta.glob("./*.json", { eager: true });

const messages = Object.keys(files).reduce((total, item) => {
  const key = item.replace(/\.\/(.*?)\.json/gi, "$1");
  total[key] = files[item].default;
  return total;
}, {});

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
  // something vue-i18n options here ...
});

export default i18n;
