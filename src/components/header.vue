<template>
    <header >
        <router-link to="/">
            <img src="../../static/logo_v2.png" alt="" class="logo">
        </router-link>
        <ul class="list">
            <li>
                <a  @click="changeLang('cn')">
                   中文
                  <img src="../../static/flag-cn.png" alt="">
                </a>
            </li>
            <li>
                <a  @click="changeLang('en')">
                    English
                    <img src="../../static/flag-en.png" alt="">
                </a>
            </li>
            <li>
                <a   @click="changeLang('jp')">
                    日本語
                    <img src="../../static/flag-jp.png" alt="">
                </a>
            </li>
            <li>
                <router-link to="/about/contact">{{$t("about.contact")}}</router-link>
            </li>
            <li>
                <router-link to="/hangye">{{$t("nav.hotjob")}}</router-link>
            </li>
        </ul>
        <nav >
            <router-link to="/shouye">{{$t("nav.home")}}</router-link>
            <router-link to="/about/gk">{{$t("nav.about")}}</router-link>
            <router-link to="/service/fangan">{{$t("nav.service")}}</router-link>
            <router-link to="/plan/plan">{{$t("nav.plan")}}</router-link>
            <router-link to="/hangye">{{$t("nav.hangye")}}</router-link>
            <router-link to="/information/news">{{$t("nav.information")}}</router-link>
            <router-link to="/hunter">{{$t("nav.hunter")}}</router-link>
        </nav>
        <div class="search">
            <input type="text" v-model="search" :placeholder="$t('searchPlaceholder')" @keydown="searchJobByKey">
            <i class="fa fa-search" @click="searchJob"></i>
        </div>
    </header>
</template>
<script>
import Util from "../lib/util.js";
import axios from "../api/index.js";
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    _getLang() {
      var lang = Util.getLang();
      this.$i18n.locale = lang;
      axios
        .get("index?lang=" + lang) //把语言标识发给后台
        .then(res => {
          // console.log(res)
        });
    },
    searchJob() {
      //职位搜索
      axios.post("recruit", { search: this.search }).then(res => {
        // console.log(res);
        if (res.success === 1) {
          this.$store.commit('setJobList',res.recruit.data)
          this.$store.commit('setJobPage',res.recruit.total)
          this.$router.push({
            name: "Hangye",
            params: {
              search:1
            }
          });
        }
      });
    },
    searchJobByKey(e) {
      //职位搜索-回车键
      if (e.keyCode === 13) {
        this.searchJob()
      }
    },
    changeLang(lang) {
      //设置语言，保存起来
      Util.setLang(lang);

      //切换语言
      this.$store.commit("changeLang", lang);

      this.$i18n.locale = this.$store.state.lang;

      axios
        .get("index?lang=" + lang) //把语言标识发给后台
        .then(res => {
          console.log(res);
          location.reload();
        });
    }
  },
  computed: {},
  created() {
    this._getLang();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0 15px 5%;
  z-index: 100;
  background: #fff;
  &.on {
    nav {
      a {
        color: #fff;
      }
    }
    .search {
      border: 1px solid #fff;
      input {
        color: #fff;
      }
      // .fa{
      //     color: #fff;
      // }
    }
  }
  .router-link-active {
    color: $base-color !important;
  }
  .logo {
    display: inline-block;
    width: 120px;
    height: auto;
  }
  .list {
    position: absolute;
    right: calc(180px + 5%);
    top: 25px;
    li {
      float: left;
      padding: 0 10px;
      cursor: pointer;
      & + li {
        border-left: 1px solid #999;
      }
      a {
        display: inline-block;
        line-height: 20px;
        font-size: 12px;
        color: #999;
        img {
          float: right;
          margin: 2px 0 0 5px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  nav {
    position: absolute;
    right: 5%;
    bottom: 25px;
    a {
      margin: 0 0 0 30px;
      font-size: 14px;
      color: $font-color;
      &:hover {
        color: $base-color;
      }
    }
  }
  .search {
    position: absolute;
    right: 5%;
    top: 20px;
    width: 160px;
    height: 30px;
    border: 1px solid #999;
    input {
      width: 80%;
      height: 100%;
      font-size: 12px;
      color: $font-color;
      text-indent: 0.5em;
      &::placeholder {
        color: #999;
      }
    }
    .fa {
      font-size: 16px;
      color: #999;
      cursor: pointer;
    }
  }
}
</style>


