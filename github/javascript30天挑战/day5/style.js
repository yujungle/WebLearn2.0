
    // const $panels = $(".panel");
    // console.log($panels)
    // $panels.click(function(){
    //     $(this).toggleClass("open")
    // })
    // $panels.on('transitionend',(function(e){
    //     a=e.target
    //     console.log(a,$(a))

    //     console.log($(a).attr("class"));
    // }))
window.onload = function(){
   function toggleActive(e){
        if(e.propertyName.includes('flex')){
            this.classList.toggle('open-active')
        }
    }
    function toggleClass(){
        this.classList.toggle('open')
    }
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel=>panel.addEventListener('click',toggleClass))
    panels.forEach(panel=>panel.addEventListener('transitionend',toggleActive))
}