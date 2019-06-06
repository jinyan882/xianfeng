<template>
   <div id="msection">
        <Banner></Banner>
        <article>
            <div class="art_bot"><li style="background-image: url(http://img01.bqstatic.com//upload/activity/2016092417285271.jpg@90Q.jpg);background-size:contain"></li><li style="background-image: url(http://img01.bqstatic.com//upload/activity/2017030919451621.jpg@90Q.jpg);background-size:contain"></li></div>
        </article>
   </div>

</template>
<script>
import Banner from "./banner";

export default {
    name:"msection",
    data(){return {
       
    }},
    components:{
        Banner
    }
}
</script>
<style lang="less" scoped>
   @import  url("../../common/css/index.less");  
      #msection{
           .w(375);.m_t(55);
           article{
               .w(375);.h(136);.m_t(12);.m_b(12);background:url("http://img01.bqstatic.com//upload/activity/201705221117303.png@90Q.png") no-repeat;background-color:#fff;
             background-size:100% 1.49rem;overflow:hidden;
             .art_bot{.w(363);.h(80);margin:1.49rem auto 0;
               li{float:left;.w(169.5);.h(68);background:pink;border:6px solid #fff}
             }
           }
      }
</style>
