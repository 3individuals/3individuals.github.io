function time(){
  var clock = document.getElementById("clock");
  var date = new Date;
  var hour = date.getHours();
  var minute = date.getMinutes();

  if (hour < 10){
    hour = "0" + hour;
  }else if (minute < 10){
    minute = "0" + minute
  }

  clock.innerHTML = hour + ":" + minute;
}

setInterval(time,1000);