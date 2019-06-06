<template>
   <div id="sortDetail">
       <li v-for="(item,index) in arr" :key="index">商品列表</li>
   </div>

</template>
<script>


export default {
    name:"sortDetail",
    data(){return {
        arr:[{},{}]
    }}
}
</script>
<style lang="less" scoped>
   @import  url("../../common/css/index.less"); 
   @import  url("../../common/css/icon01/iconfont.css"); 
      #sortDetail{
           li{
               .w(269.25);.h(96);border:1px solid #e0e0e0;padding:6px;
           }
      }
</style>