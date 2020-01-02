<template>
  <div class="container">
    <div>
      <h1>this first page</h1>
      <h2>{{uv}}</h2>
      <button @click="addTodo">add</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    uv () {
      return this.$store.state.uv
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('addUv')
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'home', content: '主页面' }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
