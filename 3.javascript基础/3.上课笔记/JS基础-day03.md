**变量赋值法:**

1.=等号赋值

**一元运算符:**  

1.每次加1

~~~js
let num =1
1.num = num +1 
2.或num += 1
3.或num++ ++num
~~~

2.前置自加和后置自加

~~~js
1.前置加++num(先自加后运算)
let num = 1
console.log(++num + 1)//结果是3
2.后置加num++(先运算后自加)
//先运算num++是1
console.log(num++ + 1)//结果是2
//后自加num是2
console.log(num)//结果是2

~~~

**比较运算法**:

判断数值--比较结果是Boolean型

~~~js
console.log(5>=2)//结果是true
console.log(2<=5)//true
console.log(5=5)//false
console.log(5=5)//报错,=是用来赋值的
//==两边值相同就行,数据类型可不同
console.log(5==5)//true
//===值和数据类型都一样
console.log(5===5)//true
//!==不等
console.log(2!==5)//true
~~~

**逻辑运算符**

判断true和false

1. ~~~js
   注意: // 0和undefined和null默认是false
   1.&& 逻辑与
   //逻辑短路,都true,才true,都true后执行输出
   console.log(0&&20)//输出20
   console.log(undefined&&20)//输出false
   2.|| 逻辑或
   //逻辑短路,一个true就输出true,都true输出第一个执行的
   console.log(0||20)//输出20
   console.log(1||20)//输出1
   3.! 逻辑非
   console.log(!false)//输出true
   ~~~

   **运算符优先级**

   ![算符优先](F:\4月web前端\2022黑马-web前端学习\3.javascript基础\4.上课截图_基础语法_ECMAscript\运算符优先级.png)