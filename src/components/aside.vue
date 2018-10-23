<template>
    <aside >
        <!-- <nav>
            <a 
            v-for="(item,index) in titleList" 
            :data-index="index"
            :key="index" :href="item.id" 
            @click="handler" 
            :class="{on : active2 === index}"
            > 
            {{item.title}} </a>
        </nav> -->
        <nav>
            <span 
            v-for="(item,index) in titleList" 
            :data-index="index"
            :key="index" 
            :data-id="item.id" 
            @click="handler" 
            :class="{on : active2 === index}"
            > 
            {{item.title}} </span>
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
      isOn: false,
      aside:''
    };
  },
  watch: {},
  computed:{
   
  },
  methods: {
    handler(e) {
      this.active2 = parseInt(e.currentTarget.dataset.index)
      let id = e.currentTarget.dataset.id
      document.querySelector(id).scrollIntoView()
    },
    _scroll() {
      let self = this
      //aside定位在左侧
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
          var st = this.aside.getBoundingClientRect().top || -1;
          
          if(st<0){
            this.aside.style.top = '50px'
            this.aside.style.left = '5%'
            this.aside.style.position = 'fixed'
          }else if(scrollTop<450){
             this.aside.style.top = '0px'
            this.aside.style.left = '0%'
            this.aside.style.position = 'absolute'
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
  },
  mounted(){    
    // window.addEventListener('scroll',this._scroll,false)
  },
  destroyed(){
    // window.removeEventListener('scroll',this._scroll)
  },
  created() {
    
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/base.scss";
aside {
  position: absolute;
  left: 0;
  top: 0px;
  padding-left: 50px;
  padding-right: 50px;
  width: 20%;
  // transition: all 0.2s;
  &.on {
    bottom: 40vh;
  }
  nav {
    span {
      display: block;
      margin: 0 0 20px;
      font-size: 14px;
      color: $font-color;
      position: relative;
      line-height: 1.5;
      cursor: pointer;
      white-space: nowrap;
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


