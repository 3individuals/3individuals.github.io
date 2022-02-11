function check_box(){
  var button = document.getElementById("add_button");
  if (JSON.parse(localStorage.getItem("button")).length == 12){
    button.style.display = "none";
  } else{
    button.style.display = "block";
  }
}
