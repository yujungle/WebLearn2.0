$(function() {
	let countdown;
    const $timerDisplay = $(".left_time");
    const $endTime = $(".end_time")
    const $btns = $("[data-time]");

    $('.cont').css("height",$(window).height()-$("header").height());
	function timer(seconds) {

		clearInterval(countdown);
		const now = Date.now();
        const then = now + seconds * 1000;

		displayLeftTime(seconds);
		displayEndTime(then);
		countdown = setInterval(() => {
			const secondLeft = Math.round((then - Date.now()) / 1000);
			if (secondLeft < 0) {
				clearInterval(countdown);
				return;
			}
			displayLeftTime(secondLeft);
		}, 1000);
    }
    function displayLeftTime(seconds){
        const minutes = Math.floor(seconds/60);
        const reSeconds = seconds % 60;
        const sec = reSeconds < 10 ? '0'+reSeconds : reSeconds;
        const display = minutes + ":" + sec;
        $('title').text(display);
        $timerDisplay.text(display);
    }
    function displayEndTime(times){
        const end = new Date(times);
        const hour = end.getHours();
        const adjuestedHour = hour > 12 ? hour-12 : hour;
        const minutes = end.getMinutes();
        console.log("hour: " + hour + "min" + minutes)
        $endTime.text('Be Back At ' + adjuestedHour + ":" + (minutes < 10 ? '0' + minutes : minutes));
    }
    function startTime(){
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
    }
    $btns.click(startTime);
    const $in = $('input');
    $in.blur(function(){
        if(Number($(this).val())){
            const mins = $(this).val();
            timer(mins*60);
            $(this).val("")
        }
    })
});
