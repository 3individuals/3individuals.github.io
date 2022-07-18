function remove(){
  var buttons = document.querySelector("#outer_box");

  buttons.oncontextmenu = function (button_click){
    button_click.preventDefault();
    if (button_click.currentTarget != button_click.target && button_click.target.id != "add_button" && button_click.target.id != "box"){
      var buttons_count = JSON.parse(localStorage.getItem("button")).length;
      document.getElementById("box").removeChild(button_click.target);
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
      return check_box();
    }
  };
}