function open_website(id){
    for (i in JSON.parse(localStorage.getItem("button"))){
        if (JSON.parse(localStorage.getItem("button"))[i]["id"]==id){
            open(JSON.parse(localStorage.getItem("button"))[i]["url"])
        }
    }
}