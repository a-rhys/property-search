import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  css: ["~/assets/src/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

});
