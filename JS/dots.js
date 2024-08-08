setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let sec_dot = document.querySelector(".sec_dot");
  let min_dot = document.querySelector(".min_dot");
  let hh_dot = document.querySelector(".hh_dot");

  sec_dot.style.transform = `rotate(${s * 6}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  hh_dot.style.transform = `rotate(${h * 30}deg)`;
});
