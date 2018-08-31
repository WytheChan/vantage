<template>
    <header :class="{on : $store.state.isShouye}">
        <router-link to="/shouye">
            <img src="../assets/img/logo.png" alt="" class="logo">
        </router-link>
        <ul class="list">
            <li>
                <a  @click="changeLang('cn')">
                   中文
                  <img src="../assets/img/flag-cn.png" alt="">
                </a>
            </li>
            <li>
                <a  @click="changeLang('en')">
                    英文
                    <img src="../assets/img/flag-en.png" alt="">
                </a>
            </li>
            <li>
                <a   @click="changeLang('jp')">
                    日本語
                    <img src="../assets/img/flag-jp.png" alt="">
                </a>
            </li>
            <li>
                <router-link to="/#">{{$t("about.contact")}}</router-link>
            </li>
            <li>
                <router-link to="/#">{{$t("nav.hotjob")}}</router-link>
            </li>
        </ul>
        <nav >
            <router-link to="/shouye">{{$t("nav.home")}}</router-link>
            <router-link to="/about">{{$t("nav.about")}}</router-link>
            <router-link to="/service">{{$t("nav.service")}}</router-link>
            <router-link to="/#">{{$t("nav.plan")}}</router-link>
            <router-link to="/#">{{$t("nav.Industry")}}</router-link>
            <router-link to="/#">{{$t("nav.information")}}</router-link>
            <router-link to="/#">{{$t("nav.hunter")}}</router-link>
        </nav>
        <div class="search">
            <input type="text" v-model="search" :placeholder="$t('searchPlaceholder')" @keydown="searchJobByKey">
            <i class="fa fa-search" @click="searchJob"></i>
        </div>
    </header>
</template>
<script>
import Util from "../lib/util.js";
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    _getLang() {
      this.$i18n.locale = Util.getLang();
    },
    searchJob() {
      //职位搜索
      console.log(this.search);
    },
    searchJobByKey(e) {
      //职位搜索-回车键
      if (e.keyCode === 13) {
        console.log(this.search);
      }
    },
    changeLang(lang) {
      //设置语言，保存起来
      Util.setLang(lang);

      //切换语言
      this.$store.commit("changeLang", lang);

      this.$i18n.locale = this.$store.state.lang;
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
  &.on {
    nav {
      a {
        color: #fff;
      }
    }
    .search {
      border: 2px solid #fff;
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
    width: 220px;
    height: auto;
  }
  .list {
    position: absolute;
    right: calc(180px + 5%);
    top: 10px;
    li {
      float: left;
      padding: 0 10px;
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
    bottom: 10px;
    a {
      margin: 0 0 0 30px;
      font-size: 16px;
      color: #333;
      &:hover {
        color: $base-color;
      }
    }
  }
  .search {
    position: absolute;
    right: 5%;
    top: 5px;
    width: 160px;
    height: 30px;
    border: 2px solid #999;
    input {
      width: 80%;
      height: 100%;
      font-size: 14px;
      color: #333;
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


