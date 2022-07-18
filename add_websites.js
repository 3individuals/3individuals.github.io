function add_website_button(){
  var add_website_menu = document.getElementById("add_website_menu");

  if (add_website_menu.style.display == "none"){
    add_website_menu.style.display = "flex";

    document.getElementById("website_url").value = null;
    document.getElementById("website_name").value = null;
  } else{
    add_website_menu.style.display = "none";
  }
  document.getElementById("website_present").style.display = "none";
  document.getElementById("input_empty").style.display = "none";
  document.getElementById("char_length").style.display = "none";
}

function add_website(){
  document.getElementById("website_present").style.display = "none";
  document.getElementById("input_empty").style.display = "none";
  document.getElementById("char_length").style.display = "none";

  var url = document.getElementById("website_url").value;
  var name = document.getElementById("website_name").value;

  if (check_input(url.toLowerCase(), name) == 1){
    return;
  }

  document.getElementById("add_website_menu").style.display = "none";

      var button_list = JSON.parse(localStorage.getItem("button"));
      if (button_list == null){
        button_list = [];
      }
      button_list.push({ id: url, name: name, url: url.toLowerCase()});
      localStorage.setItem("button", JSON.stringify(button_list));

      create_buttons(0,url,name);

      check_box();
}

function check_input(url, name){
  if (name.length > 10){
    document.getElementById("char_length").style.display = "block";
    return 1;
  }
  if (name.replace(" ", "").length == 0 || url.replace(" ", "").length == 0){
    document.getElementById("input_empty").style.display = "block";
    return 1;
  }

  if (localStorage.getItem("button") != null){
    for (var i = 0;i < JSON.parse(localStorage.getItem("button")).length;i += 1){
      if (url == JSON.parse(localStorage.getItem("button"))[i]["url"]){
        document.getElementById("website_present").style.display = "block";
        return 1;
      }
    }
  }
}

function create_buttons(index=0,website="",website_name=""){
  var button=document.createElement("button");
  if (website!=""){
    button.id=website;
    button.innerText=website_name;
  }else{
    button.id=JSON.parse(localStorage.getItem("button"))[index]["url"];
    button.innerText=JSON.parse(localStorage.getItem("button"))[index]["name"];
  }
  button.setAttribute("onclick","window.open('" + button.id + "')");
  button.className="websites"
  document.getElementById("box").append(button);
}