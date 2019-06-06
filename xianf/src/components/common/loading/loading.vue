<template>
      <div id="loading">
           <img :src="icon" alt="">
           <p>{{text}}</p>
      </div>
</template>
<script>
export default {
    name:"loading",
    data(){
        return {}
    },
    props:{ 
    icon:{default:require("./loading.gif")},text:{default:"数据加载中"}
    },
    methods:{},
    mounted(){}
}

</script>
<style lang="less" scoped>
   @import "../../../common/style/index.less";
#loading{
     .w(100);.h(100); 
         position:absolute;
    top:0;left:0;bottom:0;right:0;
    margin:auto;
    p{font-size:@fs-xs}
}
</style>
