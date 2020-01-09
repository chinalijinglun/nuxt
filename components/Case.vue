<template>
  <div class="container">
    <div class="wedo_work">
      <div class="title">
        <img src="https://www.58ui.com/Public/svg/fangkuai.svg" alt="" />
        <h1>部分案例</h1>
        <img src="https://www.58ui.com/Public/svg/fangkuai.svg" alt="" />
      </div>
      <div class="case-choose">
        <a
          :class="item.class"
          href="Javascript:;"
          v-for="(item, index) in caseTitle"
          :key="index"
        >
          {{ item.font }}
        </a>
      </div>
    </div>
    <div class="case-content">
      <a href="">{{ username }} </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      caseTitle: [
        {
          class: "graphic-design",
          font: "平面设计"
        },
        {
          class: "mobile-desgin",
          font: "移动产品设计"
        },
        {
          class: "web-desgin",
          font: "网页设计"
        },
        {
          class: "prototype-desgin",
          font: "交互原形设计"
        },
        {
          class: "software-desgin",
          font: "软件界面设计"
        },
        {
          class: "product-desgin",
          font: "产品拍摄"
        }
      ]
      // info: []
    };
  }
};
</script>

<style lang="scss" scoped>
.case-choose {
  display: table;
  overflow: hidden;
  margin: 0 auto;
  margin-bottom: 60px;
}
.case-choose a {
  float: left;
  font-size: 12px;
  line-height: 12px;
  color: #545454;
  padding: 9px 13px;
  margin: 0 15px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.5s;
}
</style>
