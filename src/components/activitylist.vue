<template>
    <div class="activity-list clearfix">
        <div class="activity-item" @click="goDetail" v-for="(item,index) in list" :key="index" :data-id="item.aid">
            <img :src="item.head_img" alt="缩略图">
            <h3 class="acivity-title">{{item.title}}</h3>
            <p class="activity-content">
              {{item.content_small ? item.content_small : '这是简介内容'}}
            </p>
            <div class="time">
                <time>{{item.article_time}}</time>
                <span>浏览量：{{item.land ? item.land : 0}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["list"],
  methods:{
    goDetail(e){
      var id=e.currentTarget.dataset.id
      this.$router.push('/detail/'+id)
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.activity-list {
  width: 100%;
  margin: 50px 0;
  border-bottom: 1px solid #e5e5e5;
  .activity-item {
    float: left;
    width: 50%;
    margin: 20px 0;
    padding: 30px 5% 0 0;
    border-top: 1px solid #e5e5e5;
    cursor: pointer;
    &:nth-of-type(2n) {
      float: right;
      padding: 30px 0 0 5%;
    }
    img {
      width: 100%;
      height: auto;
    }
    h3 {
      padding-left: 20px;
      margin: 20px 0 20px;
      border-left: 5px solid $border-color;
      font-size: 24px;
      color: $font-color;
    }
    p {
      font-size: 14px;
      color: #999;
      line-height: 20px;
      height: 36px;
      overflow: hidden;
    }
    .time {
      margin-top: 15px;
      font-size: 12px;
      color: #999;
      text-align: right;
    }
  }
}
</style>


