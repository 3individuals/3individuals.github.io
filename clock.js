function time(){
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;

  let time = hh + ":" + mm;

  document.getElementById("clock").innerText = time;
  await sleep(30000);
}

time()
