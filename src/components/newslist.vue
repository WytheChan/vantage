<template>
    <ul class="news-list">
        <li class="news-item clearfix" @click="lookNews" v-for="(item,index) in list" :key="index" :data-id="item.aid">
          <img :src="item.head_img" alt="" class="pull-left thumbnail">
          <div class="pull-left">
            <h3 class="news-title">{{item.title}}</h3>
            <p>{{item.content_small ? item.content_small : '这是简介内容'}}</p>
          </div>
          <div class="news-time">
            <time>{{item.article_time}}</time>
            <span v-if="pv">浏览量：{{item.land ? item.land : 0 }}</span>
          </div>
      </li>
      <!-- <li class="news-item clearfix" @click="lookNews">
        <img src="../assets/img/about-4.jpg" alt="" class="pull-left thumbnail">
        <div class="pull-left">
          <h3 class="news-title">不谈加薪、不谈升职，那要谈什么!</h3>
          <p>身在职场，不如意之事常有。例如工作长时间没有升职加薪，福利待遇低，领导差，在部分人眼中，简直就“罄竹难书”。而排在首位的往往是不加薪或者是加薪幅度太小。因为...</p>
        </div>
        <div class="news-time">
          <time>2018-09-09</time>
          <span>浏览量：10000</span>
        </div>
      </li> -->
    </ul>
</template>
<script>
export default {
  props:{
    list:{
      type:Array,
      default:[]
    },
    pv:{
      type:Boolean,
      default:false
    },
  },
  methods:{
    lookNews(e){
      var id=e.currentTarget.dataset.id
      this.$router.push('/detail/'+id)
    }
  },
  data(){
    return {
      id:[]
    }
  },
  mounted(){
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";

.news-list {
  width: calc(100% + 100px);
  margin: 50px 0 0 -50px;
  .news-item {
    position: relative;
    padding: 20px 50px;
    border-top: 1px solid #d8d8d8;
    cursor: pointer;
    .thumbnail{
      width:30%;
      height: auto;
    }
    .pull-left:not(img) {
      width: 65%;
      padding: 20px 0 0 50px;
      h3 {
        padding-left: 20px;
        border-left: 5px solid $border-color;
        font-size: 24px;
        // font-weight: bold;
        color: $font-color;
      }
      p {
        margin: 20px 0 10px;
        font-size: 14px;
        line-height: 2;
        color: #808080;
      }
      a {
        font-size: 12px;
        color: $base-color;
      }
    }
    .news-time {
      position: absolute;
      right: 50px;
      bottom: 20px;
      width: 100%;
      font-size: 12px;
      color: #999;
      text-align: right;
      time{
        margin-right: 20px;
      }
    }
  }
}
</style>
