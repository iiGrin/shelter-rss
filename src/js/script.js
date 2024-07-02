window.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector(".nav-menu"),
      navMenuLink = document.querySelectorAll(".nav-menu__link"),
      hamburger = document.querySelector(".hamburger");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      navMenu.classList.toggle("nav-menu_active");
    });
  
    navMenuLink.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("hamburger_active");
        menu.classList.remove("nav-menu_active");
      });
    });
  });