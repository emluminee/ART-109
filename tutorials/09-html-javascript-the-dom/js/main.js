// console.log("main script loaded");

// select html elements
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

// chnage header with button click
changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "bloom";
});

// toggle color theme

// create function for changing button text
function changeThemeButtonText() {
    if (document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light Theme";
    } else {
        changeThemeButton.textContent = "Switch to Dark Theme";
    }
}

//clik event on button
changeThemeButton.addEventListener("click", () => {
    // add/remove dark class to body
    document.body.classList.toggle("dark");
    changeThemeButtonText();
});