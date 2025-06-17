<template>
  <div>
    <div
      v-if="loading"
      class="flex flex-col justify-center items-center h-64 space-y-4 bg-white text-green-500 rounded-lg"
    >
      <!-- Vue Logo -->
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        alt="Vue Logo"
        class="w-16 h-16 animate-vue-ping"
      />

      <!-- Spinner -->
      <svg class="animate-spin h-8 w-8 text-green-500" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>

      <p
        class="text-sm text-green-600 tracking-wider font-medium animate-pulse"
      >
        Loading Vue App...
      </p>
    </div>
    <div id="vue-root" />
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  onBeforeUnmount,
  defineProps,
  withDefaults,
  ref,
} from "vue";
import { remoteAppMap } from "@/mappings/remoteApp";

const props = withDefaults(
  defineProps<{
    page: string;
    locationRemote: string;
  }>(),
  {
    page: "",
  }
);

let root: any = null;
const loading = ref<boolean>(true);

onMounted(async () => {
  const loader = remoteAppMap[props.locationRemote];
  if (!loader) {
    console.error("Remote app not found:", props.locationRemote);
    return;
  }

  const { default: loadRemoteApp } = await loader();
  const container = document.getElementById("vue-root");
  if (container) {
    root = loadRemoteApp(container, props.page);
    loading.value = false;
  }
});

onBeforeUnmount(() => {
  if (root && typeof root.unmount === "function") {
    root.unmount();
  }
});
</script>

<style scoped>
@keyframes vue-ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-vue-ping {
  animation: vue-ping 1.6s ease-in-out infinite;
}
</style>
