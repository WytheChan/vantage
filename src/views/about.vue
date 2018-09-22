<template>
  <div class="about ">
    <img src="../../static/about/about-1.jpg" alt="" class="topimg">
    <div class="about-main">
      <my-aside :list="titleList" :active="active"></my-aside>
      <div class="about-content">
        <Breadcrumb>
          <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
          <BreadcrumbItem><span>{{$t("nav.about")}}</span></BreadcrumbItem>
        </Breadcrumb>
        <!-- 公司概况 -->
        <div class="about-item" id="gk">
          <div class="about-title border-top">
            <p class="etitle"> Company Overview</p>
            <p class="ctitle">{{$t('about.gk')}}</p>
          </div>
          <textarea id="" disabled v-html="$t('about.gk_text')"></textarea>
        </div>
        <!-- 企业定位 -->
        <div class="about-item clearfix" id="dw">
         <img src="../../static/about/about-2.png" alt="" class="dwimg">
          <div class="about-title border-bottom">
            <p class="etitle">Corporate Positioning</p>
            <p class="ctitle">{{$t('about.dw')}}</p>
          </div>
          <p class="about-item-content">{{$t('about.dw_text')}}</p>
           
        </div>
         <!-- 专业优势 -->
        <div class="about-item clearfix" id="youshi">
          <img src="../../static/about/about-5.jpg" alt="" class="youshiimg">
          <div class="about-title border-bottom">
            <p class="etitle">Professional Advantage</p>
            <p class="ctitle">{{$t('about.youshi')}}</p>
          </div>
          <p class="about-item-content" v-html="$t('plan.plan.youshi')"></p>
        </div>
        <!-- 占位 -->
        <div style="opacity:0;"></div>
        <!-- 成功案例 -->
        <div class="about-item" id="case">
          <div class="about-title border-top">
            <p class="etitle">Success Case</p>
            <p class="ctitle">{{$t('about.case')}}</p>
          </div>
          <case-list :list="caseList"></case-list>
          <Page :total="aboutPage.page_case " :page-size="1"  show-elevator @on-change="fanye1" class="fanye"/>
        </div>
        <!-- 我们的承诺 -->
        <div class="about-item clearfix" id="promise">
          <div class="about-title border-bottom">
            <p class="etitle">Our Commitment</p>
            <p class="ctitle">{{$t('about.promise')}}</p>
          </div>
          <p class="about-item-content">{{$t('about.promise_text')}}</p>
          <img src="../../static/about/about-3.jpg" alt="">
        </div>
        <!-- 公司动态 -->
        <div class="about-item" id="dynamic">
          <div class="about-title border-top">
            <p class="etitle">Company News</p>
            <p class="ctitle">{{$t('about.dynamic')}}</p>
          </div>
          <news-list :list="dynamicList" :pv="true"></news-list>
          <Page :total="aboutPage.page_dynamic" :page-size="1"  show-elevator @on-change="fanye2" class="fanye"/>
        </div>
        <!-- 联系我们 -->
        <div class="about-item clearfix" id="contact">
          <div class="about-title border-bottom pull-left">
            <p class="etitle">Contact Us</p>
            <p class="ctitle">{{$t('about.contact')}}</p>

            <p class="contact-info">
              {{$t('about.info.name')}}：广州寰逸企业管理咨询有限公司 <br />
              {{$t('about.info.phone')}}：020-38921083<br />
              {{$t('about.info.address')}}：广州市天河区体育西路103号维多利广场B2307<br />
              {{$t('about.info.post')}}：510620<br />
              {{$t('about.info.mail')}}：info@vantage-hy.com<br />
            </p>
          </div>
          <baidu-map></baidu-map>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CaseList from "components/caselist.vue";
import NewsList from "components/newslist.vue";
import MyAside from "components/aside.vue";
import Anchors from "../common/js/anchors.js";
import axios from "../api/index.js";
import BaiduMap from "components/map.vue";

export default {
  data() {
    return {
      titleList: [
        {
          id: "#gk",
          title: this.$t("about.gk")
        },
        {
          id: "#dw",
          title: this.$t("about.dw")
        },
        {
          id: "#youshi",
          title: this.$t("plan.plan.youshi_title")
        },
        {
          id: "#case",
          title: this.$t("about.case")
        },
        {
          id: "#promise",
          title: this.$t("about.promise")
        },
        {
          id: "#dynamic",
          title: this.$t("about.dynamic")
        },
        {
          id: "#contact",
          title: this.$t("about.contact")
        }
      ],
      active: 0,
      pagenum: {
        page1: 1,
        page2: 1
      }
    };
  },
  methods: {
    _handleAnchors() {
      //选中左边对应的标题，和滚动到显示标题内容的模块
      var id = this.$route.params.id;
      var active = this.active;
      Anchors(id, active, "gk");
    },
    // fanye(current) {
    //   //current 是分页组件返回的当前页码
    //   this.$store.dispatch("getAboutData", "synopsis?page=" + current);
    // },
    //翻页
    fanye1(current) {
     
      //设置当前页码
      this.savePage(1, current);
      //获取保存页码
      if (sessionStorage.getItem("pagenum")) {
        this.pagenum = JSON.parse(sessionStorage.getItem("pagenum_about"));
      }

      this.$store.dispatch(
        "getAboutData",
        "synopsis?page2=" + this.pagenum.page2 + "&page1=" + current
      );
    },
    fanye2(current) {
  
      this.savePage(2, current);
      // 获取保存页码
      if (sessionStorage.getItem("pagenum")) {
        this.pagenum = JSON.parse(sessionStorage.getItem("pagenum_about"));
      }
      this.$store.dispatch(
        "getAboutData",
        "synopsis?page1=" + this.pagenum.page1 + "&page2=" + current
      );
    },

    //保存页码
    savePage(num, current) {
      if (sessionStorage.getItem("pagenum_about")) {
        this.pagenum = JSON.parse(sessionStorage.getItem("pagenum_about"));
      }
      switch (num) {
        case 1:
          this.pagenum["page1"] = current;
          this.pagenum["page2"] = this.pagenum.page2;
          break;
        case 2:
          this.pagenum["page1"] = this.pagenum.page1;
          this.pagenum["page2"] = current;
          break;
      }

      this.pagenum = JSON.stringify(this.pagenum);

      sessionStorage.setItem("pagenum_about", this.pagenum);
    }
  },
  created() {
    this.$store.dispatch("getAboutData", "synopsis");
  },
  mounted() {
    this._handleAnchors();
  },
  components: {
    CaseList,
    MyAside,
    NewsList,
    BaiduMap
  },
  computed: {
    caseList() {
      //案例列表
      return this.$store.state.caseList;
    },
    dynamicList() {
      return this.$store.state.dynamicList;
    },
    aboutPage() {
      //案例列表和动态列表的总页数
      return this.$store.state.aboutPage;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";

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

        &#gk,
        &:nth-of-type(2n) {
          padding: 50px;
          background: #f5f5f5;
        }

        &#dw {
          margin-bottom: 20px;
          .about-title {
            position: absolute;
            left: 0;
            top: 0;
          }

          .dwimg {
            width: auto;
            // height: 330px;
            margin-left: 50%;
            width: 50%;
            height: auto;
          }

          .about-item-content {
            position: absolute;
            left: 0%;
            top: 120px;
            font-size: 14px;
            color: $font-color;
          }
        }

        &#youshi {
          padding: 0;
          // background: none;
          margin-top: 0;
          .about-title {
            position: absolute;
            left: 55%;
            top: 30px;
          }
          .about-item-content {
            position: absolute;
            left: 55%;
            top: 150px;
            font-size: 14px;
            line-height: 20px;
            color: $font-color;
          }
          .youshiimg {
            width: 50%;
            height: auto;
          }
        }

        &#promise {
          .about-title {
            margin-left: 50px;
          }

          .about-item-content {
            position: absolute;
            right: 100px;
            top: 64px;
            font-size: 16px;
            color: $font-color;
          }

          img {
            width: 100%;
            margin: 30px 0 0;
          }
        }

        &#contact {
          padding-left: 50px;
          .about-title {
            width: 40%;
          }
          .map {
            width: 60%;
            height: 450px;
          }
        }

        .about-title {
          &.border-top {
            border-left: 5px solid $border-color;
            padding-left: 20px;
          }

          &.border-bottom {
            .etitle::after {
              content: "";
              display: block;
              width: 100px;
              height: 5px;
              margin: 20px 0 0;
              background: $border-color;
            }
          }

          .etitle {
            font-size: 14px;
            color: $base-color;
            font-weight: bold;
          }

          .ctitle {
            margin-top: 20px;
            font-size: 20px;
            font-weight: bold;
            color: $font-color;
          }
        }

        textarea {
          width: 100%;
          height: 200px;
          margin: 30px 0 0;
          line-height: 24px;
          font-size: 14px;
          color: $font-color;
          cursor: default;
        }
        .contact-info {
          margin-top: 50px;
          line-height: 2;
          font-size: 14px;
          color: #808080;
        }
        .fanye {
          text-align: center;
          font-size: 12px;
          transform: scale(0.9);
        }
      }
    }
  }
}
</style>
