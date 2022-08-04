**函数传参数**

~~~js
function fn(x=0,y=0){
    console.log(x+y)
}
fn()//没有参数,选择x y为0;输出为0
fn(2,3)//有参数,就选择参数;输出为5
~~~

# Object对象

## 1.定义:

   JS的一种数据类型,无序的数据集合

## 2.语法:

~~~js
let 对象名 ={ }
~~~

## 3.组成:

 属性和方法

~~~js
let 对象名 ={
    属性名: 属性值,
    方法名: 函数
}
~~~

![象属性和方](F:\4月web前端\2022黑马-web前端学习\3.javascript基础\4.上课截图_基础语法_ECMAscript\对象属性和方法.png)

 1)属性访问--获得对象属性里的属性值

​    (1)语法

  ~~~js
//方法1
console.log(person.uname)//对象名.属性名,输出的是属性值 
//方法2
console.log(person['uname'])//对象名['属性名']
  ~~~



 2)方法

​    (1)语法--*方法名和函数构成*

~~~js
let goods = {
    sayHi: function() {
        alert('你好啊')
    },//方法名和函数构成
}
~~~

​     (2)方法访问

~~~js
对象名.方法名()//传递参数照旧
~~~

## 4.对象操作

~~~js
let person ={
    uname:'张鹏举',//多个属性或方法用,隔开
    age:26
}
//属性重新赋值
person.uname='帅哥'
//新增属性
person.sex='男'//新增属性
//新增方法
person.moving=function(){
    document.write('移动')
}
console.log(person)//现在打印输出对象就变了
~~~

  1)重新赋值

​    对象名.属性名=新内容

  2)新增内容(属性和方法一样)

​    对象名.新属性名=内容

## 5.遍历对象

 1.语法--for in  循环结构

~~~js
 let person = {
                uname: '张鹏举',
                age: 26,
                sex: '男',
                address: '无锡市'
            }
 // console.log(person)
 //k是变量,存的是字符串属性名
  for (let k in person) {
        console.log(k) //遍历属性名,
        console.log(person[k]) //遍历属性值
        }
~~~

   1)遍历属性名-- **k**

   2)遍历属性值-- **对象名[k]**

​     