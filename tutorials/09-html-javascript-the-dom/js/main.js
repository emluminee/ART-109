// console.log("main script loaded");

// Select HTML elements
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

// Change header with button click
changeHeaderButton.addEventListener("click", () => {
    header.textContent = "bloom";
});

// Change theme button text
function changeThemeButtonText() {
    if (document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light Theme";
    } else {
        changeThemeButton.textContent = "Switch to Dark Theme";
    }
}

// Toggle color theme
changeThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    changeThemeButtonText();
});

// Toggle image visibility
img1.addEventListener("click", () => {
    img2.classList.toggle("hidden");
});

img2.addEventListener("click", () => {
    img3.classList.toggle("hidden");
});
