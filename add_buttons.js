window.onload = function () {
    var box = document.getElementById("box");

    if (localStorage.getItem("bg") == undefined) {
        document.getElementById("main_bg").src = "walls/p39.png";
        localStorage.setItem("bg", "walls/p39.png")
    } else {
        document.getElementById("main_bg").src = localStorage.getItem("bg");
    };

    check_box()

    if (localStorage.getItem("button") != null) {
        add_column()
        var buttons = document.querySelectorAll("#outer_box button")
        for (var i = 0; i < JSON.parse(localStorage.getItem("button")).length; i += 1) {
            var button = document.getElementById(buttons[i].id)
            if (i < 4) {
                box.style.width = box.offsetWidth + 80 + "px"
            };
            if (i == 4 || i == 8) {
                box.style.height = box.offsetHeight + 70 + "px"
            }
            button.style.display = "block";
            button.innerHTML = JSON.parse(localStorage.getItem("button"))[i]["name"]
        };
    };
}