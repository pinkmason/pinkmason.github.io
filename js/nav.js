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