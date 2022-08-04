<h1 align="center">数据类型</h1> 
----JS引擎根据等号右边的取值判断数据类型
#1.简单数据类型
##1.Number数字型
 1)默认是0;
 2)Number.MAX_VALUE最大值和Mumber.MIN_VALUE最小值;
 3)infinity无穷大;
 4)NaN非数字;
   (1)isNaN(取值)--检测数据是否是数字型,是显示false,不是显示true;
   (2)不是数字型直接与数字型直接拼接显示NaN;
##2.Boolean布尔值型
 1)默认是false;
true默认当1看待,false当0看待,参与运算;
 2)任何类型与字符串拼接,都变成字符串; 
##3.String字符串型
 1)数据引号括起来;
 2)转义符;
 3)字符串拼接;
变量不用加引号,字符串要加引号.
 4)检测字符串长度
console(变量名.length)
##4.Nndefined未定义
##5.Null空值
##6.typeof检测数据类型
直接后面空格加变量名;
<h1>数据类型转换</h1>
#1.转换成字符串型
 1)变量.tostring()
 2)string(变量)
 3)+号拼接,默认转换成字符串型;
#2.转换成数字型
 1)parseInt取整
例子: console.log(parseInt('12'))//12输出是数字型

~~~js
console.log(parseInt('12%'))//输出是12,去掉单位和符号
~~~

 2)parseFloat浮点数
 3)Nmuber强制转换
 4)运算符号参与运算隐式转换
<i>+号除外</i>
+号作为正号可以把数据转为数字型
例子: console.log('12'+0);//12是数字型
#2.复杂数据类型

