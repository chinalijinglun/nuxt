<template>
  <div class="container">
    <Wedo></Wedo>
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Wedo from "~/components/Wedo.vue";

export default {
  components: {
    Header,
    Wedo
  },
  computed: {},
  methods: {},
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "home", content: "主页面" }]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
