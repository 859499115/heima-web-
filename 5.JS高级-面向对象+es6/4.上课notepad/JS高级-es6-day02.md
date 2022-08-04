# [day02ppt](D:\2022最新版黑马程序员前端学习路线图\5. 更多精品教程\ja-vaScript进阶面向对象ES6\ja-vaScript进阶面向对象ES6资料\资料\JavaScript高级\JavaScript 高级第二天\PPT)

~~~js
//实现链接跳转,[链接描述](链接跳转地址)
//按住ctrl,再点击超链接,实现跳转
~~~

# 1.构造函数和原型

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/构造函数和原型.png)

注意点:

- 创建一类对象,首字母大写
- 构造函数要与new一起才有意义

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/构造函数.png)

构造函数添加成员:

1.静态成员

2.实例成员

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/构造函数.png)

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/构造函数成员.png)

~~~js
        function Star(name, age) {
            //this添加的实例成员
            this.name = name
            this.age = age
            this.sing = function() {
                console.log('唱歌');
            }
        }
        let zpj = new Star('张鹏举', 18)
        //只能通过实例化对象zpj才能访问this添加的成员
        console.log(zpj.name);
        console.log(zpj.age);
        zpj.sing()//输出唱歌
        //构造函数Star添加的是静态成员
        Star.sex = '男'
        console.log(zpj);
~~~

## 2.构造函数原型prototype

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/构造函数-原型.png)

~~~js
//共享共同方法,避免内存浪费
   function Star(name, age) {
            //this添加的实例成员
            this.name = name
            this.age = age
       //通过原型添加sing,避免内存资源浪费
          // this.sing = function() {
            //    console.log('唱歌');
            //}
        }
//原型添加方法共享
//构造函数原型
Star.prototype.sing = function (){
    console.log('我会唱歌')
}
//二者共享sing
        let zpj = new Star('张鹏举', 18)
        let ldh = new Star('刘德华', 23)
        console.log(zpj.__proto__)//实例化对象原型
       
~~~

## 3.对象原型__proto_ _

构造函数的原型对象===实例化对象原型

zpj._ _proto_ _===Star.prototype

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/构造函数-对象原型_proto_.png)

## 2.原型对象prototype

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/构造函数,实例,原型关系.png)

## 4.原型链

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/构造函数-原型链.png)

## 5.JS成员查找机制

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/JS成员查找机制.png)

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/原型对象this指向.png)

## 6.扩展内置对象

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/扩展内置对象.png)

## 7.[this指向](https://www.runoob.com/js/js-this.html)

# 2.继承call()

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/继承.png)

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/继承02.png)

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/继承--call().png)

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/day02/继承--继承父类.png)

# 3. ES5 新增方法

## (1)Array数组方法

### 1.forEach()遍历数组

~~~js
let data =[1,2,3,4]
let sum = 0
//value当前数组值
//index当前数组索引号
//arr当前数组
data.forEach(function(value,index,arr){
    sum+=value
})
console.log(sum)//10
~~~

### 2.filter()筛选数组--满足条件的成立新数组

~~~js
let data =[1,2,3,4]
let newData = data.filter(function(){
return value>=3
})
console.log(newData)//[3,4]
~~~

### 3.some()查找满足条件元素,立即退出函数不再遍历

适合查找唯一元素

## (2)string字符串方法--trim()

trim()删除字符串两侧空格(适用文本表单验证)

## (3)Object对象方法

### 1.Object.defineProperty(obj,prop,descriptor)修改属性或新增属性

[**对象属性第三参数**](F:\4月web前端\2022黑马-web前端学习\5.JS高级-面向对象+es6\3.上课截图\day02\对象方法--Object.defineProperty.png)

- obj--目标对象
- prop--目标属性
- descriptor--属性说明(对象形式存在)

**descriptor以对象形式书写**

~~~js
{
    value:属性值,
    writable:true/false,//是否允许修改属性值,默认true允许修改
    enumerable:布尔值,//是否可以枚举/遍历,默认是false
    configurable:布尔值,//是否可以删除或修改第三参数特性
}
~~~

~~~js
let obj = {
    name:'zpj',
    age:25,
    address:'老舍'
}
//原有修改对象obj属性
//obj.name='张鹏举'
Object.defineProperty(obj,name,{
    value:'张鹏举'
})
~~~

### 2.Object.keys()获取对象自身所有属性--得到的是属性组成的数组[]

~~~js
//类似于for...in..
Object.keys(obj目标对象)
let obj = {
            name: '张鹏举',
            age: 25,
            address: '江苏省',
        }
        console.log(obj);
        console.log(Object.keys(obj)) //得到obj对象自身所有属性的新组成数组[]
~~~







