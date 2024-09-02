//搜索脚本
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
        searchBaidu();
    }
}

//随机排列网站
// 数组随机化
/* function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
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
//randomizeElements(); 

//导航栏脚本
document.querySelectorAll(".nav-item.linksite").forEach(function (ni) {
    ni.addEventListener('click', function () {
        //console.log(this);
        var webs = document.querySelectorAll('.website');
        // 遍历所有的内容容器，并隐藏它们
        webs.forEach(function (web) {
            web.classList.remove('active'); // 移除active类，隐藏内容
        });
        var nowsite = document.getElementById(this.getAttribute('data-linksite'));
        nowsite.classList.add('active'); // 添加active类，显示内容
        //randomizeElements(nowsite); //随机网站
    })
})

//搜索引擎切换
document.getElementById('searchtype').addEventListener('click', function () {
    var sm = document.getElementById('searchmenu');
    sm.style.display = "flex";
    //长时间未选择自动关闭，可进一步优化为鼠标悬停在选择dom上时不关闭（有时候会想的比较久）
    setTimeout(function () { sm.style.display = "none" }, 4000)
});
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