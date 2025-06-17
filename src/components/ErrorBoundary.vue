<template>
  <div>
    <!-- Slot utama jika tidak error -->
    <slot v-if="!hasError" />

    <!-- Fallback error UI -->
    <div
      v-else
      class="rounded-xl border border-red-300 bg-red-50 text-red-700 p-6 shadow-sm max-w-xl mx-auto mt-8 text-center"
    >
      <div class="text-4xl mb-2">❌</div>
      <h2 class="text-lg font-semibold mb-2">Oops! Something went wrong.</h2>
      <p class="text-sm text-red-600 mb-4">
        {{
          error?.message ||
          "An unexpected error occurred while loading this section."
        }}
      </p>

      <!-- Optional retry -->
      <button
        v-if="onRetry"
        @click="retry"
        class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded transition"
      >
        🔄 Retry
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured, defineProps, watchEffect } from "vue";

// Props (optional callback)
const props = defineProps<{
  onRetry?: () => void;
}>();

const hasError = ref(false);
const error = ref<Error | null>(null);

// Handle retry
const retry = () => {
  hasError.value = false;
  error.value = null;
  props.onRetry?.();
};

onErrorCaptured((err) => {
  console.error("Captured by ErrorBoundary:", err);
  hasError.value = true;
  error.value = err as Error;
  return false; // Prevent propagation
});
</script>
