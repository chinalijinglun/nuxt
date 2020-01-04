<template>
  <div class="container">
    <Header></Header>
    <nuxt />
  </div>
</template>
<script>
import Header from '~/components/header.vue'

export default {
  components: {
    Header
  },
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
  color: #000;
  font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  outline: none;
  appearance: none;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
