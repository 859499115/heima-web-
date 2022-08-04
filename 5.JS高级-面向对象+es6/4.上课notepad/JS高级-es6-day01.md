# 1.面向对象编程OOP

1.定义:

把事务分解成一个个对象,然后对象间分工合作

2.特点:
封装性,继承性,多态性

3.面向过程和面向对象的对比

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/面向对象和面向过程.png)

# 2.ES6中的类和对象

## 1.类(先)

类抽象了对象的公共部分,泛指一大类

对象特指某一个,通过类实例化一个具体的对象

 1)面向对象的思维特点:

抽取对象共用属性和行为组织成一个类(模板),对类进行实例化,获取类的对象

## 2.创建类(后)

 1.语法:

~~~js
class Name{
    //class body
}
~~~

2.创建实例:

~~~js
let xx =new Name()
~~~

~~~js
//1.创建类
class Star {
      constructor(uname, age) {
          //this指向的是Star
                this.name = uname
                this.age = age
            }
 //(1)添加方法:
      sing(song) {
                console.log(this.name + song)//输出刘德华冰雨
            }
        }
//2.创建实例化
 let ldh = new Star('刘德华', 48)
 let zbz = new Star('张柏芝', 18)
 console.log(ldh);
 console.log(zbz);
 ldh.sing('冰雨') //传递参数给song
~~~

# 3.类的继承

[类继承](https://www.runoob.com/js/js-class-inheritance.html)

子承父业,子类继承父类属性和方法

## 1.语法:

~~~js
//子承父业
class Son extends Father {
    //执行代码
}
~~~

## 2.super关键词

用于调佣和访问父类上的函数,可以调用父类构造函数,也可以调用父类的普通函数

~~~js
        class Father {
            say() {
                return '我是爸爸'
            }
        }
        class Son extends Father {
            say() {
                //super调用父类元素的函数
                return super.say() + '的儿子' //输出结果为'我是爸爸的儿子'
            }
        }
        let son = new Son()
        console.log(son.say())
~~~

![](F:/4月web前端/2022黑马-web前端学习/5.JS高级-面向对象+es6/3.上课截图/super关键词.png)

~~~js
//实现链接跳转,[链接描述](链接跳转地址)
~~~

[day02ppt](D:\2022最新版黑马程序员前端学习路线图\5. 更多精品教程\ja-vaScript进阶面向对象ES6\ja-vaScript进阶面向对象ES6资料\资料\JavaScript高级\JavaScript 高级第二天\PPT)

















