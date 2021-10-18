function remove() {
    var buttons = document.querySelector("#dock");
    var remove = document.getElementById("remove");
    var box = document.getElementById("box");

    buttons.oncontextmenu = function (button_click) {
        button_click.preventDefault();
        if (button_click.currentTarget != button_click.target && button_click.target.id != "add_button") {
            if (remove.style.display == "none") {
                remove.style.display = "block";
                remove.onclick = function () {
                    button_click.target.style.display = "none";
                    if (JSON.parse(localStorage.getItem("button")).length<5){
                        box.style.width = box.offsetWidth - 120 + "px";
                    }
                    remove.style.display = "none";
                    if (JSON.parse(localStorage.getItem("button")).length==1){
                        localStorage.removeItem("button")
                    }
                    var button_list=JSON.parse(localStorage.getItem("button"))
                    for (i in button_list){
                        if (button_list[i]["id"]==button_click.target.id){
                            button_list.splice(i,1)
                            localStorage.setItem("button",JSON.stringify(button_list))
                            break
                        }
                    }
                    return check_dock();
                }
            } else {
                remove.style.display = "none";
            };
        };
    }
    window.onclick = function () {
        remove.style.display = "none";
    };
}

function check_dock() {
    var button = document.querySelectorAll("#dock button");
    for (var i = 0; i < button.length - 1; i += 1) {
        if (button[i].style.display == "none") {
            button[button.length-1].style.display = "block";
            return;
        };
    };
    button[button.length-1].style.display="none";
}