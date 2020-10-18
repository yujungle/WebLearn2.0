$(function(){
    $hour=$(".hour-hand");
    $min=$(".min-hand");
    $second=$(".second-hand");
    const now = new Date();
    console.log(now);
    second=now.getSeconds();
    min = now.getMinutes();
    hour = now.getHours()<=12?now.getHours():now.getHours()-12;
    function setDate(){
        const secondDeg=second*6+90;
//        console.log(secondDeg)
        $second.css("transform","rotate("+secondDeg+"deg)");
        const minDeg = min*6+90+second*0.1;
        $min.css("transform","rotate("+minDeg+"deg)");
        const hourDeg = hour*30+90+0.5*min;
        $hour.css("transform","rotate("+hourDeg+"deg)")
        second+=1;
        // second= second>=60?0:second;
        // min = second>=60?min+1:min;
        // hour = min>=60?hour+1:hour;
        // min = min>=60?0:min;
        // hour = hour>=12?0:hour;
    }
    setInterval(setDate,1000);
})