<template>
<div class="swiper-container swiper">
    <div class="swiper-wrapper">
        
        <div class="swiper-slide" v-for="(item,index) in arr" :key="index"><img :src="item.picUrl" alt=""></div>
       
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
 import Swiper from "swiper";
export default {
    name:"banner",
    data(){
        return {arr:[{picUrl:"http://img01.bqstatic.com//upload/activity/2019060309183837.png@90Q.png"},{picUrl:"http://img01.bqstatic.com//upload/activity/2019052211253816.png@90Q.png"},{picUrl:"http://img01.bqstatic.com//upload/activity/2019052211253816.png@90Q.png"}]}
    },
    mounted(){
        this.swiper();
    },
    created(){
       /*   Axios.get(API.banner)
        .then((res)=>{
            // console.log(res.slider)
            
            this.arr=res.slider;  
            this.$nextTick(()=>{this.swiper()})       
        }).catch((err)=>{console.log(err)}) */
    },
    methods:{
        swiper(){new Swiper(".swiper-container",{loop:true,autoplay: {
    delay: 500},
        pagination: {
      el: '.swiper-pagination',
    }})}
    }
}
</script>
<style lang="less" scoped>
    @import "../../../node_modules/swiper/dist/css/swiper.min.css";
    @import "../../common/css/index.less";
  .swiper-container{
      .w(375);.h(150);
      .swiper-slide{width:100%;height:100%;img{width:100%;height:100%}};
       background:red; 
  }
</style>