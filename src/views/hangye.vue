<template>
    <div class="hangye">
        <img src="../../static/hangye/hangye-1.png" alt="" class="topimg">
        <div class="page-main">
            <hangye-tag @getTid="getId" @getCid="getId"></hangye-tag>
            <div class="page-content">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("nav.hangye")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <div v-if="jobList.length">
                  <ul class="job-list">
                      <li v-for="(item,index) in jobList" :key="index" >
                          <h3 class="job-title item-title">{{item.position}}</h3>
                          <p class="job-introduce">
                              <span>{{$t('hangye.job_list.yealy')}}：{{item.post_money}} </span>
                              <span>{{$t('hangye.job_list.hangye')}}：{{item.industry}} </span> 
                              <span>{{$t('hangye.job_list.department')}}：{{item.department}} </span>   
                              <span>{{$t('hangye.job_list.nature')}}：{{item.enterprise_nature}} </span>
                              <span>{{$t('hangye.job_list.scale')}}：{{item.enterprise_scale}} </span>
                          </p>
                          <time>{{item.release_time}}</time>
                          <router-link class="more" :to="'/jobdetail/'+item.jid">{{$t('hangye.more')}}</router-link>
                      </li>
                      <!-- <li>
                          <h3 class="job-title item-title">培训总监</h3>
                          <p class="job-introduce">
                              <span>职务年薪：50-80万元 | </span>
                              <span>所属行业：互联网/移动互联网  |</span> 
                              <span>所属部门：集团人力资源部 | </span>   
                              <span>企业性质：私营民营企业 | </span>
                              <span>企业规模：10000人以上</span>
                          </p>
                          <time>2018-09-09</time>
                          <router-link class="more" to="/#">{{$t('hangye.more')}}</router-link>
                      </li> -->
                  </ul>
                   <Page :total="jobPage" :page-size="6" show-elevator @on-change="fanye" class="fanye"/>
                </div>
                
                <p v-else class="nodata">{{$t('hangye.notjob')}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import HangyeTag from "components/hangye_tag.vue";
import axios from "../api/index.js";

export default {
  data(){
    return {
      cid:this.$route.params.cid || 7,
      tid:this.$route.params.tid || 0
    }
  },
  components: {
    HangyeTag
  },
  methods: {
    fanye(current) {
      let cid = this.cid,
          tid = this.tid;
      this.$store.dispatch('getJobList',{url:
      "recruit?page="+current,cid,tid})
    },
    getId(cid,tid) {
      // console.log(cid,tid)
      this.cid = cid,
      this.tid = tid
    }
  },
  computed: {
    jobList() {
      return this.$store.state.jobList;
    },
    jobPage() {
      // console.log(this.$store.state.jobPage)
      return this.$store.state.jobPage;
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.hangye {
  @include page;
  .page-main{
    min-height: 600px;
  }
  .job-list {
    margin: 30px 0;
    li {
      position: relative;
      padding: 30px 0;
      padding-left: 50px;
      border-bottom: 1px solid #e5e5e5;
      &:nth-of-type(1) {
        border-top: 1px solid #e5e5e5;
      }

      .job-introduce {
        width: 80%;
        margin: 20px 0;
        line-height: 24px;
        font-size: 14px;
        color: #999;
        span{
          display:inline-block;
          margin:0 10px;
          cursor:default;
        }
      }
      time {
        font-size: 12px;
        color: #c3c3c3;
      }
      .more {
        position: absolute;
        right: 30px;
        top: calc(50% - 17px);
        padding: 10px 20px;
        background: $base-color;
        font-size: 14px;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
  .fanye {
    text-align: center;
    font-size: 12px;
    transform: scale(0.9);
  }
  .nodata {
    margin: 50px;
  }
}
</style>


