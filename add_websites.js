function add_website_button() {
    var add_website_menu = document.getElementById("add_website_menu");

    if (add_website_menu.style.display == "none") {
        add_website_menu.style.display = "flex";
    } else {
        add_website_menu.style.display = "none";
    };
}

function add_website() {
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
            localStorage.setItem("button"+i,JSON.stringify({"name":document.getElementById("website_name").value,"url":document.getElementById("website_url").value}));
            buttons[i].innerHTML=document.getElementById("website_name").value
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