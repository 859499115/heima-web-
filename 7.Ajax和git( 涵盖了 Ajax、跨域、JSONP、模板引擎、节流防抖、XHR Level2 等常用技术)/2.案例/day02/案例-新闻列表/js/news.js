$(function() {
    getNewsList()

    function getNewsList() {
        //定义过滤器
        //date1是形参,实参是data.time
        template.defaults.imports.dateFormat = function(date1) {
                let date = new Date(date1)
                y = date.getFullYear()
                m = date.getMonth() + 1
                d = date.getDate()
                h = date.getHours()
                mm = date.getMinutes()
                s = date.getSeconds()
                return y + '-' + m + '-' + d + '   ' + h + ':' + mm + ':' + s
            }
            //获取数据
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            console.log(res);
            if (res.status !== 200) return alert('获取新闻失败')
                //先将data.tags字符串转化处理,在渲染到页面中国
            for (let i = 0; i < res.data.length; i++) {
                //将字符串修改为数组
                res.data[i].tags = res.data[i].tags.split(',')
            }
            // 定义一个模板引擎
            //container是存放内容的id容器,res是要渲染的数据
            let htmlStr = template('container', res)
                //渲染到页面中

            $('#news-list').html(htmlStr)

            console.log(res.data);
        })
    }
})