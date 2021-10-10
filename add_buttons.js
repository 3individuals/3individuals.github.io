window.onload=function(){
    var box=document.getElementById("box");

    if (localStorage.getItem("bg")==undefined){
        document.getElementById("main_bg").src="walls/Mr. Lee.jpg";
        localStorage.setItem("bg","walls/Mr. Lee.jpg")
    }else{
        document.getElementById("main_bg").src=localStorage.getItem("bg");
    };
    
    if (localStorage.length==document.querySelectorAll("#dock button").length){
        document.getElementById("add_button").style.display="none";
    };
    
    for (var i=0;i<localStorage.length;i+=1){
        if (localStorage.key(i)!="bg"){

            var button=document.getElementById(localStorage.key(i))

            if (i<5){
                box.style.width=box.offsetWidth+80+"px"
            };
            if (i==5 || i==9){
                box.style.height=box.offsetHeight+90+"px"
            }
            box.style.columnGap="10px"
            button.style.display="block";
            button.innerHTML=JSON.parse(localStorage.getItem(localStorage.key(i)))["name"]
        };
    };
}