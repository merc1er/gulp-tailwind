// Custom JavaScript

// Menu

const menu      = document.getElementById("menu");
const openMenu  = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.onclick = function () {menu.classList.remove("hidden");};
closeMenu.onclick = function () {menu.classList.add("hidden");};
