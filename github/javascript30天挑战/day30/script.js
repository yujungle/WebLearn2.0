$(function(){
    'use strict'
    const $holes = $(".hole");
    const $scoreBoard = $(".score");
    const $moles = $('.mole');
    let $lastHole;
    let timeUp;          //结束时间
    let score;           //分数
    //生成随机时间，用作地鼠冒头的时间
    function randTime(min,max){
        return Math.round(Math.random()*(max-min)+min);     //生成min-max 的随机时间
    }
    //生成随机树洞，用作地鼠冒头的树洞
    function randHole($holes){
        const idx = Math.floor(Math.random()*$holes.length);
        const $hole = $holes.eq(idx);
        //这段代码本来是为了防止同一个树洞连续冒头，这样会出现几个地鼠同时冒头，太乱了，删了更干净。
        // if($hole === $lastHole){
        //     console.log('the same one bud');
        //     return randHole($holes);
        // }
        // $lastHole=$hole;
        return $hole;
    }
    // 地鼠冒头函数
    function peep(){
        const time = randTime(200,1000);
        const $hole = randHole($holes);
        $hole.children().addClass("up");
        setTimeout(() => {
            $hole.children().removeClass("up");
            if(!timeUp) peep();
        }, time);
    }
    //开始游戏。
    function startGame(){
        $scoreBoard.text('0');
        timeUp = false;
        score = 0;
        peep();
        setTimeout(() => timeUp =true,10000);
    }
    //计分
    function bonk(e){
        console.log(e);
        if(!e.originalEvent.isTrusted) return ;
        score++;
        console.log(score)
        $(this).removeClass('up');
        $scoreBoard.text(score);
    }
    $('button').click(startGame)
    $moles.click(bonk) ;                //这里保证了打到的是冒头的地鼠，因为不冒头的地鼠在hidden,根本打不到。
})