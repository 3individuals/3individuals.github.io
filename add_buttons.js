window.onload=function(){
    dock=document.getElementById("dock");
    buttons=document.querySelectorAll("#dock button");

    if (localStorage.length==buttons.length-1){
        document.getElementById("add_button").style.display="none";
    };
    
    for (var i=0;i<localStorage.length;i+=1){
        dock.style.width=dock.offsetWidth+60+"px";
        document.getElementById(localStorage.key(i)).style.display="block";
    };
}