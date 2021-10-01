window.onload=function(){
    dock=document.getElementById("dock");
    buttons=document.querySelectorAll("#dock button");

    if (localStorage.getItem("bg")==undefined){
        document.getElementById("main_bg").src="walls/Mr. Lee.jpg";
    }else{
        document.getElementById("main_bg").src=localStorage.getItem("bg");
    };

    if (localStorage.length-1==buttons.length-1){
        document.getElementById("add_button").style.display="none";
    };
    
    for (var i=0;i<localStorage.length;i+=1){
        if (localStorage.key(i)!="bg"){
        dock.style.width=dock.offsetWidth+60+"px";
        document.getElementById(localStorage.key(i)).style.display="block";
        };
    };
}