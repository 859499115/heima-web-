$(function() {
    //设置延时定时器,防抖
    let timer = null
    let cache_object = {}

    function debounceSearch(kw) {
        //延时调用函数
        timer = setTimeout(function() {
            getList(kw)
        }, 500)
    }
    $('.ipt').on('keyup', function() {
        //清空定时器timer
        clearTimeout(timer)
            //获取input值
        let keyWords = $(this).val().trim()
            //如果ipt为空 ul隐藏
        if (keyWords.length === 0) return $('.list-group').empty().hide()
        if (cache_object[keyWords]) {
            return renderSuggestList(cache_object[keyWords])
        }
        //如果ipt有值则调用数据
        debounceSearch(keyWords)
    })

    function getList(kw) {
        $.ajax({
            //通过ajax后去jsonp跨域数据,jsonp只能GET请求方式
            url: 'https://suggest.taobao.com/sug?q=' + kw,
            dataType: 'jsonp',
            success: function(res) {
                console.log(res);
                //成功获取数据,调用模板引擎
                renderSuggestList(res)
            }
        })
    }

    function renderSuggestList(res) {
        if (res.result.length === 0) return $('.list-group').empty().hide()
        let htmlStr = template('tbl-list', res)
            //内容渲染到页面显示
        $('.list-group').html(htmlStr).show()
        let k = $('.ipt').val().trim()
        cache_object[k] = res
        console.log(cache_object);
    }
})