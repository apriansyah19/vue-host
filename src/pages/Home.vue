<template>
  <div class="min-h-screen bg-white text-gray-800">
    <!-- Hero -->
    <section
      class="px-6 py-20 text-center bg-gradient-to-br from-purple-100 to-indigo-50"
    >
      <!-- Teks penanda host -->
      <p
        class="text-sm md:text-base text-indigo-500 font-medium mb-2 animate-fade-in"
      >
        🚀 Ini adalah aplikasi host berbasis <strong>Vue 3</strong> +
        <strong>Vite</strong>
      </p>

      <h1
        class="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4 animate-fade-in"
      >
        Power Up Your Apps with TanStack Query ⚡
      </h1>
      <p
        class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in"
      >
        TanStack Query adalah solusi manajemen data asinkron yang efisien untuk
        berbagai framework modern. Fokus pada UI, bukan fetching!
      </p>
    </section>

    <!-- CTA Buttons -->
    <section class="px-6 py-16 bg-white">
      <div class="max-w-5xl mx-auto text-center mb-10">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">
          Pilih Framework Anda
        </h2>
        <p class="text-gray-600">
          Implementasi TanStack Query tersedia untuk berbagai ekosistem modern.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        <!-- React Button -->
        <div
          class="cursor-pointer bg-blue-100 hover:bg-blue-200 transition p-6 rounded-xl flex flex-col items-center shadow group transform hover:scale-105 duration-300"
          @click="() => router.push('/with-react-query')"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            class="w-16 h-16 mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 class="text-xl font-semibold text-blue-800 mb-1">
            React + TanStack Query
          </h3>
          <p class="text-sm text-gray-600">
            Integrasi sempurna dengan React Query.
          </p>
        </div>

        <!-- React Infinite Scroll -->

        <div
          class="cursor-pointer bg-blue-100 hover:bg-blue-200 transition p-6 rounded-xl flex flex-col items-center shadow group transform hover:scale-105 duration-300"
          @click="() => router.push('/react-infinite-scroll')"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            class="w-16 h-16 mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 class="text-xl font-semibold text-blue-800 mb-1">
            React + Infinite Scroll
          </h3>
          <p class="text-sm text-gray-600">
            Fetch otomatis saat scroll dengan TanStack Query.
          </p>
        </div>

        <!-- Without TanStack (React) -->
        <div
          class="cursor-pointer bg-blue-50 hover:bg-blue-100 transition p-6 rounded-xl flex flex-col items-center shadow group transform hover:scale-105 duration-300"
          @click="() => router.push('/without-react-query')"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            class="w-16 h-16 mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 class="text-xl font-semibold text-blue-800 mb-1">
            React Tanpa TanStack
          </h3>
          <p class="text-sm text-gray-600">
            Lihat cara manual mengelola fetching & state di React.
          </p>
        </div>

        <!-- Vue Button -->

        <div
          class="cursor-pointer bg-green-100 hover:bg-green-200 transition p-6 rounded-xl flex flex-col items-center shadow group transform hover:scale-105 duration-300"
          @click="() => router.push('/with-tanstack/axios')"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            alt="Vue Logo"
            class="w-16 h-16 mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 class="text-xl font-semibold text-green-800 mb-1">
            Vue + TanStack Query
          </h3>
          <p class="text-sm text-gray-600">
            Integrasi sempurna dengan Vue Query.
          </p>
        </div>

        <!-- Without TanStack -->
        <div
          class="cursor-pointer bg-green-50 hover:bg-green-100 transition p-6 rounded-xl flex flex-col items-center shadow group transform hover:scale-105 duration-300"
          @click="() => router.push('/without-tanstack/axios')"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            alt="Vue Logo"
            class="w-16 h-16 mb-4 group-hover:scale-110 transition-transform"
          />
          <h3 class="text-xl font-semibold text-green-800 mb-1">
            Vue Tanpa TanStack
          </h3>
          <p class="text-sm text-gray-600">
            Lihat cara manual mengelola fetching & state di Vue.
          </p>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="px-6 py-20 bg-gray-50">
      <div class="max-w-5xl mx-auto text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          Kenapa TanStack Query?
        </h2>
        <p class="text-gray-600">
          Beberapa alasan kenapa TanStack Query jadi pilihan utama untuk
          pengelolaan data di berbagai framework modern.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">🎯 Declarative</h3>
          <p class="text-gray-600">
            Cukup definisikan query dan biarkan TanStack mengatur segalanya di
            belakang layar.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">♻️ Auto Refetch</h3>
          <p class="text-gray-600">
            Data akan otomatis di-refresh ketika window aktif atau kondisi
            tertentu terpenuhi.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">🧠 Smart Caching</h3>
          <p class="text-gray-600">
            TanStack menyimpan data sementara sehingga meningkatkan performa dan
            UX.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-indigo-700 py-16 text-white text-center">
      <h2 class="text-3xl font-bold mb-4">Siap menggunakan TanStack Query?</h2>
      <p class="mb-6 text-lg">
        Integrasi mudah, fleksibel, dan cocok untuk semua jenis aplikasi — baik
        Vue, React, maupun lainnya.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
