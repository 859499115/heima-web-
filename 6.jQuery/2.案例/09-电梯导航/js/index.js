// $(function() {
//     // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
//     // 节流阀  互斥锁 
//     var flag = true;
//     // 1.显示隐藏电梯导航
//     var toolTop = $(".recommend").offset().top;
//     toggleTool();

//     function toggleTool() {
//         if ($(document).scrollTop() >= toolTop) {
//             $(".fixedtool").fadeIn();
//         } else {
//             $(".fixedtool").fadeOut();
//         };
//     }

//     $(window).scroll(function() {
//         toggleTool();
//         // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名


//         if (flag) {
//             $(".floor .w").each(function(i, ele) {
//                 if ($(document).scrollTop() >= $(ele).offset().top) {
//                     console.log(i);
//                     $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

//                 }
//             })
//         }



//     });
//     // 2. 点击电梯导航页面可以滚动到相应内容区域
//     $(".fixedtool li").click(function() {
//         flag = false;
//         console.log($(this).index());
//         // 当我们每次点击小li 就需要计算出页面要去往的位置 
//         // 选出对应索引号的内容区的盒子 计算它的.offset().top
//         var current = $(".floor .w").eq($(this).index()).offset().top;
//         // 页面动画滚动效果
//         $("body, html").stop().animate({
//             scrollTop: current
//         }, function() {
//             flag = true;
//         });
//         // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
//         $(this).addClass("current").siblings().removeClass();
//     })
// })
// 固定导航栏
$(function() {
    //打开页面调用函数,决定tool是否显示
    let flag = true
    getScoll()

    function getScoll() {
        if ($(document).scrollTop() >= $('.recommend').offset().top) {
            $('.fixedtool').fadeIn()
        } else {
            $('.fixedtool').fadeOut()
        }
    }
    //页面滚动,tool是否显示
    // $(window).scroll(function() {
    //         getScoll()
    //     })
    //点击电梯导航栏,跳转对应内容
    $('.fixedtool ul li').click(function() {
            // console.log($('.floor .w').children().index());
            //关闭节流阀
            flag = false
            let count = $('.floor .w').eq($(this).index()).offset().top
            $('body,html').stop().animate({
                    scrollTop: count
                }, function() {
                    //开启节流阀
                    flag = true
                })
                // $(document).scrollTop($('.floor .w').eq($(this).index()).offset().top)
            $(this).addClass('current').siblings().removeClass('current')
        })
        //页面滚动对应左侧电梯导航栏li
    $(window).scroll(function() {
        getScoll()
            //开启节流阀
        if (flag) {
            $('.floor .w').each(function(index, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $('.fixedtool ul li').eq(index).addClass('current').siblings().removeClass('current')
                }
            })
        }

    })
})