function to_search(){
  var search = document.getElementById("search_bar");
  search.addEventListener("keyup", function (button){
    if (button.key == "Enter"){
      if (search.value.replace(/\s/g, "").length != 0){
        window.open("https://www.google.com/search?q=" + search.value);
        search.value = null;
      }
    }
  });
}
