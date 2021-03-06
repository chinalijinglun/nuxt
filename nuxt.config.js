module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~static/common.css",
    {
      src: "./assets/scss/index.scss",
      lang: "sass"
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // "@/plugins/antd-ui"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  /*
   ** Build configuration
   */
  styleResources: {
    scss: "./assets/scss/variables.scss"
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
