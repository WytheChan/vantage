<template>
    <div class="information">
        <img src="../../static/news/news-1.jpg" alt="" class="topimg">
        <div class="page-main">
             <my-aside :list="newsList" class="aside"></my-aside>
            <div class="page-content">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("nav.information")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <!-- 公司新闻 -->
                <div class="page-item" id="news">
                     <div class="about-title border-top">
                        <p class="etitle">Company News</p>
                        <p class="ctitle">{{$t('information.news')}}</p>
                    </div>
                    <news-list :list="newsList2"></news-list>                    
                </div>
                 <!-- 公司活动 -->
                <div class="page-item" id="activity">
                     <div class="about-title border-top">
                        <p class="etitle">Company Activities</p>
                        <p class="ctitle">{{$t('information.activity')}}</p>
                    </div>
                    <news-list :list="activityList"></news-list>                    
                </div>
                 <!-- 专业建议 -->
                <div class="page-item" id="advise">
                     <div class="about-title border-top">
                        <p class="etitle">Professional Advice</p>
                        <p class="ctitle">{{$t('information.advise')}}</p>
                    </div>
                    <news-list :list="adviseList"></news-list>                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import MyAside from "components/aside.vue";
import NewsList from "components/newslist.vue";

export default {
  data() {
    return {
      newsList: [
        {
          id: "#news",
          title: this.$t('information.news')
        },
        {
          id: "#activity",
          title: this.$t('information.activity')
        },
        {
          id: "#advise",
          title: this.$t('information.advise')
        },
      ],
    };
  },
  components: {
    MyAside,
    NewsList
  },
  computed: {
    newsList2() {
      //公司新闻列表
      return this.$store.state.newsList2;
    },
    activityList() {
     //公司活动列表
      return this.$store.state.activityList;
    },
    adviseList() {
      //专业建议列表
      return this.$store.state.adviseList;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.information {
  @include page;
}
</style>


