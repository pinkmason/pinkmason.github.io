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