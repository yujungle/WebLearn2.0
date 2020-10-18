$(function(){
    const $inputs = $(".control input");
    console.log($inputs);

    function handleUpdate(){
        const suffix = $(this)[0].dataset.sizing || " ";
        //  console.log("--"+$(this).attr("name"))
        //  console.log($(this).val())
        //  $(":root").attr("myattr","10px")
        $(":root").css("--"+$(this).attr("name"),$(this).val()+suffix);
    }
    $inputs.change(handleUpdate);
    $inputs.mousemove(handleUpdate);
})