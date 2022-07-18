window.onload = function (){
  shrink_outer_box();
  if (localStorage.getItem("bg") == undefined){
    document.getElementById("main_bg").src = "https://raw.githubusercontent.com/3individuals/wallpapers/main/brown/pexels-roberto-nickson-2559941.jpg";
    localStorage.setItem("bg", "https://raw.githubusercontent.com/3individuals/wallpapers/main/brown/pexels-roberto-nickson-2559941.jpg");
  } else{
    document.getElementById("main_bg").src = localStorage.getItem("bg");
  }

  if (localStorage.getItem("button") != null){
    check_box();
    for (var i = 0;i < JSON.parse(localStorage.getItem("button")).length;i += 1){
      create_buttons(i);
    }
  }
};
