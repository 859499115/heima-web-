# **函数** --function

### 1.定义:

执行特定任务的代码块,包装函数实现代码复用

### 2.语法:

~~~js
//1.函数声明
function 函数名(){
    函数体
}
函数名()//2.函数调用,再执行
~~~



### 3.**形参和实参**

![](F:\4月web前端\2022黑马-web前端学习\3.javascript基础\4.上课截图_基础语法_ECMAscript\函数.png)

 1)跟在函数f*<u>unction</u>*后的是形参

 2)跟在调用函数后的是实参

 3)实参**没有**时,默认**undefined**无定义

 4)实参个数大于形参个数时,多余实参会被忽略;

​    小于形参则NaN

### 4.**返回函数return--返回的运算后的结果**

~~~js
1.退出函数
2.一个函数只能有一个return执行
3.默认值是undefined,可以是空值
~~~

### 5.<u>函数</u>**作用域**

提高代码逻辑性, 减少用名冲突

 1)全局作用域--整个script或js文件

 2)局部作用域---函数内部

 3)块级作用域---{  }内部

### 6.<u>变量</u>**作用域**(类似函数作用域

### 7.匿名函数和具名函数

~~~js
 
let btn = document.querySelector('button')
//1.匿名函数
let fn = function() {
            console.log(1);
        }
btn.addEventListener('click', function() {
            fn()
        })
//2.具名函数
function getSum(){
console.log(1)
}
btn.addEventListener('click', function() {
            getSum()
        })
~~~

 ~~~js
1.匿名函数
function (){
    函数体
}
//函数表达式写法
let fn =function(){
    函数体
}
fn()
2.具名函数
//getSum函数名
function getSum(){
    函数体
}
getSum()//调用函数
 ~~~

### 8.立即函数(不需要调用)

*避免全局污染*

~~~js
1.( function(形参) {console.log()} ) (实参)
2.( function(形参) {console.log()} (实参) )
~~~

  1)多个立即执行函数用**;**隔开