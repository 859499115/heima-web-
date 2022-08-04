        let data = [{
                src: 'images/course01.png',
                title: 'Think PHP 5.0 博客系统实战项目演练',
                num: 1125
            }, {
                src: 'images/course02.png',
                title: 'Android 网络动态图片加载实战',
                num: 357
            }, {
                src: 'images/course03.png',
                title: 'Angular2 大前端商城实战项目演练',
                num: 22250
            }, {
                src: 'images/course04.png',
                title: 'Android APP 实战项目演练',
                num: 389
            }, {
                src: 'images/course05.png',
                title: 'UGUI 源码深度分析案例',
                num: 124
            }, {
                src: 'images/course06.png',
                title: 'Kami2首页界面切换效果实战演练',
                num: 432
            }, {
                src: 'images/course07.png',
                title: 'UNITY 从入门到精通实战案例',
                num: 888
            }, {
                src: 'images/course08.png',
                title: 'Cocos 深度学习你不会错过的实战',
                num: 590
            }, ]
            //获取父级元素ul
        let ul = document.querySelector('.clearfix')
        for (let i = 0; i < data.length; i++) {
            //创建节点li
            let li = document.createElement('li')
                // 追加节点
            ul.appendChild(li)
            li.innerHTML = `
                    <img src=${data[i].src} alt="">
                    <h4>
                        ${data[i].title}                     </h4>
                    <div class="info">
                        <span>高级</span> • <span> ${data[i].num} </span>人在学习
                    </div>
            `
        }