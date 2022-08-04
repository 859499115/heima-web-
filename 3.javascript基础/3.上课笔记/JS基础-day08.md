# 内置对象

## 一.Math对象

###  1.提供系列数学运算方法

###  2.方法有:

#####   (1)常见属性

~~~js
1.random:生成0-1之间随机数(包括0)
例子: console.log(Math.random())//0-1间随机数
2.ceil:向上取整
例子:console.log(Math.ceil(1.1))//输出2
例子:console.log(Math.ceil(1.2))//输出2
3.floor:向下取整
例子:console.log(Math.floor(1.8))//输出1
4.max/min:找最大值/找最小值
例子:console.log(Math.max(1,2,3,4))//输出4
5.pow:幂运算
6.abs:绝对值
~~~

#####    (2)生成任意数范围

~~~js
Math.floor(Math.random()*(M-N+1)+N)
例子:1到100之间随机数//M为100.N为1,取值空间为[1,100]
    Math.floor(Math.random()*101)
~~~

## 数据类型

### 简单/基本数据类型--值类型

存储的是值本身

~~~js
 string,Number,Boolean,undefined,Null
~~~

### 复杂/应用数据类型--应用数据

存储的是地址

~~~js
//通过new新建对象
Object,Array,Date
~~~

![据存](F:\4月web前端\2022黑马-web前端学习\3.javascript基础\4.上课截图_基础语法_ECMAscript\数据存储.png)





