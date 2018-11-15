<template>
    <div class="hunter">
        <img src="../../static/hunter/hunter-3.png" alt="" class="topimg">
        <div class="page-main">
             <my-aside :list="hunterList" class="aside"></my-aside>
            <div class="page-content">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("nav.hunter")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <!-- 兼职猎头 -->
                <div class="page-item clearfix" id="part-time">
                    <img src="../../static/hunter/hunter-2.png" alt="">
                    <div class="page-right pull-left">
                        <div class="about-title border-top">
                            <p class="etitle">Welcome To Join Us</p>
                            <p class="ctitle">{{$t('hunter.part_time')}}</p>
                        </div>
                        <p class="page-text" v-html="$t('hunter.content')">
                            
                        </p>
                        <router-link to="/about/contact"  id="join">{{$t('hunter.join')}}</router-link>
                    </div>            
                </div>
                 
            </div>
        </div>
    </div>
</template>
<script>
import MyAside from "components/aside.vue";

export default {
  data() {
    return {
      hunterList: [
        {
          id: "#part-time",
          title: this.$t("hunter.part_time")
        }
      ],
      active: 0
    };
  },
  components: {
    MyAside
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.hunter {
  @include page;
  #part-time {
    position: relative;
    padding: 0;
    img {
      float: left;
      width: 40%;
      height: auto;
    }
    .page-right {
      width: 60%;
      padding: 50px 30px 0 50px;
      .page-text {
        margin: 50px 0 50px 30px;
        font-size: 14px;
        line-height: 25px;
        color: $font-color;
      }
      #join {
        // display: block;
        margin-left: 30px;
        padding: 10px 40px;
        border: 2px solid $base-color;
        font-size: 14px;
        font-weight: bold;
        color: $base-color;
      }
    }
  }
}
</style>


