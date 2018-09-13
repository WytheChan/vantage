<template>
  <div class="about">
    <img src="../../static/service/service-1.jpg" alt="" class="topimg">
    <div class="about-main">
      <my-aside :list="titleList" class="aside" :active="active"></my-aside>
      <div class="about-content">
        <Breadcrumb>
          <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
          <BreadcrumbItem><span>{{$t("nav.service")}}</span></BreadcrumbItem>
        </Breadcrumb>
        <!-- 方案 -->
        <div class="about-item clearfix" id="fangan">
          <img src="../../static/service/service-2.png" alt="" class="pull-left about-img">
          <div class="about-right pull-left">
                <div class="about-title border-top">
                    <p class="etitle">Enterprise Customized Talent Solution</p>
                    <p class="ctitle">{{$t('service.fangan')}}</p>
                </div>
                <p class="about-text">{{$t('service.fangan_text')}}</p>
          </div>
        </div>
        <!-- 咨询服务 -->
        <div class="about-item clearfix" id="zixun">
          <div class="about-title border-bottom">
            <p class="etitle">Candidate Expert Advisory Service</p>
            <p class="ctitle">{{$t('service.zixun')}}</p>
          </div>
          <p class="about-text">{{$t('service.zixun_text')}}</p>
            <ul class="zixun-list">
                <li v-for="(item,index) in zixunList" :key="index">
                    <div class="zixun-title">
                        <img :src="item.icon" alt="">
                        <span>{{item.title}}</span>
                    </div>
                    <p>{{item.content}}</p>
                </li>
                <!-- <li>
                    <div class="zixun-title">
                        <img src="../../static/service/service-icon1.png" alt="">
                        <span>{{$t('service.zixun_list.title')}}</span>
                    </div>
                    <p>{{$t('service.zixun_list.content')}}</p>
                </li> -->
            </ul>
        </div>
        <!-- 定位 -->
        <div class="about-item clearfix" id="dingwei">
          <img src="../../static/service/service-3.png" alt="" class="pull-left about-img">
          <div class="about-right pull-left">
                <div class="about-title border-top">
                    <p class="etitle">Enterprise Value-added Service Positioning</p>
                    <p class="ctitle">{{$t('service.dingwei')}}</p>
                </div>
                <p class="about-text">{{$t('service.dingwei_text')}}</p>
          </div>
        </div>
        <!-- 人才 -->
        <div class="about-item clearfix" id="rencai">
          <img src="../../static/service/service-4.png" alt="" class="pull-right about-img">
          <div class="about-right pull-left">
                <div class="about-title border-top">
                    <p class="etitle">High-end Talent Service</p>
                    <p class="ctitle">{{$t('service.rencai')}}</p>
                </div>
                <p class="about-text">{{$t('service.rencai_text')}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import MyAside from "components/aside.vue";
import Anchors from "../common/js/anchors.js";

export default {
  data() {
    return {
      titleList: [
        {
          id: "#fangan",
          title: this.$t("service.fangan")
        },
        {
          id: "#zixun",
          title: this.$t("service.zixun")
        },
        {
          id: "#dingwei",
          title: this.$t("service.dingwei")
        },
        {
          id: "#rencai",
          title: this.$t("service.rencai")
        }
      ],
      zixunList: "",
      active: 0
    };
  },
  components: {
    MyAside
  },
  methods: {
    _getZixunList() {
      let list = this.$t("service.zixun_list");
      let arr = [];
      for (let i in list) {
        arr.push(list[i]);
      }
      this.zixunList = arr;
    },
    _handleAnchors() {
      //选中左边对应的标题，和滚动到显示标题内容的模块
      var id = this.$route.params.id;
      var active = this.active;

      Anchors(id, active, "fangan");
    }
  },
  computed: {},
  created() {
    this._getZixunList();
  },
  mounted() {
    this._handleAnchors();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.aside {
  bottom: 20%;
}
.about {
  min-height: $min-height;
  padding: 100px 0 0;

  .topimg {
    width: 100%;
    height: auto;
  }

  .about-main {
    width: 90%;
    margin: 0 auto;

    .about-content {
      width: 80%;
      margin: 50px 0 50px 20%;

      .about-item {
        position: relative;
        width: 100%;
        margin: 30px 0 60px;
        &:nth-of-type(2n) {
          background: #f5f5f5;
        }

        .about-right {
          width: 50%;
          padding: 50px 50px 0 50px;
        }
        .about-text {
          margin: 30px 0 0 30px;
          font-size: 14px;
          line-height: 2;
          color: $font-color;
        }
        .about-img {
          width: 50%;
          height: auto;
        }

        &#fangan {
          .about-text {
            width: 80%;
            margin-top: 50px;
          }
        }

        &#zixun {
          padding-left: 40px;
          .about-text {
            margin-left: 0;
          }
          .zixun-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            // justify-content: flex-start;
            width: 100%;
            margin-top: 50px;
            li {
              position: relative;
              width: 30%;
              margin: 0 0 0px;
              &:nth-of-type(n+4){
                margin-top: 100px;
              }
              &:not(:nth-of-type(6))::after{
                content: "";
                position: absolute;
                top: 50%;
                right: 35px;
                width: 35px;
                height: 35px;
                background: url(../../static/service/arrow.png) no-repeat center /
                  contain;
              }
              &:nth-of-type(3)::after{
                top:122%;
                left: 25%;
                transform: rotate(90deg);
              }
              &:nth-of-type(4)::after,
              &:nth-of-type(5)::after{
                 transform: rotate(-180deg);
              }
              
              .zixun-title {
                img {
                  display: inline-block;
                }
                span {
                  position: relative;
                  bottom: 6px;
                  left: 3px;
                  font-size: 16px;
                  font-weight: bold;
                  color: $font-color;
                }
              }
              p {
                width: 180px;
                margin: 20px 0 0;
                line-height: 1.5;
                text-indent: 2em;
                font-size: 14px;
                color: #666;
              }
            }
          }
        }

        &#dingwei {
          margin-bottom: 0px;
        }

        &#rencai {
          margin-top: 10px;
          background: #f5f5f5;
        }
      }
    }
  }
}
</style>
