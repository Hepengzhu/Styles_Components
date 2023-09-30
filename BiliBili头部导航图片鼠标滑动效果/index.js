let startingPoint
// 获取 DOM元素
const header = document.querySelector('header')
header.addEventListener('mouseenter',(e)=>{
    // 记录鼠标进入时的位置
    startingPoint = e.clientX
})
// 绑定鼠标移动事件
header.addEventListener('mousemove',(e)=>{
    // 计算鼠标相对于浏览器窗口宽度的百分比 (最左边的时候是0 ，最右边的时候是1)
    // let percentage = e.clientX / window.outerWidth
    let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5   // 任何切入点都转换成中心点
    // 将百分比给css变量
    header.style.setProperty('--percentage',percentage)
    console.log(percentage);
})
header.addEventListener('mouseleave',()=>{
    header.style.setProperty('--percentage',0.5)
})