<template>
   <div id="mfooter">
        <router-link class="bot-k" to="/section" tag="span" active-class="bot-ki"><i class="icon01 iconfont icon-shouye-"></i><br><span>首页</span></router-link>
        <router-link class="bot-k" to="/sort" tag="span" active-class="bot-ki"><i class="icon02 iconfont icon-fenlei-"></i><br><span>闪送超市</span></router-link>
        <router-link class="bot-k" to="/shopCar" tag="span" active-class="bot-ki"><i class="icon03 iconfont icon-gouwuche-"></i><br><span>购物车</span></router-link>
        <router-link class="bot-k" to="/person" tag="span" active-class="bot-ki"><i class="icon04 iconfont icon-wode-"></i><br><span>我的</span></router-link>
   </div>

</template>
<script>


export default {
    name:"mfooter",
    data(){return {
       
    }}
}
</script>
<style lang="less" scoped>
   @import  url("../../common/css/index.less"); 
   @import  url("../../common/css/icon01/iconfont.css"); 
      #mfooter{
           .w(375);.h(57);background:#f5f5f5;position:fixed;bottom:0;
           .bot-k{
               width:25%;height:100%;font-size:@fs-l;color:#777;float:left;text-align:center;padding-top:3px;padding-bottom:2px;
               .iconfont{.h(32);font-size:@fs-xxl;.l_h(32);display:inline-block;font-weight:700}
               span{display:inline-block;font-size:@fs-s;.h(25);.l_h(25)}
           }.bot-ki{.bot-k;.iconfont{color:@bg-main}}
      }
</style>
