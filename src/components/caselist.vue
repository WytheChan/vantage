<template>
  <!-- <div class="case"> -->
    <ul class="case-list">
        <li class="case-item" v-for="(item,index) in list" :key="index">
            <h3 class="case-title">{{item.title}}</h3>
            <p>{{item.content}}</p>
            <router-link to="/#">了解更多 ></router-link>
            <time>{{item.time}}</time>
        </li>
      <!-- <li class="case-item">
        <h3 class="case-title">成功案例 创意总监 入职成功</h3>
        <p>入职职位：创意总监 企业信息：某著名广告有限公司 岗位年薪：37万 寻猎周期：95天 上班地点：广州 入职人数：1人</p>
        <router-link to="/#">了解更多 ></router-link>
        <time>2018-09-09</time>
      </li> -->
    </ul>
  <!-- </div> -->
</template>
<script>
export default {
    props:['list']
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";

.case-list {
  width: calc(100% + 100px);
  margin: 50px 0 0 -50px;

  .case-item {
    padding: 50px;
    border-top: 1px solid #d8d8d8;

    h3 {
      padding-left: 20px;
      border-left: 5px solid $border-color;
      font-size: 18px;
      color: #333;
    }

    p {
      margin: 20px 0 10px;
      font-size: 12px;
      color: #808080;
    }

    a {
      font-size: 12px;
      color: $base-color;
    }

    time {
      display: block;
      width: 100%;
      margin-top: 10px;
      font-size: 12px;
      color: #999;
      text-align: right;
    }
  }
}
</style>
