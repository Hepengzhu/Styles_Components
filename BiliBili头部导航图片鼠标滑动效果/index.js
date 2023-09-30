// 获取 DOM元素
const header = document.querySelector('header')
// 绑定鼠标移动事件
header.addEventListener('mousemove',(e)=>{
    // 计算鼠标相对于浏览器窗口宽度的百分比 (最左边的时候是0 ，最右边的时候是1)
    let percentage = e.clientX / window.outerWidth
    // 将百分比给css变量
    header.style.setProperty('--percentage',percentage)
    console.log(percentage);
})