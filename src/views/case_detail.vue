<template>
    <div class="detail">
        <img src="../../static/about/about-1.jpg" alt="" class="topimg">
        <div class="page-main">
            <div class="page-content">
                <img src="../../static/arrow.png" alt="" class="arrow" @click="back">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem to="/hangye">{{$t("nav.about")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("about.case_list.detail")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <div class="page-item">
                    <h3>{{item.title}}</h3>
                    
                    <ul class="detail-list">
                        <li>
                            <span> {{$t('about.case_list.position')}} : </span> 
                            <p>{{item.title}}</p>
                        </li>
                         <li>
                            <span>{{$t('about.case_list.company')}} : </span> 
                            <p>{{item.company}}</p>
                        </li>
                         <li>
                            <span>{{$t('about.case_list.yealy')}}：</span>  
                            <p>{{item.annual_salary}} </p>
                        </li>
                        <li>
                            <span>{{$t('about.case_list.cycle')}}： </span>
                            <p>{{item.cycle}}</p>
                        </li>
                        <li>
                            <span>{{$t('about.case_list.address')}}： </span>
                            <p>{{item.job_address}}</p>
                        </li>
                         <li>
                            <span>{{$t('about.case_list.number')}}：</span>  
                            <p>{{item.people_num}}</p>
                        </li>
                        <li>
                            <span>{{$t('about.case_list.detail')}}：</span>  
                            <p>{{item.content}}</p>
                        </li>
                    </ul>
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
      item: ""
    };
  },
  methods: {
    back() {
      history.back(1);
    },
    getCaseDetail() {
      //获取案例详情
      let sc_id = this.$route.params.id;
      axios.post("case_details?sc_id="+sc_id).then(res => {
        console.log(res);
        if (res.success === 1) {
          this.item = res.case_details;
        }
      });
    }
  },
  created() {
    this.getCaseDetail();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";

.detail {
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
      .detail-list {
        li {
          margin: 30px 25px 20px 25px;
          span {
            display: inline-block;
            width: 120px;
            font-size: 14px;
            font-weight: bold;
            color: $base-color;
          }
          p {
            display: inline-block;
            margin-left: 20px;
            font-size: 14px;
            color: $font-color;
          }
        }
      }
      .resume {
        display: block;
        margin: 50px auto 0;
        padding: 10px 30px;
        border: 2px solid $base-color;
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


