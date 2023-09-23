let str = '加上大大掉就打，收到后i啊大家哦i啊就换地方，安徽敌军后方。JFK事件发生。'
// 获取元素
const box = document.querySelector('.box')

// 将字符串分割成数组
let wordArr = str.split('')
const write = ()=>{
    if(wordArr.length > 0){
        // 创建一个span存放单词
        let span = document.createElement('span')
        // 顺序获取，并且删除
        let word = wordArr.shift()
        // 将文字放入span
        span.innerHTML = word
        // 将span添加到父盒子中
        box.appendChild(span)
    }
}

setInterval(write,100)