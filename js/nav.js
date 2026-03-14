//搜索框搜索脚本
function searchBaidu() {
    // 获取搜索框中的值
    var searchTerm = document.getElementById('searchInput').value;
    //获取搜索引擎
    var searchlink = document.getElementById('search-icon').getAttribute('data-link')
    var baiduSearchUrl = searchlink + encodeURIComponent(searchTerm);
    // 重定搜索
    window.open(baiduSearchUrl, '_blank');
}
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchBaidu();
    }
}


//随机排列网站
/* // 数组随机化函数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//随机父元素下子元素
function randomizeElements(activewebsite) {
    //const activewebsite = document.querySelector('.website.active');//获取div对象
    const websiteitems = Array.from(activewebsite.children);
    const shuffledItems = shuffleArray(websiteitems);
    // 清除div子项
    while (activewebsite.firstChild) {
        activewebsite.removeChild(activewebsite.firstChild);
    }
    // 添加子项
    shuffledItems.forEach(item => activewebsite.appendChild(item));
} */


//导航栏点击切换脚本，需css中的.website类display：none属性和.website.active类配合实现
/* document.querySelectorAll(".nav-item.linksite").forEach(function (ni) {
    ni.addEventListener('click', function () {
        //console.log(this);
        var webs = document.querySelectorAll('.website');
        // 遍历所有的内容容器，并隐藏它们
        webs.forEach(function (web) {
            web.classList.remove('active'); // 移除active类，隐藏内容
        });
        var nowsite = document.getElementById(this.getAttribute('data-linksite'));
        nowsite.classList.add('active'); // 添加active类，显示内容
        //randomizeElements(nowsite); //随机排列网站
    })
}) */


//搜索引擎切换
//点击图标显示搜索引擎图标
document.getElementById('searchtype').addEventListener('click', function () {
    var sm = document.getElementById('searchmenu');
    sm.style.display = "flex";
    //长时间未选择自动关闭，可进一步优化为鼠标悬停在选择dom上时不关闭（有时候会想的比较久）
    setTimeout(function () { sm.style.display = "none" }, 4000)
});
//搜索引擎图标点击切换搜索引擎
document.querySelectorAll('.search-engine').forEach(function (se) {
    se.addEventListener('click', function () {
        // console.log(this);
        //console.log(event.currentTarget);方法也可以
        var imgElement = document.getElementById('search-icon');
        imgElement.src = this.getAttribute('data-svg');
        imgElement.dataset.link = this.getAttribute('data-link');//setAttribute需要data前缀
        var sm = document.getElementById('searchmenu');
        sm.style.display = "none";
    })
})


//切换回页面时聚焦到输入框
const input = document.getElementById("searchInput");
// 监听页面可见性变化
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        input.focus(); // 当页面重新可见时聚焦输入框
    }
});
// 初始加载时也聚焦（可选），html中用autofocus实现了
//input.focus();


//暗黑模式
// 获取按钮和 html 根标签
const btn = document.getElementById('darkModeBtn');
const html = document.documentElement;
const imgElement = btn.getElementsByTagName('img')[0];
// 初始化：从本地存储读取主题
function initTheme() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        html.classList.add('dark');
        imgElement.src = "../media/sun.svg";
    }
    else {
        imgElement.src = "../media/moon.svg";
    }
}
initTheme();
// 切换暗黑/亮色
btn.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDarkNow = html.classList.contains('dark');
    // 保存到本地存储
    localStorage.setItem('darkMode', isDarkNow);
    if (isDarkNow) {
        imgElement.src = "../media/sun.svg";
    }
    else {
        imgElement.src = "../media/moon.svg";
    }
});



//操作json数据实践
/* var jsonString = '{"name":"John Doe","age":30,"city":"New York"}';
    var data1 = JSON.parse(jsonString);
    console.log(data1.name); */
//可给导航条的项目添加点击事件获取data来实现通过json修改页面，不过不能本地运行
/* fetch('./json/nav.json')
    .then(response => response.json()) // 将响应体解析为JSON
    .then(data => {
        console.log(data); // 打印整个对象
        var xx = 'cysite';//可优化为通过点击获取
        console.log(data[xx]); // 打印对象的属性
        console.log(data[xx][0]);
        console.log(data[xx][0].name);
        var ls = '<a href="' + data[xx][0].link + '" target="_blank">' + data[xx][0].name + '</a>'
        console.log(ls)

        let result = '';
        for (const site of data[xx]) {
            result += '<a href="' + site.link + '" target="_blank">' + site.name + '</a>';
            //通过获取id插入到指定位置实现修改页面 
        }
        console.log(result)
    })
    .catch((error) => {
        console.error('Error:', error);
    });  */