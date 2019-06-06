<template>
   <div id="sort">
      
       <ul class="left">
           <li v-for="(item,index) in arr" :key="index">{{item}}</li>
       </ul>
       <ul class="right container">
           <div class="content">
             <li class="sequence">
                 <span>全部分类</span><span class="r">综合排序</span>
             </li>
            <li class="list-li" v-for="(item,index) in list" :key="index">{{index}}</li>
          </div> 
        </ul>
   </div>

</template>
<script>


export default {
    name:"sort",
    data(){return {
        arr:["热销榜","整箱购","优选水果","饮料酒水","牛奶面包","冷饮冻食","休闲零食","方便速食","粮油调味","生活用品","跑腿代购"],
        list:[{},{},{},{},{},{},{}]
    }},
    components:{
        
    }
}
</script>
<style lang="less" scoped>
   @import  url("../../common/css/index.less"); 
   @import  url("../../common/css/icon01/iconfont.css"); 
      #sort{
          width:100%;.p_t(55);.h(612);
          .left{
              .w(89);.h(599);background:#f8f8f8;float:left;
              li{.w(89);.h(48);border:1px solid #e0e0e0;border-top:none;
                font-size:@fs-s;color:#6D6D6D;text-align:center;.l_h(48)
              }
          }
          .right{
               .w(284);height:6rem;float:right;padding-left:2px;overflow:scroll;
               .content{width:100%;
              .sequence{width:100%;.h(14);border-bottom:1px solid #e0e0e0;background:#fff;
                      padding:0.453rem 0;font-size:@fs-s;span{color:#777777;.w(141);height:100%;border-right:1px solid #f5f5f5;float:left;text-align:center}.r{border:none}
                   }
                .list-li{.w(279.5);.h(96);padding:0.16rem;border-bottom:1px solid #e0e0e0;background:#fff}
         }
         }
      }
</style>