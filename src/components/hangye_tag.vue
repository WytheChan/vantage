<template>
    <div class="collapse" :class="{on : isOn}" >
        <div class="collapse-item" v-for="(item,index) in classifyList" :key="index">
          <p class="collapse-title" :data-cid="item.cid" @click="_tagSlide(item.cid)" :class="{on : isSlide === item.cid}">{{item.classify}} <i class="fa fa-angle-right"></i></p>
          <div class="tag-list" :class="{on : isSlide === item.cid}">
            <span class="tag-item"  :class="{on : isActive === ''}" @click="_getAll(item.cid)">全部</span>
            <span class="tag-item"  v-for="(tag,index2) in item.tag" :key="index2" :data-tid="tag.tid" @click="_getJobInfo(item.cid,tag.tid)" :class="{on : isActive === tag.tid}">{{tag.tag}}</span>
          </div>
        </div>
    </div>
</template>
<script>
import axios from "../api/index.js";

export default {
  data() {
    return {
      isOn: false,  //定位状态
      isSlide: 7,   //折叠状态
      isActive:'',  //标签选中状态,
      isAll:'all',     //选中全部
      collapse: 0,
      tagList: []
    };
  },
  methods: {
    _scroll() {
      let self = this;
      //滚动到底部时，改变aside的定位
      window.addEventListener(
        "scroll",
        function() {
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          var collapse = document.querySelector('.collapse');
          var st = collapse.getBoundingClientRect().top || -1;
          
          // console.log(scrollTop)
          if(st<0){
            collapse.style.top = '50px'
            collapse.style.left = '3%'
            collapse.style.position = 'fixed'
          }else if(scrollTop<450){
            collapse.style.top = '43px'
            collapse.style.left = '0%'
            collapse.style.position = 'absolute'
          }
        },
        false
      );
    },
    _tagSlide(cid){   //大类的折叠
      if(this.isSlide !== cid){
        this.isSlide = cid
      }else{
        this.isSlide = ''
      }
      this._getAll(cid)
    },
    _getClassifyList(){  //获取行业大类
      this.$store.dispatch('getClassifyList')
    },
    _getJobInfo(cid,tid){  //获取对应小类标签的招聘列表

      if(this.isActive !== tid ){
        this.isActive = tid
      }else {
        this.isActive = ''
      }
      
      this.$store.dispatch('getJobList',{url:"recruit",cid,tid})

      this.$emit('getTid',cid,tid) //把cid和tid传给父组件
    },
    _getAll(cid,tid){  //点击全部
      this.isActive = ''
      this.$store.dispatch('getJobList',{url:"recruit",cid,tid})

      // this.$emit('getCid',cid,tid)  //把cid和tid传给父组件
    }
    
  },
  created() {
    // this._scroll();
    this._getClassifyList()
  
    //点击头部导航进来的默认展开显示制造业（cid = 13）,点击底部导航进来的就获取传过来的参数，展开对应的分类
    if(this.$route.params.search == 1){
      this.isSlide = ''
    }else{
      let cid = this.$route.params.cid || 7 ;
      this.isSlide = cid
      this._getAll(cid)
    }
  },
  computed:{
    classifyList(){
     return this.$store.state.classifyList
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.collapse {
  position: absolute;
  left: 0;
  top:43px;
  padding-right: 50px;
  width: 20%;
  // transition: all 0.5s;
  &.on {
    bottom: 40vh;
  }
  .collapse-item {
    position: relative;
    padding:12px 0 12px 30px;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
    &:nth-of-type(1) {
      border-top: 1px solid #e5e5e5;
    }
    .collapse-title {
      line-height: 40px;
      font-size: 14px;
      color: #676866;
      padding-right:10px;
      cursor: pointer;
      .fa {
        font-size: 25px;
        margin-top: 8px;
        float: right;
        transition: 0.3s transform;
      }
      &.on{
        .fa{
          color: $base-color;
          transform: rotate(90deg);
        }
      }
    }
    .tag-list {
      position:relative;
      top:50px;
      transition: 0.3s top;
      height: 0;
      &.on{
         height: auto;
         top:0;
      }
      .tag-item {
        display: inline-block;
        line-height: 18px;
        padding:6px 10px 6px 0px;
        font-size: 12px;
        color: #999;
        cursor: pointer;
        &.on ,
        &:hover{
          color: $base-color;
        }
      }
    }
  }
}
</style>


