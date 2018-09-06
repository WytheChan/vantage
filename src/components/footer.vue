<template>
    <footer class="clearfix">
        <div class="clearfix">
            <dl>
            <dt>{{$t('nav.about')}}</dt>
            <dd>
                <router-link to="/about" title="公司概况">{{$t('about.gk')}}</router-link>  
                <router-link to="/about" title="我们的承诺">{{$t('about.promise')}}</router-link>
            </dd>
             <dd>
                <router-link to="/about" title="企业定位">{{$t('about.dw')}}</router-link>
                <router-link to="/about" title="公司动态">{{$t('about.dynamic')}}</router-link>
            </dd>
             <dd>
                <router-link to="/about" title="成功案例">{{$t('about.case')}}</router-link>
                <router-link to="/about/contact" title="联系我们">{{$t('about.contact')}}</router-link>
            </dd>
        </dl>
        <dl>
            <dt>{{$t('nav.service')}}</dt>
            <dd>
                <router-link to="/service" title="方案">{{$t('service.fangan')}}</router-link>
            </dd>
             <dd>
                <router-link to="/service" title="咨询服务">{{$t('service.zixun')}}</router-link>
            </dd>
             <dd>
                <router-link to="/service" title="定位">{{$t('service.dingwei')}}</router-link>
            </dd>
            <dd>
                <router-link to="/service" title="人才">{{$t('service.rencai')}}</router-link>
            </dd>
        </dl>
        <dl>
            <dt>{{$t('nav.plan')}}</dt>
            <dd>
                <router-link to="/plan">{{$t('nav.plan')}}</router-link>
            </dd>
             <dd>
                <router-link to="/plan" title="探讨">{{$t('plan.plan_list.tantao.title')}}</router-link>
            </dd>
            <dd>
                <router-link to="/plan" title="流程">{{$t('plan.plan_list.liucheng.title')}}</router-link>
            </dd>
            <dd>
                <router-link to="/plan" title="面试">{{$t('plan.plan_list.mianshi.title')}}</router-link>
            </dd>
            <dd>
                <router-link to="/plan" title="跟踪">{{$t('plan.plan_list.genzong.title')}}</router-link>
            </dd>
        </dl>
        <dl>
            <dt>{{$t('nav.hangye')}}</dt>
            <dd>
                <router-link to="/" title="高科技">{{$t('hangye.footer.gkj')}}</router-link>
                <router-link to="/" title="零售业">{{$t('hangye.footer.ls')}}</router-link>
            </dd>
             <dd>
                <router-link to="/" title="IT/互联网">{{$t('hangye.footer.it')}}</router-link>
                <router-link to="/" title="金融财会">{{$t('hangye.footer.jr')}}</router-link>
            </dd>
             <dd>
                <router-link to="/" title="市场传媒">{{$t('hangye.footer.cm')}}</router-link>
                <router-link to="/" title="其它">{{$t('hangye.footer.other')}}</router-link>
            </dd>
             <dd>
                <router-link to="/" title="制造业">{{$t('hangye.footer.zz')}}</router-link>
            </dd>
        </dl>
         <dl>
            <dt>{{$t('nav.information')}}</dt>
            <dd>
                <router-link to="/" title="公司新闻">{{$t('information.news')}}</router-link>
            </dd>
             <dd>
                <router-link to="/" title="公司活动">{{$t('information.activity')}}</router-link>
            </dd>
            <dd>
                <router-link to="/" title="专业建议">{{$t('information.advise')}}</router-link>
            </dd>
        </dl>
        <div class="qrcode-main">
            <img src="../assets/img/qrcode.png" alt="二维码" class="qrcode">
            <p>扫描二维码关注寰逸公众号</p>
        </div>
        </div>
        
        <p class="copyright">Copyright 2018 vantage-hr.com All Rights Reserved</p>
    </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
footer {
  width: 100%;
  padding: 50px 5% 10px 5%;
  background: $base-color;
  dl {
    float: left;
    color: #fff;
    & ~ dl {
      margin-left: 6%;
    }
    dt {
      font-size: 14px;
      font-weight: bold;
      color: currentColor;
      cursor: default;
    }
    dd {
      margin: 20px 0;
      a {
        display: inline-block;
        margin-right: 10px;
        font-size: 12px;
        color: #fff;
        max-width: 200px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .qrcode-main {
    float: left;
    margin-left: 6%;
    img {
      width: 120px;
      height: auto;
      margin: 0 auto 10px;
    }
    p {
      font-size: 12px;
      width: 100%;
      color: #fff;
      text-align: center;
    }
  }
  .copyright {
    width: 100%;
    margin-top: 30px;
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
}
</style>


