function remove(){
  var buttons = document.querySelector("#outer_box");
  var remove = document.getElementById("remove");

  buttons.oncontextmenu = function (button_click){
    button_click.preventDefault();
    if (button_click.currentTarget != button_click.target && button_click.target.id != "add_button" && button_click.target.id != "box"){
      if (remove.style.display == "none"){
        remove.style.display = "block";
        remove.style.left = button_click.clientX + "px";
        remove.style.top = button_click.clientY + "px";

        button_click.target.addEventListener("mouseout", function (){
          setTimeout(function (){
            remove.style.display = "none";
          }, 3000);
        });

        remove.onclick = function (){
          var buttons_count = JSON.parse(localStorage.getItem("button")).length;
          button_click.target.style.display = "none";
          remove.style.display = "none";
          if (buttons_count == 1){
            localStorage.removeItem("button");
          }
          var button_list = JSON.parse(localStorage.getItem("button"));
          for (i in button_list){
            if (button_list[i]["id"] == button_click.target.id){
              button_list.splice(i, 1);
              localStorage.setItem("button", JSON.stringify(button_list));
              break;
            }
          }
          if (buttons_count < 4){
            delete_column();
          }
          return check_box();
        };
      } else{
        remove.style.display = "none";
      }
    }
  };
  window.onclick = function (){
    remove.style.display = "none";
  };
}
