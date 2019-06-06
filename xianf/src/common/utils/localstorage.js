export default{
    /* 自己封装的缓存模块，暴露的必须是对象的形式，外部调用后，可以使用该模块里的方法 */
// 为了减少网络请求，让效率更优化，一般都将第一次请求的数据缓存起来且加有效期，再次请求时可以直接请求缓存，不用频繁请求了。过了有效期再去重新请求更新的数据。

    get(key){
        // console.log("获取缓存");
         if(window.localStorage){

                let data=JSON.parse(localStorage.getItem(key));
               
                if(!data){return null}else{
                     let time2=new Date().getTime();
              let difference=time2-data.time1;
              if(difference/1000>data.time){/* console.log("超时了"); */return "outtime"}
                 else{return data.val;}}
                
         }
    },
    set(key,value,time=10){ /* 3参为过期时间 单位:秒数 */
        //  console.log("设置缓存");
          let time1=new Date().getTime();
         let tmp=JSON.stringify({val:value,time:time,time1:time1});
         window.localStorage.setItem(key,tmp);
          
    }
}
