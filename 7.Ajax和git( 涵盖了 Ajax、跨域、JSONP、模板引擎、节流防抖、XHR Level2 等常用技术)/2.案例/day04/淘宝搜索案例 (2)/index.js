$(function() {
    //设置定时器,防抖
    let timer = null

    function anti_shake(result) {
        timer = setTimeout(function() {
            getData(result)
        }, 500)
    }
    //定义一个对象存储数据,节流
    let codeObj = {}
        //获取表单域值
        //按键事件
    $('.ipt').on('keyup', function() {
            clearTimeout(timer)
            let keyWords = $('.ipt').val().trim()
            console.log(keyWords);
            if (keyWords.length === 0) return $('.list-group').empty().hide()
            if (codeObj[keyWords]) {
                return getListGroup(codeObj[keyWords])
            }
            anti_shake(keyWords)
        })
        //获取跨域数据
    function getData(kw) {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?q=' + kw,
            dataType: 'jsonp',
            success: function(res) {
                console.log(res);
                getListGroup(res)
            }
        })
    }

    function getListGroup(res) {
        if (res.result.length === 0) return $('.list-group').hide().empty()
        let htmlStr = template('list', res)
        $('.list-group').show().html(htmlStr)
        let k = $('.ipt').val().trim()
            //先前获得数据,存储起来
        codeObj[k] = res
    }
})