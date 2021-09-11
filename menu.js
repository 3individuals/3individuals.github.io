function menu_button() {
    if (document.querySelector(".menu").style.display == "none") {
        document.getElementById("menu_button").innerText = "close"
        document.querySelector(".menu").style.display = "grid"
    } else {
        document.getElementById("menu_button").innerText = "menu"
        document.querySelector(".menu").style.display = "none"
    }
}