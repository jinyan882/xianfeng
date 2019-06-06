let mode ="dev";
let api={
    dev:{
           banner:"/api/fcj/recommend/banner",
           recommend:"/api/fcj/recommend/hot/",
           search:"/api/fcj/rank/toplist",
           singer:"/api/fcj/singer/list",
           rank:"/api/fcj/rank/toplist",
           detail:"/api/fcj/singer/songlist"
    },
    save:{
            banner:"http://47.93.206.206:80/banner",
            recommend:"http://47.93.206.206:80/login",
            search:"http://47.93.206.206:80/search",
            singer:"http://47.93.206.206:80/singer",
            rank:"http://47.93.206.206:80/rank",
            detail:"http://47.93.206.206:80/detail"
    }
}
export default api[mode];
/* 这个文件主要是做开发模式与生产模式适配用的服务器跨域转发代理问题，vue本地项目开发模式中可以用proxy转发代理的。一旦上线时就不能用vue转发代理，得后端写了，或写个原生js的服务器代理
http://47.95.207.1:3000/fcj/recommend/banner
http://47.95.207.1:3000/fcj/recommend/hot/
http://47.95.207.1:3000/fcj/rank/toplist
http://47.95.207.1:3000/fcj/singer/list
http://47.95.207.1:3000/fcj/rank/toplist
http://47.95.207.1:3000/fcj/singer/songlist


*/