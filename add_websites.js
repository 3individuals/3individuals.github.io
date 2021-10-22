function add_website_button() {
  var add_website_menu = document.getElementById("add_website_menu");

  if (add_website_menu.style.display == "none") {
    add_website_menu.style.display = "flex";

    document.getElementById("website_url").value = null;
    document.getElementById("website_name").value = null;
  } else {
    add_website_menu.style.display = "none";
  }
  document.getElementById("website_present").style.display = "none";
  document.getElementById("input_empty").style.display = "none";
  document.getElementById("char_length").style.display = "none";
}

function add_website() {
  document.getElementById("website_present").style.display = "none";
  document.getElementById("input_empty").style.display = "none";
  document.getElementById("char_length").style.display = "none";

  var url = document.getElementById("website_url").value;
  var name = document.getElementById("website_name").value;

  if (check_input(url.toLowerCase(), name) == 1) {
    return;
  }

  document.getElementById("add_website_menu").style.display = "none";

  var buttons = document.querySelectorAll("#outer_box button");

  for (var i = 0; i < buttons.length - 1; i += 1) {
    if (buttons[i].style.display == "none") {
      var box = document.getElementById("box");
      if (i < 4) {
        box.style.width = box.offsetWidth + 80 + "px";
      }
      if (i == 4 || i == 8) {
        box.style.height = box.offsetHeight + 70 + "px";
      }
      buttons[i].style.display = "block";

      var button_list = JSON.parse(localStorage.getItem("button"));
      if (button_list == null) {
        button_list = [];
      }
      button_list.push({ id: buttons[i].id, name: name, url: url.toLowerCase() });
      localStorage.setItem("button", JSON.stringify(button_list));

      if (JSON.parse(localStorage.getItem("button")).length < 5) {
        add_column();
      }

      buttons[i].innerHTML = name;
      check_box();
      break;
    }
  }
}

function check_input(url, name) {
  if (name.length > 10) {
    document.getElementById("char_length").style.display = "block";
    return 1;
  }
  if (name.replace(" ", "").length == 0 || url.replace(" ", "").length == 0) {
    document.getElementById("input_empty").style.display = "block";
    return 1;
  }

  if (localStorage.getItem("button") != null) {
    for (
      var i = 0;
      i < JSON.parse(localStorage.getItem("button")).length;
      i += 1
    ) {
      if (url == JSON.parse(localStorage.getItem("button"))[i]["url"]) {
        document.getElementById("website_present").style.display = "block";
        return 1;
      }
    }
  }
}
