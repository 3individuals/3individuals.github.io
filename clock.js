setInterval(time, 1000)

function time() {
    var time = new Date()
    document.getElementById('clock').innerText = time.toLocaleTimeString()
}