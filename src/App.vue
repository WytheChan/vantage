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
  components:{
    MyHeader,MyFooter
  }
};
</script>

<style lang="scss" scoped>

</style>
