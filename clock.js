setInterval(time, 1000);

function time() {
    var time = new Date();
    if (time.getMinutes()<10) {
        document.getElementById('clock').innerText = time.getHours() + ":0" + time.getMinutes();
    }
    else {
        document.getElementById('clock').innerText = time.getHours() + ":" + time.getMinutes();
    }
}