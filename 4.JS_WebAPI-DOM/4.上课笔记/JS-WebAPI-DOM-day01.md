# Web API认知

## 1.作用

操作html和浏览器

## 2.分类

DOM文档对象模型 和 BOM浏览器对象模型

####  1)DOM

  (1)定义:呈现及与html或xml文档交互的API,操作网页内容

  (2)作用:

实现网页内容特效和与用户交互

####  2)BOM

# DOM介绍

## 1.DOM树

 1)定义

将html文档以树状结构直观表现出来;

描述网页内容的名词;

 2)作用:

直观体现标签之间的关系

## 2.DOM对象

####  1)定义:

浏览器根据html标签生成JS对象--所有标签属性都能在对象上找到,修改对象自动映射到标签上

####  2)获取元素(生成对象)--三种

~~~js
//1.获取一个元素
//如果元素有多个相同,只获取第一个元素
//获取多个相同元素时,只能匹配第一个
document.querySelector('css选择器')//选择器写法与css中一致
//2.获取多个元素
document.querySelectorAll('css选择器')//例如:'ul li',则获取所有ul中的li元素
//document.querySelectorAll得到的都是一个伪数组,有长度和索引号
//  没有pop() push()数组方法
//3.其他获取元素方法
 document.getElementById('#ID选择器')//获取所有此id名元素
 document.getElementByTagName('标签名')//获取页面所有一类元素
 document.getElementByClassName('.类名')//获取页面所有的类名元素
~~~

通过**<u>CSS选择器</u>**获取--与css中获取方式相同;

####  3)设置和修改元素内容的方法--三种

~~~js
//1.document.write()--方法,只能追加在body里面,能解析标签
document.write('<div>我是div</div>')
//2.元素.innerText--属性,将文本内容添加到对应标签中,不能解析标签(innerText属于属性)
//3.元素.innerHTML--属性,能解析标签
~~~

~~~html
<body>
  <p>我是段落</p>
  <script>
  //1.获取元素
   let arr =document.querySelector('p')
  //2.修改元素内容
   arr.innerText='你好啊'//p标签内容变为--你好啊
  </script>
</body>
~~~

####  4)修改和设置元素属性的方法:

   元素.属性= 新值

~~~html
//例子--属性修改
  元素.src='路径'
~~~

####  5)修改和设置样式属性的方法:

######   (1)对象.style.属性名=新值

~~~js
//1.方法: 对象.style.属性名=新值, 属性名用驼峰命名法
arr.style.width='400px'//arr对象的宽度改为400px
//方法1举例子
//获取元素body
        let bgc = document.querySelector('body')
         // 抽取随机数函数
        function getBackground(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)

        }
        //调用函数
        let background = getBackground(1, 10)
        console.log(background)
 //修元素属性 
//刷新页面,随机更换页面背景图片(属性名用驼峰命名法)
        bgc.style.backgroundImage = `url(./5.images/desktop_${background}.jpg) `//反引号
~~~

######     (2)操作类名方法:  对象.className='类名'

  好处:可以修改多个css属性样式

~~~js
//缺点会覆盖以前类名,要想保留以前类名,追加时需要保留以前类名
~~~

######   (3)classList操作类控制属性

解决className覆盖类名的问题

~~~js
//1.元素.classLIst.add('类名')--追加一个类

//2.元素.classLIst.remove('类名')--删除一个类

//3.元素.classLIst.toggle('类名')--切换一个类

//4.元素.classList.contains('类名')--看看有没有,有则返回true,否则返回false

~~~

~~~js
 // 获取元素
        let input = document.querySelector('input')
        let ul = document.querySelector('ul')
            //注册事件,focus和blur
            //1.当聚焦input时,显示下拉框ul
        input.addEventListener('focus', function() {
                ul.style.display = 'block'
          // input.style.border = '1px solid red'
         //追加类名,聚焦时,input框变化,不会覆盖之前属性
                input.classList.add('bianhua')
            })
            //2.当input失去焦点,失去下拉框ul
        input.addEventListener('blur', function() {
            ul.style.display = 'none'
// input.style.border = '1px solid black' //覆盖原有属性
          //失去焦点时,input不变,追加类名,不影响之前属性
            input.classList.remove('bianhua')
        })
~~~

###### (4)input表单属性操作

 元素.属性名='新值'

~~~js
input.type='password'
~~~

#### 6)定时器-间歇函数

   (1)开启定时器:  setInterval(函数,间隔时间)

~~~js
(1)//间隔1000毫秒=1秒打印一个'时间间隔'(使用的是:匿名函数)
setInterval(function(){
    console.log('时间间隔')
},1000)
(2)
function show(){
    console.log('间隔')
}
let timer = setInterval(show,1000)//show后不加(),加括号就直接调用时间延迟无用了
~~~

  (2)开启定时器: clearInterval(变量名)

~~~js
clearInterval(timer)//关闭以上定时器
~~~

