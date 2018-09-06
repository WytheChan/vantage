<template>
    <div class="shouye">
        <section>
            <!-- <img src="../assets/img/index-1.jpg" alt=""> -->
            <strong>{{$t('shouye.about_text')}}</strong>
            <router-link tag="p" to="/about:gk"> {{$t('shouye.about')}}<i class="fa fa-angle-right"></i> </router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-2.jpg" alt=""> -->
            <strong>{{$t('shouye.service_text')}}</strong>
            <router-link tag="p" to="/service"> {{$t('shouye.service')}}<i class="fa fa-angle-right"></i></router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-3.jpg" alt=""> -->
                <strong>{{$t('shouye.plan_text')}}</strong>
            <router-link tag="p" to="/plan">{{$t('shouye.plan')}} <i class="fa fa-angle-right"></i></router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-4.jpg" alt=""> -->
                <strong>{{$t('shouye.hangye_text')}}</strong>
            <router-link tag="p" to="/hangye">{{$t('shouye.hangye')}} <i class="fa fa-angle-right"></i></router-link>
        </section>
        <section>
            <!-- <img src="../assets/img/index-5.jpg" alt=""> -->
                <strong>{{$t('shouye.hunter_text')}} </strong>
            <router-link tag="p" to="/hunter">{{$t('shouye.hunter')}} <i class="fa fa-angle-right"></i></router-link>
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
      top:60%;
      .fa {
        margin-left: 10px;
      }
    }
  }
}
</style>


