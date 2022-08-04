# 一.滚动事件和加载事件

## 1.滚动事件scroll

~~~js
//页面滚动
window.addEventLisenter('scroll',function(){
    调用函数
})
~~~

## 2.加载事件load

页面加载完毕后,再执行的函数

~~~js
window.addEventLisenter('load',function(){
       页面加载完毕后执行的函数
})
~~~

## 3.加载事件DOMContentLoaded

~~~js
//初始的HTML加载完毕后,此事件触发
//无需等待样式表执行完再 
document.addEventLisenter('DOMContentLoaded',function()          {
    执行函数
})
~~~

# 二.元素大小和位置

## 1.scroll家族(可读写属性)

###  1)获取元素内容的宽高(不含滚动条)

返回值不带单位,获取元素内容总大小

scrollWidth和scrollHeight

~~~js
div.addEventLisenter('scrolll',function(){
    //获取元素div滚动内容的宽度,不包含滚动条宽高
console.log(div.scrollWidth)
})
~~~

### 2)获取位置

 scrollTop滚动卷去部分的高度

 scrollLeft滚动卷曲部分左侧的宽度

~~~js
//获取滚动卷去部分的高度
let scrollTop=document.documentElement.scrollTop

~~~

## 2.offset家族(只读属性)

### 1)获取元素自身宽高

包括:自身宽高,padding,border

### 2)获取位置

获取距离定位父级的距离

![](F:\4月web前端\2022黑马-web前端学习\4.JS_WebAPI-DOM\3.上课截图\day01\offset家族(偏移量).png)

## 3.client家族(只读属性)

### 1)获取元素内容(可见区域大小)

###  2)获取位置

![](F:\4月web前端\2022黑马-web前端学习\4.JS_WebAPI-DOM\3.上课截图\day01\client家族.png)

### 3)resize事件(检测屏幕宽度变化)

~~~js
window.addEventLisenter('resize',function(){
    //执行代码
})
~~~

