# 事件对象e

## 1.定义:

也是对象,事件触发时的相关信息

~~~js
//e就是事件对象,e/event/ev
btn.addEventLisenter('click',function(e){
    console.log(e)//输出获得事件对象属性
})
~~~

## 2.事件对象e属性

![](F:\4月web前端\2022黑马-web前端学习\4.JS_WebAPI-DOM\3.上课截图\day01\事件对象属性.png)

~~~js
pageX()--相对页面
~~~

 1)键盘按下事件key

~~~js
//键盘按下keyup事件
textarea.addEventlisenter('keyup',function(e){
    //按下调佣函数
    console.log(4)
})
~~~

 2)鼠标事件

~~~js
//鼠标经过和离开
mouseover和mouseout//会有冒泡效果
mouseenter和mouseleave//没有冒泡效果
~~~

## 3.事件流

 包括:事件冒泡和时间捕获

![](F:\4月web前端\2022黑马-web前端学习\4.JS_WebAPI-DOM\3.上课截图\day01\事件流.png)

###  1)事件冒泡(从里到外依序)--默认的

  当一个元素的事件被触发时,同一事件在上级元素依序到本元素中被触发

![](F:\4月web前端\2022黑马-web前端学习\4.JS_WebAPI-DOM\3.上课截图\day01\事件冒泡.png)

###  2)事件捕获(从外到里依序)

 ~~~js
//第三个参数传入Boolean值true/false
//默认false,冒泡流触发;true,捕获流触发
DOM.addEventLisenter('事件',触发函数,是否使用捕获机制)
btn.addEventLisenter('click',function(){},true)//触发事件流事件捕获(默认3参数false,触发的是冒泡事件流)
 ~~~

###  3)阻止事件流动stopPropagation

 ~~~js
//默认有冒泡模式存在,容易导致父级元素受影响触发事件
//若仅限制在当前元素内触发事件,就要阻止事件流动stopPropagation
事件对象.stopPropagation()
 ~~~

### 4).阻止默认行为preventDefaul

   e.preventDefault()

~~~js
let a =document.querySelector('a')
a.addEventLisenter('click',funciton(e){
    e.preventDefault()//阻止默认行为(点击a跳转)     
 })
~~~

### 5).阻止事件流动--removeEventlisenter解绑事件

![](F:\4月web前端\2022黑马-web前端学习\4.JS_WebAPI\3.上课截图\day01\阻止事件流动.png)

~~~js
//举例子
let a =document.querySelector('a')
a.addEventerLisenter('click',function(e){
    e.preventDefault()//阻止a跳转页面
})
~~~



## 4.事件委托

 原理: 利用冒泡事件,给父元素添加事件,子元素通过  e.target可触发

~~~js
let ul = document.querySelector('ul')
//给父亲ul注册事件,利用冒泡原理,触发li
ul.addEventLisenter('click',function(e){
    e.target.style.color='red'//点击对应li颜色变红
})
~~~







