<template>
    <div class="information">
        <img src="../../static/news/news-1.jpg" alt="" class="topimg">
        <div class="page-main">
             <my-aside :list="newsList" class="aside" :active="active"></my-aside>
            <div class="page-content">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("nav.information")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <!-- 公司新闻 -->
                <div class="page-item about-item" id="news">
                     <div class="about-title border-top">
                        <p class="etitle">Company News</p>
                        <p class="ctitle">{{$t('information.news')}}</p>
                    </div>
                    <news-list :list="newsList2.data" :pv="true"></news-list>    
                    <Page :total="newsList2.total" :page-size="3"  show-elevator @on-change="fanye" class="fanye"/>                
                </div>
                 <!-- 公司活动 -->
                <div class="page-item about-item" id="activity">
                     <div class="about-title border-top">
                        <p class="etitle">Company Activities</p>
                        <p class="ctitle">{{$t('information.activity')}}</p>
                    </div>
                    <activity-list :list="activityList.data" ></activity-list>
                    <Page :total="activityList.total" :page-size="3"  show-elevator @on-change="fanye" class="fanye"/>                
                </div>
                 <!-- 专业建议 -->
                <div class="page-item about-item" id="advise">
                     <div class="about-title border-top">
                        <p class="etitle">Professional Advice</p>
                        <p class="ctitle">{{$t('information.advise')}}</p>
                    </div>
                    <news-list :list="adviseList.data" :pv="true"></news-list>    
                    <Page :total="adviseList.total"  :page-size="3"  show-elevator @on-change="fanye" class="fanye"/>                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyAside from "components/aside.vue";
import NewsList from "components/newslist.vue";
import ActivityList from "components/activitylist.vue";
import Anchors from "../common/js/anchors.js";

export default {
  data() {
    return {
      newsList: [
        {
          id: "#news",
          title: this.$t("information.news")
        },
        {
          id: "#activity",
          title: this.$t("information.activity")
        },
        {
          id: "#advise",
          title: this.$t("information.advise")
        }
      ],
      active: 0
    };
  },
  components: {
    MyAside,
    NewsList,
    ActivityList
  },
  computed: {
    newsList2() {
      //公司新闻列表
      return this.$store.state.newsList;
    },
    activityList() {
      //公司活动列表
      return this.$store.state.activityList;
      return [];
    },
    adviseList() {
      //专业建议列表
      return this.$store.state.adviseList;
    }
  },
  methods: {
    _handleAnchors() {
      //选中左边对应的标题，和滚动到显示标题内容的模块
      var id = this.$route.params.id;
      var active = this.active;

      Anchors(id, active, "news");
    },
    _getInformation() {
      //请求资讯页数据
      this.$store.dispatch("getInformationData", "information");
    },
    fanye(current) {
      this.$store.dispatch("getInformationData", "information?page=" + current);
    }
  },
  mounted() {
    this._handleAnchors();
  },
  created() {
    this._getInformation();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.information {
  @include page;
  .fanye {
    text-align: center;
    font-size: 12px;
    transform: scale(0.9);
  }
 
}
</style>


