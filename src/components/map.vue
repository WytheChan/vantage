<template>
    <baidu-map 
    class="map" 
    ak="iRGOe92ulI8YoppUBxrMh1OoRYLXwng2" 
    :center="center" 
    :zoom="zoom" 
    @ready="initMap"
    :scroll-wheel-zoom="true" 
    >
         <bm-marker :position="center" :dragging="false" >
        </bm-marker>    
    </baidu-map>    
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker.vue";

export default {
  data() {
    return {
      center: {
        //经纬度
        lng: 0,
        lat: 0
      },
      zoom: 15 //缩放级别
    };
  },
  methods: {
    initMap({ Bmap, map }) {
      //初始化地图

      this.center.lng = 113.327405;
      this.center.lat = 23.140822;
      this.zoom = 20;
    }
  },
  components: {
    BaiduMap,
    BmMarker
  }
};
</script>
<style lang="scss" scoped>
.map {
  float: right;
  width: 60%;
  height: 450px;
}
</style>


