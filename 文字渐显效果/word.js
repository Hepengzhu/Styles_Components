let str = `庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。(具 通：俱)

　　予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？

　　若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。(隐曜 一作：隐耀；淫雨 通：霪雨)

　　至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。

　　嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲，居庙堂之高则忧其民，处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎！噫！微斯人，吾谁与归？

　　时六年九月十五日。`
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
        let opc = 0
        // 让文字由透明慢慢显示
        let timeId = setInterval(()=>{
            opc++
            span.style.opacity = opc / 10 
            if(opc == 10) clearInterval(timeId)
        },50)
    }else{
        clearInterval(id)
    }
    console.log('aaa');
}

let id = setInterval(write,100)