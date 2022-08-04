// 1.全选按钮
let allCheck = document.querySelector('.all_check')
let check = document.getElementsByClassName('check')
let all_check_text = document.querySelector('.all_check_text')
console.log(check);
console.log(allCheck);
//注册全选/取消
allCheck.addEventListener('click', function() {
        for (let i = 0; i < check.length; i++) {
            if (allCheck.checked === true) {
                check[i].checked = true
                all_check_text.innerHTML = '取消'
            } else {
                check[i].checked = false
                all_check_text.innerHTML = '全选'
            }
        }
    })
    //遍历查询每个复选框
for (let i = 0; i < check.length; i++) {
    check[i].addEventListener('click', function() {
        for (let j = 0; j < check.length; j++) {
            if (check[j].checked === false) {
                allCheck.checked = false
                all_check_text.innerHTML = '全选'
                return
            }
        }
        allCheck.checked = true
        all_check_text.innerHTML = '取消'
    })
}
//2.增减
let reduce = document.getElementsByClassName('reduce')
let add = document.getElementsByClassName('add')
let num = document.getElementsByClassName('num')
let del = document.getElementsByClassName('del')
let tbody = document.querySelector('tbody')
let tr = document.querySelectorAll('tr')
    //获取总数量
let total_count = document.querySelector('.total_count')
console.log(tr);
//注册事件点击增减
for (let i = 0; i < reduce.length; i++) {
    let price = document.getElementsByClassName('price')
    let total = document.getElementsByClassName('total')
        //5.计算总结算
    function getAllCount() {
        let sum = 0
        for (let i = 0; i < reduce.length; i++) {
            sum = +total[i].innerHTML + sum
        }
        total_pay.innerHTML = sum + '¥'
    }
    getAllCount()
    reduce[i].addEventListener('click', function() {
        num[i].value--
            total[i].innerHTML = num[i].value * price[i].innerHTML
        if (num[i].value <= 0) {
            reduce[i].disabled = true
        }
        result()
        getAllCount()
    })
    add[i].addEventListener('click', function() {
            reduce[i].disabled = false
            num[i].value++
                total[i].innerHTML = num[i].value * price[i].innerHTML
            result()
            getAllCount()

        })
        //3.删除事件del
    del[i].addEventListener('click', function() {
        //删除父元素tbody的子元素tr
        tbody.removeChild(this.parentNode.parentNode)
        result()
    })
}
//4.总计数量total_count,封装函数,reduce和add调用
function result() {
    let sum = 0
    for (let i = 0; i < add.length; i++) {
        sum += +num[i].value
    }
    total_count.innerHTML = sum
    getAllCount()
}
result() //谁用谁调用