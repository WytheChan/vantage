<template>
    <div class="shouye">
        <section>
            <swiper v-if="bannerList.length>0" :options="swiperOption" ref="mySwiper" class="swiper">
              <!-- slides -->
              <swiper-slide v-for="(item,i) in bannerList" :key="i" :style="{'background-image':'url('+item.imgurl+')'}">
                
              </swiper-slide>
             
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
            <div class="box right">
              <strong v-html="$t('shouye.about_text')"></strong>
              <router-link tag="p" to="/about/gk"> {{$t('shouye.about')}}<i class="fa fa-angle-right"></i> </router-link>
            </div>
        </section>
        <section>
            <div class="box left">
                <strong v-html="$t('shouye.service_text')"></strong>
                <router-link tag="p" to="/service/fangan">{{$t('shouye.service')}} <i class="fa fa-angle-right"></i></router-link>
            </div>
        </section>
        <section>
           <div class="box right">
              <strong v-html="$t('shouye.plan_text')"></strong>
              <router-link tag="p" to="/plan/plan">{{$t('shouye.plan')}} <i class="fa fa-angle-right"></i></router-link>
            </div>
        </section>
        <section>
           <div class="box left">
              <strong v-html="$t('shouye.hangye_text')"></strong>
              <router-link tag="p" to="/hangye">{{$t('shouye.hangye')}} <i class="fa fa-angle-right"></i></router-link>
          </div>
        </section>
        <section>
            <div class="box right">
              <strong v-html="$t('shouye.hunter_text')"></strong>
              <router-link tag="p" to="/hunter">{{$t('shouye.hunter')}} <i class="fa fa-angle-right"></i></router-link>
            </div>
        </section>
    </div>
</template>
<script>
import MyHeader from "components/header.vue";
import MyFooter from "components/footer.vue";
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "../api/index.js";
// import axios from 'axios'

export default {
  data() {
    return {
      swiperOption: {
        //以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象
        // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        // notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: {
          delay:4000
        },
        // direction : 'vertical',
        // grabCursor : true,
        // setWrapperSize :true,
        // loop:true,
        // loopAdditionalSlides:0,
        autoHeight: true,
        pagination: {
          el:".swiper-pagination"
        },
        
        // paginationClickable :true,
        // prevButton:'.swiper-button-prev',//上一张
        // nextButton:'.swiper-button-next',//下一张
        // scrollbar:'.swiper-scrollbar',//滚动条
        // mousewheelControl : true,
        // observeParents:true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        // debugger: true,
      },
      bannerList:[]
    };
  },
  components: {
    MyHeader,
    MyFooter,
    swiper,
    swiperSlide
  },
  methods: {
    _inShouye() {
      //进入首页
      this.$store.commit("inShouye");
    },
    _outShouye() {
      //离开首页
      this.$store.commit("outShouye");
    },
    _getShouye() {
      //获取首页数据
      axios.post("home").then(res => {
        // console.log(res.banner)
        this.bannerList = res.banner
        // if (res.status == 1) {
        //   var info = res.index_info;
        //   var section = document.querySelectorAll("section"); //设置首页模块的背景图片
        //   for (var i = 0; i < section.length; i++) {
        //     var imgUrl = info[i].bg_img;
        //     var s = (section[
        //       i
        //     ].style.background = `url(${imgUrl}) no-repeat 0 0 / cover`);
        //   }
        // }
      });
    }
  },
  created() {
    this._inShouye();
    this._getShouye()
  },
  destroyed() {
    this._outShouye();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.shouye {
  min-height: $min-height;

  section {
    position: relative;
    width: 100%;
    min-height: $min-height;
    max-height: $min-height;
    overflow: hidden;
    &:nth-of-type(1) {
      // background: url(../../static/shouye/shouye-1.jpg) no-repeat 0 0 / cover;
    }
    &:nth-of-type(2) {
      background: url(../../static/shouye/index-2.png) no-repeat 0 0 / cover;
    }
    &:nth-of-type(3) {
      background: url(../../static/shouye/index-3.png) no-repeat 0 0 / cover;
    }
    &:nth-of-type(4) {
      background: url(../../static/shouye/index-4.png) no-repeat 0 0 / cover;
    }
    &:nth-of-type(5) {
      background: url(../../static/shouye/index-5.png) no-repeat 0 0 / cover;
    }
    // &::after {
    //   @include mask;
    // }
    .swiper {
      width: 100%;
      height: 100vh;
      z-index: 0;
      .swiper-wrapper {
        .swiper-slide {
          width: 100%;
          height: 100vh;
          background: no-repeat 0 0 /cover;
          img{
            width: 100%;
          }
          // &:nth-of-type(1) {
          //   background: url(../../static/shouye/banner-1.png) no-repeat 0 0 /cover;
          // }
          // &:nth-of-type(2) {
          //   background: url(../../static/shouye/banner-2.png) no-repeat 0 0 /
          //     cover;
          // }
          // &:nth-of-type(3) {
          //   background: url(../../static/shouye/banner-3.png) no-repeat 0 0 /
          //     cover;
          // }
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .box {
      position: absolute;
      bottom: 15%;
      width: 95%;
      &.right {
        right: 3%;
        padding-right: 30px;
        border-right: 6px solid $border-color;
        text-align: right;
        p {
          float: right;
        }
      }
      &.left {
        left: 3%;
        padding-left: 30px;
        border-left: 6px solid $border-color;
        text-align: left;
        p {
          float: left;
        }
      }
      strong {
        display: block;
        margin: -18px 0 0;
        font-size: 54px;
        line-height: 82px;
        color: #fff;
        z-index: 10;
        text-shadow: 1px 1px 25px #333;
        // white-space: nowrap;
        cursor: default;
      }
      p {
        margin-top: 30px;
        padding: 10px 45px;
        border: 2px solid #fff;
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        text-shadow: 1px 1px 25px #333;
        .fa {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>


