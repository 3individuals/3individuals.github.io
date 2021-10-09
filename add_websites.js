function add_website_button() {
    var add_website_menu = document.getElementById("add_website_menu");

    if (add_website_menu.style.display == "none") {
        add_website_menu.style.display = "flex";
    } else {
        add_website_menu.style.display = "none";
    };
}

function add_website() {
    document.getElementById("website_present").style.display="none"
    document.getElementById("url_wrong").style.display="none"
    document.getElementById("input_empty").style.display="none"

    var url=document.getElementById("website_url").value
    var name=document.getElementById("website_name").value
    
    if (check_input(url,name)=="u"){
        document.getElementById("website_present").style.display="block"
        return
    }
    if (check_input(url,name)=="h"){
        document.getElementById("url_wrong").style.display="block"
        return
    }
    if (check_input(url,name)=="n"){
        document.getElementById("input_empty").style.display="block"
        return
    }

    document.getElementById("add_website_menu").style.display = "none";

    var buttons = document.querySelectorAll("#dock button");

    for (var i = 0; i < buttons.length - 1; i += 1) {
        if (buttons[i].style.display == "none") {

            var box = document.getElementById("box");
            if (i<4){
                box.style.width = box.offsetWidth + 80 + "px";
            }
            if (i==4 || i==8){
                box.style.height = box.offsetHeight+90+"px"
            }
            buttons[i].style.display = "block";
            localStorage.setItem("button"+i,JSON.stringify({"name":name,"url":url}));
            buttons[i].innerHTML=name
            check_dock();
            break;

        };
    };
}

function check_dock(){
    buttons=document.querySelectorAll("#dock button");
    for (var i = 0; i < buttons.length-1;i+=1){
        if (buttons[i].style.display=="block"){
            if (i==buttons.length-2){
                buttons[buttons.length-1].style.display="none";
                break;
            };
        };
    };
}

function check_input(url,name){
    if(name.replace(" ","").length==0 || url.replace(" ","").length==0){
        return "n"
    };

    if ((url.includes("https://") || url.includes("http://"))==false){
        return "h"
    };


    for (var i=0;i<localStorage.length-1;i+=1){
        if (localStorage.key(i)!="bg"){
            if (url == JSON.parse(localStorage.getItem(localStorage.key(i)))["url"]){
                return "u"
            };
        };
    };
}