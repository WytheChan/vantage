<template>
    <header :class="{on : $store.state.isShouye}">
        <router-link to="/shouye">
            <img src="../assets/img/logo.png" alt="" class="logo">
        </router-link>
        <ul class="list">
            <li>
                <a href="#">
                   中文
                  <img src="../assets/img/flag-cn.png" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    英文
                    <img src="../assets/img/flag-en.png" alt="">
                </a>
            </li>
            <li>
                <a href="#">
                    日本語
                    <img src="../assets/img/flag-jp.png" alt="">
                </a>
            </li>
            <li>
                <router-link to="/#">联系我们</router-link>
            </li>
            <li>
                <router-link to="/#">热门职位</router-link>
            </li>
        </ul>
        <nav >
            <router-link to="/shouye">首页</router-link>
            <router-link to="/about">关于</router-link>
            <router-link to="/#">服务项目</router-link>
            <router-link to="/#">精英计划</router-link>
            <router-link to="/#">行业领域</router-link>
            <router-link to="/#">最新资讯</router-link>
            <router-link to="/#">兼职猎头</router-link>
        </nav>
        <div class="search">
            <input type="text" v-model="search" placeholder="职位搜索" @keydown="searchJobByKey">
            <i class="fa fa-search" @click="searchJob"></i>
        </div>
    </header>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchJob() {
      //职位搜索
      console.log(this.search);
    },
    searchJobByKey(e) {
      //职位搜索-回车键
      if (e.keyCode === 13) {
        console.log(this.search);
      }
    }
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
    .search{
        border: 2px solid #fff;
        input{
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


