<template>
  <div class="header">
    <div class="header-nav">
      <h1>
        <a href="">
          <img src="~/static/apple-touch-icon-180x180.png" alt="" />
        </a>
      </h1>
      <div class="nav">
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">案例</a></li>
          <li><a href="">关于</a></li>
          <li><a href="">空间</a></li>
          <li><a href="">联系</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background: transparent;
  width: 100%;
  height: 100%;
}
.header-nav {
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
  overflow: hidden;
}
.header-nav h1 {
  float: left;
  margin: 3px 0 0 0;
}
.header-nav h1 a img {
  width: 80px;
}
.nav {
  float: right;
}
.nav ul {
  list-style: none;
}
.nav ul li {
  float: left;
  width: 100px;
  line-height: 70px;
  margin-left: 20px;
  text-align: center;
}
</style>
