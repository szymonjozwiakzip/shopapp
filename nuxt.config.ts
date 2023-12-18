// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-server-utils", "@nuxtjs/supabase"],
  supabase: {
    redirectOptions: {
      exclude: [
        "/register"
      ]
    }
  }
});
