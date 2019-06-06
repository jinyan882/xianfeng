<template>
  <div id="app">
          <mheader></mheader>
           <router-view></router-view>
             <mfooter></mfooter>
  </div>
</template>

<script>
import mheader from "./components/common/mheader";
import msection from "./components/common/msection";
import mfooter from "./components/common/mfooter";
export default {
  name: 'app',
  components: {
     mheader,msection,mfooter
  }
}
</script>

<style lang="less" scoped>
@import url("./common/css/index.less");
        #app{  
              .w(375);.h(667);
              background:#efefef;overflow:hidden;
            
        }
</style>
