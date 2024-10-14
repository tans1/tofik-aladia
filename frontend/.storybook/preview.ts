import "../assets/css/output.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { type Preview, setup } from "@storybook/vue3";

import { type App } from "vue";

import { createPinia } from "pinia";

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#101010" },
        { name: "Light", value: "#F7F9F2" }
      ],
      default: "Dark"
    }
  }
};

export default preview;
