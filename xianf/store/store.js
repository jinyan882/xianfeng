import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
       playing:false,data:'',star:false
    },
    mutations:{
         togglePlay(state,data){
             /* mutation里的方法函数名中，第一个参数默认应指向全局状态state值，参数名保证与状态名state相同 ，第二个参数及其他都是传过来的外来参数。里面若不写参数，则默认的全局状态state值就传不过来，函数体就无法执行到全局状态state值。所以务必要写好默认参数*/
            state.playing=!state.playing;
            state.star=true;
            state.data=data;
            // console.log(state.data,"组件抄近路触发了该方法");
        
        
        }
    }
})