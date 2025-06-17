<template>
  <div>
    <!-- Tampilkan loading saat remote app belum dimuat -->
    <div
      v-if="loading"
      class="flex flex-col justify-center items-center h-64 space-y-4 text-cyan-400 rounded-lg"
    >
      <!-- React Logo -->
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        class="w-14 h-14 animate-react-glow"
      />

      <!-- Spinner -->
      <svg
        class="animate-spin h-8 w-8 text-cyan-400 drop-shadow-react"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-20"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
          fill="none"
        />
        <path
          class="opacity-80"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>

      <p class="text-sm text-cyan-300 tracking-wider font-mono animate-pulse">
        Loading React App...
      </p>
    </div>

    <!-- Area mount untuk remote React App -->
    <div id="react-root" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, defineProps, ref } from "vue";
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

const loading = ref(true);
let root: any = null;

onMounted(async () => {
  const loader = remoteAppMap[props.locationRemote];
  if (!loader) {
    console.error("Remote app not found:", props.locationRemote);
    return;
  }

  const { default: mount } = await loader();
  const container = document.getElementById("react-root");
  if (container) {
    root = mount(container, props.page);
    loading.value = false;
  }
});

onBeforeUnmount(() => {
  if (root && root.unmount) root.unmount();
});
</script>

<style scoped>
@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.1);
    opacity: 0.4;
  }
}
.animate-ping-slow {
  animation: ping-slow 1.6s ease-in-out infinite;
}
</style>
