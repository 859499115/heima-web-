$(function() {
    //打开页面渲染数据到页面
    getBooksList()

    function getBooksList() {
        //向服务器获取数据
        $.get('http://www.liulongbin.top:3006/api/getbooks', function(res) {
            console.log(res.data); //获取成功
            if (res.status !== 200) return alert('获取图书失败')
            let arr = []
                //遍历data数组数据
            $.each(res.data, function(index, ele) {
                    // 给空数组添加内容
                    arr.push('<tr><td>' + ele.id + '</td><td>' + ele.bookname + '</td><td>' + ele.author + '</td><td>' + ele.publisher + '</td><td><a href="#" class="del" data-id="' + ele.id + '">删除</a></td></tr>')
                })
                //父元素追加内容
            $('tbody').empty().prepend(arr.join(''))
        })
    }
    //2.删除数据
    //动态创建的a,要通过父元素委派添加事件
    $('tbody').on('click', '.del', function() {
            let id = $(this).attr('data-id')
            console.log(id);
            $.get('http://www.liulongbin.top:3006/api/delbook', {
                id: id
            }, function(res) {
                if (res.status !== 200) return alert('删除图书失败')
                    //删除数据后,再重新渲染数据到页面
                getBooksList()
            })
        })
        //3.添加图书数据
    $('.btn').on('click', function() {
        let bookname = $('#iptBookname').val().trim()
        let author = $('#iptAuthor').val().trim()
        let publisher = $('#iptPublisher').val().trim()
        $.ajax({
            method: 'POST',
            url: 'http://www.liulongbin.top:3006/api/addbook',
            data: {
                //将表单数据添加到data数据库中
                bookname: bookname,
                author: author,
                publisher: publisher
            },
            success: function(res) {
                console.log(res);
                if (res.status !== 201) return alert('添加图书失败')
                    //追加完数据,后再渲染数据到页面
                getBooksList()
                $('#iptBookname').val('')
                $('#iptAuthor').val('')
                $('#iptPublisher').val('')
            }
        })
    })

})