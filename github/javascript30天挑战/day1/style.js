window.addEventListener('keydown',function(e){
    var a=e.keyCode;
    var au="audio[data-key='"+a+"']";
    const $oaudio = $(au)[0];
    const $okey = $('.key[data-key="'+a+'"]');
    if(!$oaudio)  return;
    $oaudio.currentTime=0;
    $oaudio.play();
    // var $div=$('div')[0];
    // console.log($div);
    // console.log(au)
    // console.log(a)
    // console.log($oaudio);
    // console.log($okey)
    $okey.addClass('player');                       
})
window.addEventListener('keyup', function(e){
    const $okey = $('.key[data-key="'+e.keyCode+'"]');
    $okey.removeClass('player');    
})