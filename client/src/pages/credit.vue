<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Credit Page",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      appName: "Vite Template",
    };
  },
});
</script>

<template>
  <div class="pt-80">
    <div class="mx-auto h-52 w-72 bg-white p-5 shadow">
      <h1 class="text-center">
        <span
          class="tracking-normal text-fuchsia-500 underline underline-offset-1 transition-colors hover:cursor-pointer hover:text-purple-600"
          @click.prevent.stop="goHome"
        >
          {{ appName }}
        </span>
        Credits
      </h1>
      <ul class="mt-5 list-inside list-disc">
        <li>Icon 1</li>
        <li>Icon 2</li>
        <li>Icon 3</li>
        <li>Icon 4</li>
      </ul>
    </div>
  </div>
</template>
