// typing animation
var typed = new Typed(".typing", {
  strings: [" ", "Web Developer", "Software Engineer", "JavaScript Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const menu = document.querySelector(".nav-toggler span");
const navbar = document.querySelector(".nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

const nav = document.querySelector(".nav li a");
const upnav = document.querySelector(".aside .nav");
navbar.addEventListener("click", () => {
  navbar.classList.remove("active");
  menu.classList.toggle("fa-times");
});


