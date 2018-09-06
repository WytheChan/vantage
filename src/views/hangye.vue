<template>
    <div class="hangye">
        <img src="../../static/hangye/hangye-1.jpg" alt="" class="topimg">
        <div class="page-main">
            <hangye-tag></hangye-tag>
            <div class="page-content">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("nav.hangye")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <ul class="job-list">
                    <li>
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
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import HangyeTag from 'components/hangye_tag.vue';

export default {
    components:{
        HangyeTag
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.hangye{
    @include page;
    .job-list{
        margin: 50px 0;
        li{
            position: relative;
            padding: 30px 0;
            padding-left: 50px;
            border-bottom: 1px solid #999;
            &:nth-of-type(1){
                border-top: 1px solid #999;
            }
            
            .job-introduce{
                width: 70%;
                margin: 20px 0;
                line-height: 24px;
                font-size: 14px;
                color: #999;
            }
            time{
                font-size: 12px;
                color: #c3c3c3;
            }
            .more{
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
}
</style>


