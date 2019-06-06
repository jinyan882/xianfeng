<template>
   <div id="mheader">
        需要定位 ▷<span class="search"></span>
   </div>
</template>
<script>
export default {
    
}
</script>
 <style lang="less" scoped>
   @import  url("../../common/css/index.less");  
    #mheader{
        .w(375);
        .h(55);
        .l_h(55);
        background:@bg-main;
        text-align:center;
        color:#333;
         font-size:@fs-m;
        font-weight: 700;overflow:hidden;
        .search{position:absolute;top:0;right:0;.w(72);.h(30);
        background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHdUExURUxpcUE3M0E4Mj8/KkE4MlVVVX8AAEI4MgAAAEE3MUI4Lz8/Pzg4OD8zM0M0NDMzM0QzM0E3MUI3MUI3MUE4MkI3MUE2MlUqKkE3MkQ7M0E3MkE3M0I3MkE3MkI4MUQ3M0E4MUI3MUE4MUM3MUI4MUI5M0I3MUE3MkI4MkE4MkA4M0I3M0I4MUE4MUE4MUI4M0E4MkI4M0U5Lj86L0I4MEE4MUI4MUQ6MUI3MkI3N0I3MkE3MkE3MUI4MkI2MEE4MUUuLkE4MUI3MkE3MUE3MUM4MUI4MUA2M0E3MkM4MkE3MkA3M0E3MkE4MkE4MkE4MkE4MD83L0E4MUI4MkE2MUI4MkE4MkE4M0E3MkY0NEA3MkI4MT85NEE5MUhIJEI4M0E3MUE3MUI3MkE4MkI3MTo6OkM5NEI2MEE3MkI4MkE3MUM6MUM4MD8/L0E5MUE2M0E5MEQ3MEE4MkE2MkI3MT8/P0A3M0E4MkE3MkE3Mj82MkI4MUM5MkI3MkI3MkI4MUQ3MUE4MUE3MkE4MkE3M0E3MkI4MkM4M0I4MUI3MUI3MUE3MUI2MkI3MUI3MUI4MkI3MUI3MUM3M0I4MUM1NUA4MEE3MkE3MUI4MkI3MkY4OEE3MUg2Nj82LUI4Mvk7IcoAAACedFJOUwBp+Qz9AwL+AfwbBAkUIgUPrvf2iPt0Bvget33bsmc87NhtcudV05yx0TtFlb7xMlY2FjBj9bka7xemM+F+KugLv6GBgEjrS7tblzfpq7Z1XiCMzF2thFplHWqLLD4HZO2PvNqKDTFU5cthOUQQH0ZZJdVCWAhu3uSJOPpM6vN2KXGT9ErGUV9oXLibPXel1IZ7QGwTP2avg8ES0g4c7kV8ugAAAdNJREFUOMuNlGVbG0EURpdkk9mNATECheJFizu0hRp1d3d3d+rurue3tsAmWZ3mfpn33uc8e212FMVuZX7lv9bzdeRXBsTYwIdOCVbdnCJv806VuWOxKrj9Mv1lMBL43PuiqQZqL7txKzsYWtqT94svXEIkA3ZM2waLo9ZYuD5D6VUbeATfBmeWzgaard8swtfmVs/FG9w0+8d84rh7h71xcSbvBU/S7jWyaxzOT+kKJ456gYEWduScFuq8t9BIbVaOck+y3fAaVhvyOyOy/a9iiaF+0CcDu5gw1BCjMnAhi2bFb/gpA8eheEb8gbD0kkLJzDkMERmnZcGIICQDo6QMNcZHGdhNpaG+8UYG7mKroT4xXwaW5hYc0tVz3tzZuLozq6s46A2mOZTTp4nHvLiSu5w3l7Ei6AG2WxoYXM4cd+6pSNw3+8t0UeTGtfbzXLH9hmKB5uAeP0I8s8Xm6lRstIYiSZUnOFJN1pDYZFr6vr7rpKa0B0KkbWRoLegD9a3DQcW/Z3vTgX/v2a3pVKqz0ep1qunZq9w/e1+36CQd1Zevr2iYhhKbd+/N9dbo46HmMhJ/eSxqHf+dDK8CSiHW1s/bcEHk6w7eFwQq3e+6lELtLwo6dyZRH5BEAAAAAElFTkSuQmCC") no-repeat 0.8rem 15px ;
         background-size:auto 0.65rem;
       font-size:@fs-xs;font-weight:400;color:#222;.p_t(25);.l_h(30)}
       position:fixed;.top(0)
    }
 </style>