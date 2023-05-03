//sidebar open close js
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-link .bx-x");
const navLinks = document.getElementById("nav-links");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
});

//sidebar sub menu open close js
const arrowBtn = document.getElementById("arrow-down");
arrowBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show1");
})