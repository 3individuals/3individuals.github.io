function menu_button(){
  var menu_button = document.getElementById("menu_button");
  var menu = document.querySelector(".menu");
  var walls = document.getElementById("walls");

  if (menu.style.display == "none"){
    menu_button.innerText = "close";
    menu.style.display = "grid";
  } else{
    menu_button.innerText = "backgrounds";
    menu.style.display = "none";
    walls.style.display = "none";
  }
}
