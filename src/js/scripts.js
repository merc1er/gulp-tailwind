// Custom JavaScript

// Menu

const menu      = document.getElementById("menu");
const openMenu  = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.onclick = function () {console.log(menu.classList.remove("hidden"));};
closeMenu.onclick = function () {console.log(menu.classList.add("hidden"));};
