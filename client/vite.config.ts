import { fileURLToPath, URL } from "url";
import type { UserConfigExport } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import HtmlConfig from "vite-plugin-html-config";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import Layouts from "vite-plugin-vue-layouts";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ mode }) => {
  // Conditional stuff such as including analytic script only in production
  // use the mode variable
  // Example - if mode === production, include analytic script

  const config: UserConfigExport = defineConfig({
    build: {
      target: "es2015",
    },
    plugins: [
      vue(),
      Pages({ routeStyle: "nuxt" }),
      // Inject analytics script / meta tags into the head
      // by modifying this part
      // Reference - https://github.com/ahwgs/vite-plugin-html-config
      HtmlConfig({}),
      // Import google fonts here, https://fonts.google.com/
      // Reference - https://github.com/feat-agency/vite-plugin-webfont-dl
      ViteWebfontDownload([]),
      // Layouts like nuxt
      // Reference - https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),
      // https://vite-plugin-pwa.netlify.app/guide/
      VitePWA(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });

  return config;
};
