let veganburger = document.querySelector(".veganburger");
let veganburgerLines = document.querySelectorAll(".line");
let menu = document.querySelector(".Menu");
let navLinks = document.querySelector(".nav-links");
let ulLinks = document.querySelector(".ul-links");
let nav = document.querySelector("nav");

veganburger.addEventListener("click", toggleNavlinks);

// Toggles styling for nav-links and the veganburger
function toggleNavlinks() {
  toggleNav();
  toggleVeganburger();
}

// Displays navlinks, places the veganburger inside navlinks and changes the veganbuger paragraph text.
function toggleNav() {
  if (!navLinks.classList.contains("toggle-nav-links")) {
    // Places the veganburger inside navlinks
    navLinks.insertBefore(veganburger, ulLinks);
    // Changes the veganburger paragraph text
    menu.innerText = "Stäng meny";
  } else {
    // Places the veganburger back to the nav
    nav.appendChild(veganburger);
    menu.innerText = "Meny";
  }
  // Toggles styling for navlinks (display: flex)
  navLinks.classList.toggle("toggle-nav-links");
}

// Toggles styling to each veganburger line
function toggleVeganburger() {
  veganburgerLines.forEach((line) => {
    line.classList.toggle("toggle-line");
  });
}
