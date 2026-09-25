// console.log("Hamburger script loaded");

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked");
    menu.classList.toggle("active");
});