import en from "./i18n/en.json";
import it from "./i18n/it.json";
import am from "./i18n/am.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en,
    it,
    am
  }
}));
