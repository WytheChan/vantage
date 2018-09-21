<template>
    <div class="job-detail">
        <img src="../../static/jobdetail.jpg" alt="" class="topimg">
        <div class="page-main">
            <div class="page-content">
                <img src="../../static/arrow.png" alt="" class="arrow" @click="back">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem to="/hangye">{{$t("nav.hangye")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("hangye.detail")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <div class="page-item">
                    <h3>{{item.position}}</h3>
                    
                    <ul class="job-detail-list">
                        <li>
                            <span>{{$t('hangye.job_list.name')}} : </span> 
                            <p>{{item.company}}</p>
                        </li>
                         <li>
                            <span>{{$t('hangye.job_list.address')}} : </span> 
                            <p>{{item.place}}</p>
                        </li>
                         <li>
                            <span>{{$t('hangye.job_list.hangye')}}：</span>  
                            <p>{{item.industry}} </p>
                        </li>
                        <li>
                            <span>{{$t('hangye.job_list.nature')}}： </span>
                            <p>{{item.enterprise_nature}}</p>
                        </li>
                        <li>
                            <span>{{$t('hangye.job_list.scale')}}： </span>
                            <p>{{item.enterprise_scale}}</p>
                        </li>
                         <li>
                            <span>{{$t('hangye.job_list.department')}}：</span>  
                            <p>{{item.department}}</p>
                        </li>
                         <li>
                            <span>{{$t('hangye.job_list.position')}} : </span> 
                            <p>{{item.position}}</p>
                        </li>
                        <li>
                            <span>{{$t('hangye.job_list.yealy')}}：</span>
                            <p>{{item.post_money}}</p>
                        </li>
                         <li>
                            <span>{{$t('hangye.job_list.duty')}} : </span> 
                            <p>{{item.duty}}</p>
                        </li>
                         <li>
                            <span>{{$t('hangye.job_list.request')}} : </span> 
                            <p>{{item.require}}</p>
                        </li>
                         <li>
                            <span>{{$t('hangye.job_list.jiafen')}} : </span> 
                            <p>{{item.special_explanation}}</p>
                        </li>
                        <li>
                            <span>{{$t('hangye.job_list.time')}} : </span> 
                            <p>{{item.release_time}}</p>
                        </li>
                    </ul>
                    <!-- 简历投递 -->
                    <router-link to="/shouye" class="resume" tag="button"> {{$t('hangye.resume')}} > </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "../api/index.js";
export default {
  data() {
    return {
      item: "",
      cid:'',
      tid:''
    };
  },
  methods: {
    back() {
    //   history.back(1);
        this.$router.push({
            name: "Hangye",
            params: {
              cid:this.cid,
              tid:this.tid
            }
          });
    },
    getJobDetail() {   //获取招聘详情
      let jid = this.$route.params.id;
      axios.post("recruit_details?jid=" + jid).then(res => {
        // console.log(res);
        if (res.success === 1) {
          this.item = res.recruit_details;
          this.cid = this.item.cid
          this.tid = this.item.tid
        }
      });
    }
  },
  created() {
    this.getJobDetail();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.job-detail {
  @include page;
  .page-content {
    position: relative;
    .page-item {
      h3 {
        padding-left: 20px;
        border-left: 5px solid $border-color;
        font-size: 18px;
        margin-bottom: 50px;
        color: $font-color;
      }
      .job-detail-list{
          li{
              margin:30px 25px 20px 25px;
              span{
                  display: inline-block;
                  width: 120px;
                  font-size: 14px;
                  font-weight: bold;
                  color: $base-color;
              }
              p{
                  display: inline-block;
                  margin-left: 20px;
                  font-size: 14px;
                  color: $font-color;
              }
          }
      }
      .resume{
          display: block;
          margin: 50px auto 0;
          padding: 10px 30px;
          border:2px solid $base-color;
          font-size: 14px;
          color: $base-color;
      }
    }
    .arrow {
      position: absolute;
      left: -150px;
      top: 100px;
      width: 50px;
      height: auto;
      cursor: pointer;
    }
  }
}
</style>


