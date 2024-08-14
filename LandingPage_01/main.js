const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");

// click menu button -> show menu and close menu
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  // initialize close icon menu button
  const isOpen = navLinks.classList.contains("open");
  menuIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

// click any link inside the menu -> close menu
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__content .bar", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});
