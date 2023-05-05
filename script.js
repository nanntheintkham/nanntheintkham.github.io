
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-link .bx-x");
const navLinks = document.getElementById("nav-links");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
});

const dropdownLink = document.getElementById("more");
const dropdownMenu = document.getElementById("sub-item");
const toggleArrow = document.getElementById("arrow-down");
// Toggle dropdown function
const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownLink.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    }
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

