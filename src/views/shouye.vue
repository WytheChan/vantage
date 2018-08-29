<template>
    <div class="shouye">
        <section>
            <!-- <img src="../assets/img/index-1.jpg" alt=""> -->
            <strong>一家为企业与候选人提供综合性人才服务的机构，是HR专业的合作伙伴与候选人的职业生涯规划师。</strong>
            <router-link tag="p" to="/about">关于寰逸 <i class="fa fa-angle-right"></i> </router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-2.jpg" alt=""> -->
            <strong>通过提供一站式服务，与企业及候选人共成长。 为企业定制人才解决方案，为候选人提供专家咨询服务，以及附加值及高端人才服务。</strong>
            <router-link tag="p" to="/about">服务项目 <i class="fa fa-angle-right"></i></router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-3.jpg" alt=""> -->
                <strong>应企业发展及新人才需求的理解与探讨，依据专业委托流程，对人才进行甄选与面试，直至人才到位的入职跟踪，为企业提供精英。</strong>
            <router-link tag="p" to="/about">精英计划 <i class="fa fa-angle-right"></i></router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-4.jpg" alt=""> -->
                <strong>总部设在广州，业务涉及中国内地及港澳台地区及海外机会，服务领域包括高科技、IT/互联网、市场传媒、制造业、零售业、金融财会等。</strong>
            <router-link tag="p" to="/about">行业领域 <i class="fa fa-angle-right"></i></router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-5.jpg" alt=""> -->
                <strong> 对猎头事业感兴趣的朋友，这里有一个发挥所长的平台，在共享平台携手合作共赢，基于朋友圈精准推荐，介绍成功有惊喜谢礼。</strong>
            <router-link tag="p" to="/about">兼职猎头 <i class="fa fa-angle-right"></i></router-link>
        </section>
    </div>
</template>
<script>
import MyHeader from "components/header.vue";
import MyFooter from "components/footer.vue";

export default {
  components: {
    MyHeader,
    MyFooter
  },
  methods: {
    _inShouye() {
      this.$store.commit("inShouye");
    },
    _outShouye() {
      this.$store.commit("outShouye");
    }
  },
  created() {
    this._inShouye();
  },
  destroyed() {
    this._outShouye();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
.shouye {
  min-height: $min-height;

  section {
    position: relative;
    width: 100%;
    min-height: $min-height;
    max-height: $min-height;
    overflow: hidden;
    &:nth-of-type(1) {
      background: url(../assets/img/index-1.jpg) no-repeat 0 0 / cover;
    }
    &:nth-of-type(2) {
      background: url(../assets/img/index-2.jpg) no-repeat 0 0 / cover;
    }
    &:nth-of-type(3) {
      background: url(../assets/img/index-3.jpg) no-repeat 0 0 / cover;
    }
    &:nth-of-type(4) {
      background: url(../assets/img/index-4.jpg) no-repeat 0 0 / cover;
    }
    &:nth-of-type(5) {
      background: url(../assets/img/index-5.jpg) no-repeat 0 0 / cover;
    }
    &::after {
      @include mask;
    }
    img {
      width: 100%;
      height: 100%;
    }
    strong {
      position: absolute;
      top: 35%;
      left: 20%;
      width: 60%;
      font-size: 25px;
      line-height: 45px;
      text-align: center;
      color: #fff;
      z-index: 10;
    }
    p {
      padding: 10px 20px;
      border: 2px solid #fff;
      font-size: 16px;
      color: #fff;
      z-index: 10;
      cursor: pointer;
      @include center;
      .fa {
        margin-left: 10px;
      }
    }
  }
}
</style>


