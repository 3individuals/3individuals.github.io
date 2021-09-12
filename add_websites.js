function add_website_button(){
    if (document.getElementById("add_website_menu").style.display=="none"){
        document.getElementById("add_website_menu").style.display="flex"
    }else{
        document.getElementById("add_website_menu").style.display="none"
    }
}
function add_website(){
    document.getElementById("add_website_menu").style.display="none"
}