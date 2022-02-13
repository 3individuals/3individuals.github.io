function add_column(){
  document.getElementById("box").style.gridTemplateColumns += " 2fr";
}

function delete_column(){
  document.getElementById("box").style.gridTemplateColumns = (document.getElementById("box").style.gridTemplateColumns).replace("2fr ", "");
}
