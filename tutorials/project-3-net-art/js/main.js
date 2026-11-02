// console.log("main script loaded");

// Select HTML elements
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

// Change header when button is clicked
changeHeaderButton.addEventListener("click", () => {
    header.textContent = "Bloom";
});

// Change theme button text
function changeThemeButtonText() {
    if (document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light Theme";
    } else {
        changeThemeButton.textContent = "Switch to Dark Theme";
    }
}

// Toggle dark/light theme
changeThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    changeThemeButtonText();
});

// Set the correct button text when the page loads
changeThemeButtonText();

// Show the second image when the first image is clicked
img1.addEventListener("click", () => {
    img2.classList.toggle("hidden");
});

// Show the third image when the second image is clicked
img2.addEventListener("click", () => {
    img3.classList.toggle("hidden");
});
