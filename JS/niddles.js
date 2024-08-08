setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let hh = document.getElementById("hrs");
  let mn = document.getElementById("min");
  let sc = document.getElementById("sec");

  hh.style.transform = `rotate(${h * 30}deg)`;
  min.style.transform = `rotate(${m * 6}deg)`;
  sec.style.transform = `rotate(${s * 6}deg)`;
});
