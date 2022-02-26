function change_bg(src){
  document.getElementById("main_bg").src = src;
  localStorage.setItem("bg", src);
}

function show_walls(id,value){
  var walls_list = document.getElementById("walls");
  walls_list.style.display = "grid";
  walls_list.innerHTML = null
  
  fetch(id)
  .then(data => data.json())
  .then(walls => {
    for (i in walls["tree"]){
      walls_list.innerHTML+="<input type=\"image\" src=\"https://raw.githubusercontent.com/3individuals/wallpapers/master/" + value + "/" + walls["tree"][i]["path"] + "\" onclick=\"change_bg(src)\"/>";
    }

    var rows = walls_list.childNodes.length;
    if (rows % 2 != 0){
      rows+=1;
    }
    walls_list.style.gridTemplateRows = "repeat(" + rows/2 + ",70px)";
  })
}