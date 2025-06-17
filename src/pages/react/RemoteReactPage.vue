<!-- src/views/RemoteReactPage.vue -->
<template>
  <div>
    <div id="react-root" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, defineProps } from "vue";
import { useRoute } from "vue-router";
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

let root: any = null; // for unmounting later (optional)

const route = useRoute();

onMounted(async () => {
  const loader = remoteAppMap[props.locationRemote];
  if (!loader) {
    console.error("Remote app not found:", props.locationRemote);
    return;
  }

  const { default: mount } = await loader();
  const container = document.getElementById("react-root");
  const page = props.page;
  if (container) {
    root = mount(container, page);
  }
});

onBeforeUnmount(() => {
  // if root unmount support is added later
  if (root && root.unmount) root.unmount();
});
</script>
