<template>
    <aside :class="{'on' : isOn}">
        <nav>
            <a v-for="(item,index) in titleList" :key="index" :href="item.id" @click="handler">{{item.title}}</a>
        </nav>
    </aside>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {
      titleList: this.list,
      isOn: false
    };
  },
  watch: {},
  methods: {
    handler() {
      return false;
    },
    _scroll() {
      let self = this
      //滚动到底部时，改变aside的定位
      window.addEventListener(
        "scroll",
        function() {
          var footer = document.getElementsByTagName("footer")[0];
          var t = footer.getBoundingClientRect().top;
          var h = document.documentElement.clientHeight;
          if (t < h) {
            self.isOn = true;
          } else {
            self.isOn = false;
          }
        },
        false
      );
    }
  },
  created() {
    this._scroll();
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
aside {
  position: fixed;
  left: 0;
  bottom: 100px;
  padding-left: 100px;
  width: 20%;
  transition: all 0.5s;
  &.on {
    bottom: 40vh;
  }
  nav {
    a {
      display: block;
      margin: 0 0 20px;
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      &:hover {
        color: $base-color;
      }
      &::before {
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: 1px solid $base-color;
        margin: 0 10px 3px 0;
      }
      &.on {
        color: $base-color;
        &::before {
          background: $base-color;
        }
      }
    }
  }
}
</style>


