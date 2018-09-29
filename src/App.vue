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
    let w = document.body.clientWidth;
    window.addEventListener("resize", resize);
    
    resize()
    //视窗大小改变
    function resize() {
      if(w<800){
        location.href = 'http://b.hj288.cn/wap/index.html'
      }else{
          // location.href = 'http://b.hj288.cn/index.php'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
