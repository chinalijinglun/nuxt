<template>
  <div class="container">
    <div class="wedo_work">
      <div class="title">
        <img src="https://www.58ui.com/Public/svg/fangkuai.svg" alt="" />
        <h1>我们能做的</h1>
        <img src="https://www.58ui.com/Public/svg/fangkuai.svg" alt="" />
      </div>
      <ul class="wedo_ul clearfix">
        <li>
          <a href="javascript:;">
            <i class="icon iconfont icon-pppm"></i>
            <p class="wedo-content">平面设计</p>
            <p class="wedo-english">Desgin</p>
          </a>
        </li>
        <li>
          <a href="javascript:;"
            ><i class="icon iconfont icon-ydcp"></i>
            <p class="wedo-content">平面设计</p>
            <p class="wedo-english">Desgin</p></a
          >
        </li>
        <li>
          <a href="javascript:;"
            ><i class="icon iconfont icon-wysj"></i>
            <p class="wedo-content">平面设计</p>
            <p class="wedo-english">Desgin</p></a
          >
        </li>
        <li>
          <a href="javascript:;"
            ><i class="icon iconfont icon-jhsj"></i>
            <p class="wedo-content">平面设计</p>
            <p class="wedo-english">Desgin</p></a
          >
        </li>
        <li>
          <a href="javascript:;"
            ><i class="icon iconfont icon-rjsj"></i>
            <p class="wedo-content">平面设计</p>
            <p class="wedo-english">Desgin</p></a
          >
        </li>
        <li>
          <a href="javascript:;"
            ><i class="icon iconfont icon-cpps"></i>
            <p class="wedo-content">平面设计</p>
            <p class="wedo-english">Desgin</p></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wedo_work {
  width: 1200px;
  margin: 0 auto;
  height: 500px;
}
.title {
  height: 100px;
  margin-top: 120px;
  text-align: center;
}

.title h1 {
  display: inline-block;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  margin: 0 25px 0 25px;
}
.title img {
  width: 14px;
  height: 19px;
}
.wedo_ul {
  width: $container;
  margin-left: 62px;
}
.wedo_ul li {
  width: 33%;
  margin-bottom: 62px;
  float: $float-left;
}
.wedo_ul li a {
  width: calc(100% - 62px);
  display: block;
  margin-right: 62px;
  position: relative;
  height: 260px;
  border: 1px solid #efefef;
  transition: all 0.4s;
  transform: translate3d(0, 0, 0);
  cursor: default;
}
.wedo_ul li a:hover {
  box-shadow: 0 25px 35px #ccc;
  -webkit-transform: translate3d(0, -10px, 0);
  -moz-transform: translate3d(0, -10px, 0);
  -ms-transform: translate3d(0, -10px, 0);
  transform: translate3d(0, -10px, 0);
}
.iconfont {
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  text-align: center;
  margin-top: 65px;
  margin-bottom: 48px;
  font-size: 50px;
  color: #ff0000;
}
.wedo-content {
  text-align: center;
  font-size: 15px;
  color: #666;
  font-weight: 600;
  margin-bottom: 17px;
}
.wedo-english {
  text-align: center;
  font-size: 10px;
  color: #666;
  font-weight: 600;
}
</style>
