<template>
  <div class="about">
    <img src="../assets/img/about-1.jpg" alt="" class="topimg">
    <div class="about-main">
      <my-aside :list="titleList"></my-aside>
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
          <textarea id="" disabled v-html="gkText"></textarea>
        </div>
        <!-- 企业定位 -->
        <div class="about-item clearfix" id="dw">
          <img src="../assets/img/about-2.jpg" alt="" class="dwimg">
          <div class="about-title border-bottom">
            <p class="etitle">Corporate Positioning</p>
            <p class="ctitle">{{$t('about.dw')}}</p>
          </div>
          <p class="about-item-content">寰逸HR，是HR的专业合作伙伴及候选人的职业生涯规划师。</p>
        </div>
        <!-- 成功案例 -->
        <div class="about-item" id="case">
          <div class="about-title border-top">
            <p class="etitle">Success Case</p>
            <p class="ctitle">{{$t('about.case')}}</p>
          </div>
          <case-list :list="caseList"></case-list>
        </div>
        <!-- 我们的承诺 -->
        <div class="about-item clearfix" id="promise">
          <div class="about-title border-bottom">
            <p class="etitle">Our Commitment</p>
            <p class="ctitle">{{$t('about.promise')}}</p>
          </div>
          <p class="about-item-content">快速的解决方案 | 品质保证的服务 | 时刻与您共成长</p>
          <img src="../assets/img/about-3.jpg" alt="">
        </div>
        <!-- 公司动态 -->
        <div class="about-item" id="dynamic">
          <div class="about-title border-top">
            <p class="etitle">Company News</p>
            <p class="ctitle">{{$t('about.dynamic')}}</p>
          </div>
          <news-list :list="newsList"></news-list>
        </div>
        <!-- 联系我们 -->
        <div class="about-item clearfix" id="contact">
          <div class="about-title border-bottom pull-left">
            <p class="etitle">Contact Us</p>
            <p class="ctitle">{{$t('about.contact')}}</p>

            <p class="contact-info">
              公司名称：广州寰逸企业管理咨询有限公司 <br />
              电话：020-38921083<br />
              地址：广州市天河区体育西路103号维多利广场B2307<br />
              邮编：510620<br />
              电子邮箱：info@vantage-hy.com<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CaseList from "components/caselist.vue";
import NewsList from "components/newslist.vue";
import MyAside from "components/aside.vue";

export default {
  data() {
    return {
      gkText: `寰逸HR，即广州寰逸企业管理咨询有限公司，是一家致力于给国内外企业与候选人提供综合性人才服务的机构，成立于2012年，与行业内多家标杆客户保持良好合作关系，服务领域包括：高科技、IT/互联网、市场传媒、制造业、零售业、金融财会等。

              寰逸HR的定位是HR专业的合作伙伴与候选人的职业生涯规划师。通过提供一站式服务，与企业及候选人共成长。既深入、清晰了解企业需求，为企业寻找所期待的合适人选，又分析解剖候选人的优势与特性，发掘其潜力，为双方提供最佳的人才解决方案。

              总部设在广州，业务涉及中国内地\港澳台地区及海外机会，行业内多家标杆客户都是合作伙伴，拥有丰富的客户资源和成功案例。寰逸HR，以快乐工作、耐心沟通为指引，让来自熟悉各行业的资深顾问，在活跃的氛围下施展优势，获得更多。`,
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
      ]
    };
  },
  components: {
    CaseList,
    MyAside,
    NewsList
  },
  computed: {
    caseList() {
      //案例列表
      return this.$store.state.caseList;
    },
    newsList() {
      //动态列表
      return this.$store.state.newsList;
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
          .about-title {
            position: absolute;
            left: 50%;
            top: 0;
          }

          .dwimg {
            width: auto;
            height: 330px;
            max-width: 50%;
          }

          .about-item-content {
            position: absolute;
            left: 50%;
            top: 120px;
            font-size: 14px;
            color: #333;
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
            color: #333;
          }

          img {
            width: 100%;
            margin: 30px 0 0;
          }
        }

        &#contact{
          padding-left:50px;
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
            color: #333;
          }
        }

        textarea {
          width: 100%;
          height: 200px;
          margin: 30px 0 0;
          line-height: 20px;
          font-size: 14px;
          color: #333;
          cursor: default;
        }
        .contact-info{
          margin-top: 50px;
          line-height: 2;
          font-size: 14px;
          color: #808080;
        }
      }
    }
  }
}
</style>
