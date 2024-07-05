window.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector(".nav-menu"),
    navMenuLink = document.querySelectorAll(".nav-menu__link"),
    hamburger = document.querySelector(".hamburger"),
    body = document.querySelector("body"),
    popup = document.querySelector(".popup"),
    popupButton = document.querySelectorAll(".button_popup"),
    popupClose = document.querySelector(".close-popup");
    ;

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

  popupButton.forEach((item) => {
    item.addEventListener("click", () => {
      popup.classList.toggle("popup_active");
      body.classList.toggle("body_lock");
    })
  });

  popupClose.addEventListener("click", () => {
    popup.classList.remove("popup_active");
    body.classList.remove("body_lock");
  });
});
