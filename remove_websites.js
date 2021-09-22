function remove() {
    var buttons = document.querySelector("#dock");
    var remove = document.getElementById("remove");
    var dock = document.getElementById("dock");

    buttons.oncontextmenu = function (button_click) {
        button_click.preventDefault();
        if (button_click.currentTarget != button_click.target && button_click.target.id != "add_button") {
            if (remove.style.display == "none") {
                remove.style.display = "block";
                remove.onclick = function () {
                    button_click.target.style.display = "none";
                    dock.style.width = dock.offsetWidth - 60 + "px";
                    remove.style.display = "none";
                    localStorage.removeItem(button_click.target.id);
                    return check_dock();
                }
            } else {
                remove.style.display = "none";
            };
        };
    }
    window.onclick = function () {
        remove.style.display = "none";
    }
}

function check_dock() {
    var button = document.querySelectorAll("#dock button");
    for (var i = 0; i < button.length - 1; i += 1) {
        if (button[i].style.display == "none") {
            console.log(10);
            button[button.length-1].style.display = "block";
            return;
        }
    }
    button[button.length-1].style.display="none";
}