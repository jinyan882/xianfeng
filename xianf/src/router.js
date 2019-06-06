import Vue from "vue";
import VueRouter from "vue-router";
import sortDetail from "./components/common/sortDetail.vue";
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {path:"/sort",component:() => import( './components/pages/sort.vue'),
         children:[{path:"sortDetail",component:sortDetail}]
       },

        {path:"/shopCar", component:() => import( './components/pages/shopCar.vue')},
        {path:"/person",component:() => import( './components/pages/person.vue')},
        {path:"/section",component:() => import( './components/common/msection.vue')},
        {
            path:'/',
            redirect :'/section'  /* 重定向时，应写一个/,不应该写多个/ */
          },
    ]
})