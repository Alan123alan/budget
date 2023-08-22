function start(){

}

function stop(){

}

$(document).ready(function(){
    console.log("document is ready");
    $(".map-div").append("<div>made-up-div</div>");
    canvas = $("#canvas");
    canvas.on("mousedown", start);
    canvas.on("mouseup", stop);
    if(canvas.getContext){
        context = $("#canvas").getContext("2d")
    }else{
        console.log("Canvas is not supported");
    }
});