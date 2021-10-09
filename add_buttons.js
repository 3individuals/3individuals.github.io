window.onload=function(){
    var box=document.getElementById("box");
    var buttons=document.querySelectorAll("#dock button");

    if (localStorage.getItem("bg")==undefined){
        document.getElementById("main_bg").src="walls/Mr. Lee.jpg";
        localStorage.setItem("bg","walls/Mr. Lee.jpg")
    }else{
        document.getElementById("main_bg").src=localStorage.getItem("bg");
    };
    
    if (localStorage.length==buttons.length){
        document.getElementById("add_button").style.display="none";
    };
    
    for (var i=0;i<localStorage.length;i+=1){
        if (localStorage.key(i)!="bg"){
            if (i<5){
                box.style.width=box.offsetWidth+80+"px"
            };
            if (i==5 || i==9){
                box.style.height=box.offsetHeight+90+"px"
            }
            box.style.columnGap="10px"
            document.getElementById(localStorage.key(i)).style.display="block";
            buttons[i].innerHTML=JSON.parse(localStorage.getItem(localStorage.key(i)))["name"]
        };
    };
}