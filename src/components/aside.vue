<template>
    <aside :class="{'on' : isOn}">
        <nav>
            <a 
            v-for="(item,index) in titleList" 
            :data-index="index"
            :key="index" :href="item.id" 
            @click="handler" 
            :class="{on : active2 === index}"
            > 
            {{item.title}} </a>
        </nav>
    </aside>
</template>
<script>
export default {
  props: {
    list:{
      type:Array,
      default:[]
    },
    active:{
      type:Number,
      default:0
    }
  },
  data() {
    return {
      active2:this.active,
      titleList: this.list,
      isOn: false
    };
  },
  watch: {},
  methods: {
    handler(e) {
      this.active2 = parseInt(e.currentTarget.dataset.index)
      // this.$emit('changeActive',this.active2)
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

          var modules = document.querySelectorAll('.about-item');
          Array.from(modules).forEach(function(item,index){
            var itemTop = item.getBoundingClientRect().top;
            if(itemTop < -200){
              self.active2 = index + 1
            }else{
              if(index === 0){
                self.active2 = index
              }
            }
          })

        },
        false
      );
    },
    
  },
  mounted(){
    this._scroll();
  },
  created() {
    
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
      color: $font-color;
      position: relative;
      line-height: 1.5;
      &:hover {
        color: $base-color;
      }
      &::before {
        content: "";
        position:absolute;
        top: 8px;
        left: -15px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: 1px solid $base-color;
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


