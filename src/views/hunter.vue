<template>
    <div class="hunter">
        <img src="../../static/hunter/hunter-1.jpg" alt="" class="topimg">
        <div class="page-main">
             <!-- <my-aside :list="" class="aside"></my-aside> -->
            <div class="page-content">
                <Breadcrumb>
                    <BreadcrumbItem to="/shouye">{{$t("nav.home")}}</BreadcrumbItem>
                    <BreadcrumbItem><span>{{$t("nav.hunter")}}</span></BreadcrumbItem>
                </Breadcrumb>
                <!-- 兼职猎头 -->
                <div class="page-item" id="part-time">
                     <div class="about-title border-top">
                        <p class="etitle">Part-time Headhunting</p>
                        <p class="ctitle">{{$t('hunter.part_time')}}</p>
                    </div>            
                </div>
                 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.hunter{
    @include page;
}
</style>


