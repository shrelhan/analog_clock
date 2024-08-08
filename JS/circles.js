setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let hh = document.getElementById("hh");
  let ss = document.getElementById("ss");
  let mm = document.getElementById("mm");

  hh.style.strokeDashoffset = 510 - (h * 510) / 12;
  mm.style.strokeDashoffset = 630 - (m * 630) / 60;
  ss.style.strokeDashoffset = 760 - (s * 760) / 60;
});
