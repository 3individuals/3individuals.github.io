function add_website_button(){
    if (document.getElementById("add_website_menu").style.display=="none"){
        document.getElementById("add_website_menu").style.display="flex"
    }else{
        document.getElementById("add_website_menu").style.display="none"
    }
}
function add_website(){
    document.getElementById("add_website_menu").style.display="none"
    var buttons=document.querySelectorAll("#dock button")
    for (var i=0;i<buttons.length-1;i+=1){
        if (buttons[i].style.display=="none"){
            document.getElementById("dock").style.width=document.getElementById("dock").offsetWidth+60+"px"
            buttons[i].style.display="block"
            break
        }
    }
}