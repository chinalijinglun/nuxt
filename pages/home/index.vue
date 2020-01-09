<template>
  <div class="container">
    <Wedo></Wedo>
    <Case />
  </div>
</template>

<script>
import axios from "axios";

import Header from "~/components/header.vue";
import Wedo from "~/components/Wedo.vue";
import Case from "~/components/Case.vue";
export default {
  components: {
    Header,
    Wedo,
    Case
  },
  computed: {},
  methods: {},
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "home", content: "主页面" }]
    };
  },
  async asyncData() {
    let { data } = await axios.get("https://api.myjson.com/bins/mr6ma");
    console.log(data);
    return { info: data.name };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
