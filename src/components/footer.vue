<template>
    <footer class="clearfix">
        <div class="clearfix">
            <dl>
            <dt>关于</dt>
            <dd>
                <router-link to="/about">公司概况</router-link>
                <router-link to="/">我们的承诺</router-link>
            </dd>
             <dd>
                <router-link to="/">企业定位</router-link>
                <router-link to="/">公司动态</router-link>
            </dd>
             <dd>
                <router-link to="/">成功案例</router-link>
                <router-link to="/">联系我们</router-link>
            </dd>
        </dl>
        <dl>
            <dt>服务项目</dt>
            <dd>
                <router-link to="/">企业定制化人才解决方案</router-link>
            </dd>
             <dd>
                <router-link to="/">候选人专家资讯服务</router-link>
            </dd>
             <dd>
                <router-link to="/">企业附加值服务定位</router-link>
            </dd>
            <dd>
                <router-link to="/">高端人才服务</router-link>
            </dd>
        </dl>
        <dl>
            <dt>精英计划</dt>
            <dd>
                <router-link to="/">精英计划</router-link>
            </dd>
             <dd>
                <router-link to="/">企业发展+新人才的需求的理解与探讨</router-link>
            </dd>
            <dd>
                <router-link to="/">企业委托流程</router-link>
            </dd>
            <dd>
                <router-link to="/">企业对人才的甄选和面试</router-link>
            </dd>
            <dd>
                <router-link to="/">人才到位的跟踪</router-link>
            </dd>
        </dl>
        <dl>
            <dt>行业领域</dt>
            <dd>
                <router-link to="/">高科技</router-link>
                <router-link to="/">零售业</router-link>
            </dd>
             <dd>
                <router-link to="/">IT/互联网</router-link>
                <router-link to="/">金融财会</router-link>
            </dd>
             <dd>
                <router-link to="/">市场传媒</router-link>
                <router-link to="/">其它</router-link>
            </dd>
             <dd>
                <router-link to="/">制造业</router-link>
            </dd>
        </dl>
         <dl>
            <dt>最新资讯</dt>
            <dd>
                <router-link to="/">公司新闻</router-link>
            </dd>
             <dd>
                <router-link to="/">公司活动</router-link>
            </dd>
            <dd>
                <router-link to="/">专业建议</router-link>
            </dd>
        </dl>
        <div class="qrcode-main">
            <img src="../assets/img/qrcode.png" alt="二维码" class="qrcode">
            <p>扫描二维码关注寰逸公众号</p>
        </div>
        </div>
        
        <p class="copyright">Copyright 2018 vantage-hy.com All Rights Reserved</p>
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
        margin-right: 10px;
        font-size: 12px;
        color: #fff;
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


