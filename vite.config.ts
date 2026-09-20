import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Passing '' as the 3rd argument loads ALL variables, not just those starting with VITE_
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": new URL(".", import.meta.url).pathname,
      },
    },
    // Example usage of your env variables inside the config:
    server: {
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173,
    },
  };
});
