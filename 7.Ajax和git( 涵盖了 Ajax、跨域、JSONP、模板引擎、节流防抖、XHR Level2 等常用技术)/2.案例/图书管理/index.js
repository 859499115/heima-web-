$(function() {
    getbooksList()
        //渲染数据到页面
    function getbooksList() {
        $.get('http://www.liulongbin.top:3006/api/getbooks', function(res) {
            console.log(res); //获取请求的数据res
            if (res.status !== 200) return alert('获取图书失败')
            let trArr = []
            $.each(res.data, function(index, ele) {
                trArr.push('<tr><td>' + ele.id + '</td><td>' + ele.bookname + '</td><td>' + ele.author + '</td><td>' + ele.publisher + '</td><td><a href="#" class="del" data-id="' + ele.id + '">删除</a></td></tr>')
            })
            $('tbody').empty().append(trArr.join(''))
        })
    }
    //点击删除数据图书
    $('tbody').on('click', '.del', function() {
            let id = $(this).attr('data-id')
            console.log(id);
            $.get('http://www.liulongbin.top:3006/api/delbook', {
                    id: id,
                },
                function(res) {
                    console.log(res);
                    if (res.status !== 200) return alert('删除失败')
                    getbooksList()
                })
        })
        //3.添加图书
        //点击把input的val()值请求发送给服务器
    $('.btn').on('click', function() {
        //获取表单值
        let bookname = $('#iptbookname').val().trim()
        let author = $('#iptauthor').val().trim()
        let publisher = $('#iptpublisher').val().trim() //trim()方法去掉val()两端空格
            //设定表单值不能为空
        if (bookname.length <= 0 || author.length <= 0 || publisher.length <= 0) { return alert('请输入完整图书信息') }
        $.post('http://www.liulongbin.top:3006/api/addbook', {
            bookname: bookname,
            author: author,
            publisher: publisher
        }, function(res) {
            console.log(res);
            if (res.status !== 201) return alert('添加图书信息失败')
                //添加信息成功,渲染数据
            getbooksList()
                //添加完图书信息,表单值为空
            $('#iptbookname').val('')
            $('#iptauthor').val('')
            $('#iptpublisher').val('')
        })
    })
})