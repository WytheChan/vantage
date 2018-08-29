<template>
    <div class="about">
        <img src="../assets/img/about-1.jpg" alt="" class="topimg">        
        <div class="about-main">
            <aside>
                 <!-- <Anchor show-ink>
                    <AnchorLink href="#gk" title="公司概况" />
                    <AnchorLink href="#dw" title="企业定位" />
                </Anchor> -->
               <nav>
                   <a href="#gk" class="on">公司概况</a>
                   <a href="#dw">企业定位</a>
                   <a href="#case">成功案例</a>
               </nav>
            </aside>
            <div class="about-content">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">首页</BreadcrumbItem>
                    <BreadcrumbItem><span>关于</span></BreadcrumbItem>
                </Breadcrumb>
                <!-- 公司概况 -->
                <div class="about-item" id="gk">
                   <div class="about-title border-top">
                       <p class="etitle"> Company Overview</p>
                       <p class="ctitle">公司概况</p>
                   </div>
                   <textarea id="" disabled v-html="gkText"></textarea>
                </div>
                <!-- 企业定位 -->
                <div class="about-item clearfix" id="dw">
                    <img src="../assets/img/about-2.jpg" alt="" class="dwimg">
                   <div class="about-title border-bottom">
                       <p class="etitle">  Corporate Positioning</p>
                       <p class="ctitle">企业定位</p>
                   </div>
                   <p class="about-item-content">寰逸HR，是HR的专业合作伙伴及候选人的职业生涯规划师。</p>
                </div>
                <!-- 成功案例 -->
                <div class="about-item" id="case">
                   <div class="about-title border-top">
                       <p class="etitle"> Success Case</p>
                       <p class="ctitle">成功案例</p>
                   </div>
                  <case-list :list="caseList"></case-list>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CaseList from "components/caselist.vue";

export default {
  data() {
    return {
      gkText: `寰逸HR，即广州寰逸企业管理咨询有限公司，是一家致力于给国内外企业与候选人提供综合性人才服务的机构，成立于2012年，与行业内多家标杆客户保持良好合作关系，服务领域包括：高科技、IT/互联网、市场传媒、制造业、零售业、金融财会等。

                        寰逸HR的定位是HR专业的合作伙伴与候选人的职业生涯规划师。通过提供一站式服务，与企业及候选人共成长。既深入、清晰了解企业需求，为企业寻找所期待的合适人选，又分析解剖候选人的优势与特性，发掘其潜力，为双方提供最佳的人才解决方案。

                        总部设在广州，业务涉及中国内地\港澳台地区及海外机会，行业内多家标杆客户都是合作伙伴，拥有丰富的客户资源和成功案例。寰逸HR，以快乐工作、耐心沟通为指引，让来自熟悉各行业的资深顾问，在活跃的氛围下施展优势，获得更多。`,
      caseList: [
      {
        title:'成功案例 创意总监 入职成功',
        time:'2018-09-09',
        content:'入职职位：创意总监 企业信息：某著名广告有限公司 岗位年薪：37万 寻猎周期：95天 上班地点：广州 入职人数：1人'
      },
      {
        title:'成功案例 创意总监 入职成功',
        time:'2018-09-09',
        content:'入职职位：创意总监 企业信息：某著名广告有限公司 岗位年薪：37万 寻猎周期：95天 上班地点：广州 入职人数：1人'
      }
      ]
    };
  },
  components: {
    CaseList
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
    aside {
      position: fixed;
      left: 0;
      top: 55vh;
      padding-left: 100px;
      width: 20%;
      nav {
        a {
          display: block;
          margin: 0 0 20px;
          font-size: 14px;
          color: #333;
          &:hover {
            color: $base-color;
          }
          &::before {
            content: "";
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: 1px solid $base-color;
            margin: 0 10px 2px 0;
          }
          &.on {
            color: $base-color;
            &::before {
              background: $base-color;
            }
          }
        }
      }
    }
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
        .about-item-content {
          position: absolute;
          left: 50%;
          top: 120px;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
}
</style>


