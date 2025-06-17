<template>
  <div>
    <div id="vue-root" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, defineProps, withDefaults } from "vue";
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
  }
});

onBeforeUnmount(() => {
  if (root && typeof root.unmount === "function") {
    root.unmount();
  }
});
</script>
