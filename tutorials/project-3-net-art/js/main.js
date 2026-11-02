// console.log("main script loaded");

// Select HTML elements
const header = document.querySelector("#header");
const changeThemeButton = document.querySelector("#change-theme-button");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img8 = document.querySelector("#img8");
const img9 = document.querySelector("#img9");
const img10 = document.querySelector("#img10");
const img11 = document.querySelector("#img11");
const img12 = document.querySelector("#img12");
const img13 = document.querySelector("#img13");
const img14 = document.querySelector("#img14");
const img15 = document.querySelector("#img15");
const img16 = document.querySelector("#img16");


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
