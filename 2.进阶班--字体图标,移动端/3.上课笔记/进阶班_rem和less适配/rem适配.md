#窗口适配
##1.媒体查询
@media (属性){
    选择器
}
例子:
<!-- 视口宽为375px的设备,html一子节为37.5px -->
@media(width:375px){
    html{
        font-size:37.5px
    }
}
##2.匹配大小
例子:

@media(width:375px){
    html{
        font-size:37.5px
    }
}
.box{
    <!-- width:68px;原来是固定尺寸不能适配 -->
    <!-- width:68/37.5rem=18.133rem; -->
    width:18.133rem;
}