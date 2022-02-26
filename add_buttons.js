window.onload = function (){
  if (localStorage.getItem("bg") == undefined){
    document.getElementById("main_bg").src = "https://raw.githubusercontent.com/3individuals/wallpapers/main/brown/pexels-roberto-nickson-2559941.jpg";
    localStorage.setItem("bg", "https://raw.githubusercontent.com/3individuals/wallpapers/main/brown/pexels-roberto-nickson-2559941.jpg");
  } else{
    document.getElementById("main_bg").src = localStorage.getItem("bg");
  }

  if (localStorage.getItem("button") != null){
    check_box();
    var buttons = document.querySelectorAll("#outer_box button");
    for (var i = 0;i < JSON.parse(localStorage.getItem("button")).length;i += 1){
      var button = document.getElementById(buttons[i].id);
      button.style.display = "block";
      button.innerText = JSON.parse(localStorage.getItem("button"))[i]["name"];
      button.setAttribute("onclick","window.open('" + JSON.parse(localStorage.getItem("button"))[i]["url"] + "')")
      
      if (i < 4){
        add_column();
      }
    }
  }
};
