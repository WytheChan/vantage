<template>
    <div class="collapse" :class="{on : isOn}">
        <div class="collapse-item" v-for="(item,index) in tagList" :key="index">
          <p class="collapse-title" @click="_tagSlide(index)" :class="{on : isSlide === index}">{{item.title}} <i class="fa fa-chevron-right"></i></p>
          <div class="tag-list" :class="{on : isSlide === index}">
            <span class="tag-item" v-for="(tag,index2) in item.tags" :key="index2">{{tag}}</span>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isOn: false,
      collapse: 0,
      isSlide:'',
      tagList: [
        {
          title: "高科技",
          tags: ["人工智能", "VR", "机器人", "VR", "机器人", "VR", "机器人", "VR", "机器人"]
        },
        {
          title: "高科技2",
          tags: ["人工智能", "VR", "机器人"]
        }
      ]
    };
  },
  methods: {
    _scroll() {
      let self = this;
      //滚动到底部时，改变aside的定位
      window.addEventListener(
        "scroll",
        function() {
          var footer = document.getElementsByTagName("footer")[0];
          var t = footer.getBoundingClientRect().top;
          var h = document.documentElement.clientHeight;
          if (t < h) {
            self.isOn = true;
          } else {
            self.isOn = false;
          }
        },
        false
      );
    },
    _tagSlide(index){
      if(this.isSlide !== index){
        this.isSlide = index
      }else{
        this.isSlide = ''
      }
    }
  },
  created() {
    this._scroll();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.collapse {
  position: fixed;
  left: 0;
  bottom: 100px;
  padding-left: 50px;
  width: 20%;
  transition: all 0.5s;
  &.on {
    bottom: 40vh;
  }
  .collapse-item {
    position: relative;
    padding-left:30px;
    border-bottom: 1px solid #999;
    overflow: hidden;
    &:nth-of-type(1) {
      border-top: 1px solid #999;
    }
    .collapse-title {
      line-height: 40px;
      font-size: 16px;
      color: #676866;
      padding-right:10px;
      cursor: pointer;
      .fa {
        margin-top: 12px;
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
      transition: 0.3s top;
      height: 0;
      &.on{
         height: auto;
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


