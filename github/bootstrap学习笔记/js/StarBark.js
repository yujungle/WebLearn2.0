$(function(){
    $("#a1").click(function(){
        console.log("click")
        $("#template1").addClass("d-none");
        $(".right").addClass("d-none d-lg-block");
        $("#template2").removeClass("d-none");

    })
    $("#a2").click(function(){
        $("#template1").removeClass("d-none");
        $(".right").removeClass("d-none d-lg-block");
        $("#template2").addClass("d-none");
    })
    var nowIndex = 0;
    var listNumber = $("#ullist li").length;
    function change(index){
        console.log(index)
        var ulMove = index*300;
        $("#ullist").animate({left:"-"+ulMove+"px"},500);

    }
    $("#left").click(function(){
        nowIndex = nowIndex>0? --nowIndex:0;
        change(nowIndex);
    })
    $("#right").click(function(){
        nowIndex = nowIndex<2? ++nowIndex:listNumber-1;
        wid = nowIndex<2? 300:100
        change(nowIndex);
    })
})