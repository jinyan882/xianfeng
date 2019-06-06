let path=require("path");
function resolve(dir){
    return path.join(__dirname,dir);
}


module.exports = {
    devServer: {
        port:8888,
      proxy: {
        '/api': {
          target: 'http://47.95.207.1:3000',
          changeOrigin: true,
          pathRewrite:{
              "^/api":""
          }
        }
        
      }
    },
    chainWebpack:()=>{
        
    }
  }