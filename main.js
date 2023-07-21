let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");

sun.onclick = function() {
  document.body.classList.remove("dark-theme-variables");
  this.classList.add("active");
  moon.classList.remove("active");
}
moon.onclick = function() {
  document.body.classList.add("dark-theme-variables");
  this.classList.add("active");
  sun.classList.remove("active");
}
