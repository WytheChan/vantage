<template>
  <div class="about">
    <img src="../../static/plan/plan-4.png" alt="" class="topimg">
    <div class="about-main">
      <my-aside :list="titleList" class="aside" :active="active"></my-aside>
      <div class="about-content">
        <Breadcrumb>
          <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
          <BreadcrumbItem><span>{{$t("nav.plan")}}</span></BreadcrumbItem>
        </Breadcrumb>
        <!-- 计划 -->
        <div class="about-item clearfix" id="plan">
            <div class="about-title border-top pull-left">
                <p class="etitle">Training campus</p>
                <p class="ctitle">{{$t('plan.plan.title')}}</p>
            </div>
            <div class="about-right pull-left">
                <h3>{{$t('plan.plan.stitle')}} ：</h3>
                <p class="about-text">{{$t('plan.plan.content')}}</p>
                 <h3 class="stitle">{{$t('plan.plan.stitle2')}} ：</h3>
                <p class="about-text" v-html="$t('plan.plan.content2')"></p>
            </div>
        </div>
       
       <img src="../../static/plan/plan-5.png" alt="" class="topimg2">

         <!-- 精英计划列表 -->
        <!-- <div class="about-item clearfix plan-box">
          
            <ul class="plan-list">
                <li v-for="(item,index) in planList" :key="index" :id="titleList[index+1].id.slice(1)">
                   <img :src="item.icon" alt="" class="pull-left">
                    <div class="pull-left plan-item-right">
                        <div class="about-title border-bottom">
                            <p class="ctitle">{{item.title}}</p>
                        </div>
                        <h3>{{item.stitle}} :</h3>
                        <p class="about-text">{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </div> -->

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
          id: "#plan",
          title: this.$t("plan.plan.title")
        },
        // {
        //   id: "#tantao",
        //   title: this.$t("plan.plan_list.tantao.title")
        // },
        // {
        //   id: "#liucheng",
        //   title: this.$t("plan.plan_list.liucheng.title")
        // },
        // {
        //   id: "#mianshi",
        //   title: this.$t("plan.plan_list.mianshi.title")
        // },
        // {
        //   id: "#genzong",
        //   title: this.$t("plan.plan_list.genzong.title")
        // }
      ],
      planList: [],
      active:0,
    };
  },
  components: {
    MyAside
  },
  methods: {
    _getPlanList() {
      let list = this.$t("plan.plan_list");
      let arr = [];
      for (let i in list) {
        arr.push(list[i]);
      }
      this.planList = arr;
    },
    _handleAnchors(){   //选中左边对应的标题，和滚动到显示标题内容的模块
      var id = this.$route.params.id
      var active = this.active

      Anchors(id,active,'plan')
    }
  },
  computed: {},
  created() {
    this._getPlanList();
    console.log(this.planList)
  },
  mounted(){
    this._handleAnchors()
  },
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
          position: relative;
          top: 0;
          left: 0;
          width: 60%;
          h3 {
            font-size: 16px;
            font-weight: bold;
            color: $font-color;
          }
        }
        .about-text {
          margin: 10px 0 0 0;
          font-size: 14px;
          line-height: 1.5;
          color: $font-color;
        }
        .about-img {
          width: 50%;
          height: auto;
        }

        &#plan {
          padding: 50px;
          .about-title {
            width: 25%;
          }
          .stitle {
            margin-top: 50px;
          }
          .about-right{
            top: 5px;
            left: 10px;
          }
        }
        &.plan-box {
          .plan-list {
              margin: 120px 0 0;
            padding-left: 50px;
            li {
              margin: 20px 0;
              height: 150px;
              img {
                width: 120px;
                height: auto;
                margin-right: 50px;
                margin-top: 10px;
              }
              h3 {
                margin: 20px 0 0;
                font-size: 16px;
                font-weight: bold;
                color: $font-color;
                &::before {
                  content: "";
                  display: block;
                  width: 100px;
                  height: 5px;
                  margin: 0px 0 20px 0px;
                  background: $border-color;
                }
              }
              .plan-item-right{
                width: 80%;
              }
            }
          }
        }
      }

      .topimg2 {
        width: 100%;
        height: auto;
        // margin: 10px 0;
      }
    }
  }
}
</style>