setInterval(time, 60000)

function time() {
    var time = new Date()
    document.getElementById('clock').innerText = time.getHours()+":"+time.getMinutes()
}