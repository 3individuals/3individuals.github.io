window.onload=function(){
    var box=document.getElementById("box");

    if (localStorage.getItem("bg")==undefined){
        document.getElementById("main_bg").src="walls/p39.png";
        localStorage.setItem("bg","walls/p39.png")
    }else{
        document.getElementById("main_bg").src=localStorage.getItem("bg");
    };
    
    if (localStorage.length==document.querySelectorAll("#dock button").length){
        document.getElementById("add_button").style.display="none";
    };
    
    if (localStorage.getItem("button")!=null){
        var buttons=document.querySelectorAll("#dock button")
        for (var i=0;i<JSON.parse(localStorage.getItem("button")).length;i+=1){
            var button=document.getElementById(buttons[i].id)
            if (i<5){
                box.style.width=box.offsetWidth+80+"px"
            };
            if (i==5 || i==9){
                box.style.height=box.offsetHeight+90+"px"
            }
            button.style.display="block";
            button.innerHTML=JSON.parse(localStorage.getItem("button"))[i]["name"]
            };
    };
}