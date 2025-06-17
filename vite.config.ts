import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import federation from "@originjs/vite-plugin-federation";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  // Load semua variabel env yang sesuai dengan mode
  const env = loadEnv(mode, process.cwd());
  console.log("env ", env);

  return {
    plugins: [
      vue(),
      federation({
        name: "host-app",
        remotes: {
          vueApp: env.VITE_REMOTE_VUE_APP + "/assets/remoteEntry.js",
          reactApp: env.VITE_REMOTE_REACT_APP + "/assets/remoteEntry.js",
        },
        shared: ["vue", "vue-router"],
      }),
    ],
    build: {
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    server: {
      port: 9091,
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  };
});
