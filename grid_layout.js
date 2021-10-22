function add_column() {
  var fr = "";
  for (i in JSON.parse(localStorage.getItem("button"))) {
    if (i < 4) {
      fr += "2fr ";
    } else {
      break;
    }
  }
  document.getElementById("box").style.gridTemplateColumns = fr;
}

function delete_column() {
  var button_grid = document.getElementById("box").style.gridTemplateColumns;
  document.getElementById("box").style.gridTemplateColumns =
    button_grid.replace("2fr ", "");
}
