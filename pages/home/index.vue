<template>
  <a-carousel :afterChange="onChange" class="carousel">
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </a-carousel>
  <!-- <div class="nav1">
    <div>
      <h1>this first page</h1>
      <h2>{{uv}}</h2>
      <button @click="addTodo">add</button>
    </div>
  </div>-->
</template>

<script>
import Header from "~/components/header.vue";

export default {
  components: {
    Header
  },
  computed: {
    uv() {
      return this.$store.state.uv;
    }
  },
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    },
    addTodo(e) {
      this.$store.commit("addUv");
    }
  },
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "home", content: "主页面" }]
    };
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
.carousel {
  /* height: 500px;
  background: red; */
}
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 500px;
  line-height: 500px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
