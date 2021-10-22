function check_box(){
    if (JSON.parse(localStorage.getItem("button")).length==12){
        document.getElementById("remove").style.display="none"
    }
}