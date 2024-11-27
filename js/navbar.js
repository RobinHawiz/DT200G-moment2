let veganburger = document.querySelector(".veganburger");
let veganburgerLines = document.querySelectorAll(".line");
let menu = document.querySelector(".Menu");
let nav = document.querySelector("nav");
let ulLinks = document.querySelector(".ul-links");
let headerContainer = document.querySelector(".header-container");

veganburger.addEventListener("click", toggleNavlinks);

// Toggles styling for nav-links and the veganburger
function toggleNavlinks() {
  toggleNav();
  toggleVeganburger();
}

// Displays nav, places the veganburger inside nav and changes the veganbuger paragraph text
function toggleNav() {
  if (!nav.classList.contains("toggle-nav")) {
    // Places the veganburger inside nav
    nav.insertBefore(veganburger, ulLinks);
    // Changes the veganburger paragraph text
    menu.innerText = "Stäng meny";
  } else {
    // Places the veganburger back to the nav
    headerContainer.appendChild(veganburger);
    menu.innerText = "Meny";
  }
  // Toggles styling for nav (display: flex)
  nav.classList.toggle("toggle-nav");
}

// Toggles styling to each veganburger line
function toggleVeganburger() {
  veganburgerLines.forEach((line) => {
    line.classList.toggle("toggle-line");
  });
}
