function open_website(id){
    open(JSON.parse(localStorage.getItem(id))["url"]);
}