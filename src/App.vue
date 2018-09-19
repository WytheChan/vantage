<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
     <BackTop title="返回顶部"></BackTop>
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
  created() {
    
    // window.addEventListener("resize", resize);
    function resize() {
      let app = document.querySelector("#app");
      let w = document.body.clientWidth;
      let scale = w / 1920;
      app.style.widh = "scaleX(" + scale + ")";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
