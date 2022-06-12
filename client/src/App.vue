<script lang="ts">
import { mapState } from "pinia";
import { defineComponent } from "vue";
import AppStore from "./store/AppStore";
import type { BeforeInstallPromptEvent } from "./types/PWA.";

interface Data {
  pwaPromptEvent: null | BeforeInstallPromptEvent;
  pwaInstalled: boolean;
}

export default defineComponent({
  name: "App",
  data(): Data {
    return {
      pwaPromptEvent: null,
      pwaInstalled: true,
    };
  },
  computed: {
    ...mapState(AppStore, ["user"]),
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.pwaPromptEvent = e as BeforeInstallPromptEvent;
      this.pwaInstalled = false;
    });

    window.addEventListener("appinstalled", (e) => {
      e.preventDefault();
      this.pwaPromptEvent = null;
      this.pwaInstalled = true;
    });
  },
});
</script>

<template>
  <router-view />
</template>

<style lang="scss">
#app {
  @apply bg-sky-50;
  @apply max-h-full min-h-screen w-screen;
}
</style>
