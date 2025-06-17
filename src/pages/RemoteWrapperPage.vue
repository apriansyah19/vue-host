<template>
  <ErrorBoundary>
    <Suspense>
      <template #default>
        <component
          :is="AsyncRemoteLoader"
          :page="page"
          :location-remote="locationRemote"
        />
      </template>

      <template #fallback>
        <div class="text-gray-500 text-center py-4">
          ⏳ Loading remote app ...
        </div>
      </template>
    </Suspense>
  </ErrorBoundary>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import ErrorBoundary from "@/components/ErrorBoundary.vue";

const props = withDefaults(
  defineProps<{
    page: string;
    type: "react" | "vue";
    locationRemote: string;
  }>(),
  {
    page: "",
  }
);

const AsyncRemoteLoader = defineAsyncComponent({
  loader: () => {
    const type = props.type;
    switch (type) {
      case "vue":
        return import("@/pages/vue/RemoteVuePage.vue");
      case "react":
        return import("@/pages/react/RemoteReactPage.vue");
      default:
        throw new Error("Invalid path!");
    }
  },
  onError(error, fail) {
    console.error("Error loading remote component:", error);
    fail(); // Stop the loading process
  },
});
</script>
