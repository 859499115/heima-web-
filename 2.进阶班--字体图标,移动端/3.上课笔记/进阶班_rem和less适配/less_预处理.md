#一.less文件是对css文件的预处理--具有对css的<i>逻辑处理</i>和<i>计算能力</i>
1.是vscode的一款插件;
2.具有嵌套关系自动生成处理的作用;
3.less文件保存会自动生成<u>对应的css文件</u>;
##1.less的运算
例子:
.box{

    <!--加减乘算法相同:  width:100+20px; -->
    <!--除法要加括号,less的4.0版本新加要求,老版本常规写法就行 -->
    width:(100/20rem);
}
##2.less嵌套生成后代子选择器
例子:
.father{
    width:50rem;
    .son{
        width:20rem;
    }
}
<!-- 对应css文件中生成.father .son{
width:20rem;}  -->
##3.less生成伪元素选择器
例子:
.father{
    wight:50rem;
    <!-- 对应css文件中自动生成father的hover伪元素属性 -->
    &:hover{
        width:30rem;
    }
}
##4.less_导出插件设置
1.插件设置--Easy less里面的setting.json
<!-- css后面加/表示导出的是css文件夹不加表示css文件 -->
2.输入代码:"out":"../css/";
##5.具体文件单独设置导出路径设置
<!-- 注意区别Easy插件的导出设置 -->
对应css文件中最上面输入-- out:相对路径
##6.less_文件导入
<!-- 写在目的地less文件第一行 -->
<!-- 对应的目的地css文件中自动生成导入的less的css文件内容 -->
@import'导入的文件名';
