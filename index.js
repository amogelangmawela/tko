// Updating the year on the footer (Yearly)
const year = new Date();
let getCurrentYear = year.getFullYear();

// Fixing the nav-bar for the small screens
let sideMenu = document.getElementById("side-menu");

function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-300px";
}
