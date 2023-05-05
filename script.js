
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
});

//nav bar active menu
let links = document.querySelectorAll("nav .navbar .nav-link .links li a");
let bodyId = document.querySelector("body").id;

for (let link of links) {
    if (link.dataset.active == bodyId) {
        link.classList.add("active");
    }
}

