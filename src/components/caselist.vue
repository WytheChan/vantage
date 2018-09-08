<template>
  <div class="case">
    <ul class="case-list">
        <li class="case-item" v-for="(item,index) in list" :key="index">
            <h3 class="case-title">{{item.title}}</h3>
            <p>
               入职职位：{{item.title}} &nbsp;
               企业信息：{{item.company}}  &nbsp;
               岗位年薪：{{item.annual_salary}}  &nbsp;
               寻猎周期：{{item.cycle}}  &nbsp;
               上班地点：{{item.job_address}}  &nbsp;
               入职人数：{{item.people_num}}人 &nbsp;
            </p>
            <router-link :to="`/#/${item.sc_id}`">了解更多 ></router-link>
            <time>{{item.sc_time}}</time>
        </li>
      <!-- <li class="case-item">
        <h3 class="case-title">成功案例 创意总监 入职成功</h3>
        <p>入职职位：创意总监 企业信息：某著名广告有限公司 岗位年薪：37万 寻猎周期：95天 上班地点：广州 入职人数：1人</p>
        <router-link to="/#">了解更多 ></router-link>
        <time>2018-09-09</time>
      </li> -->
    </ul>
    
  </div>
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
      color: $font-color;
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
