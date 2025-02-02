import { getResource } from "./utils.js";
import PetCard from "./PetCard.js";

window.addEventListener("DOMContentLoaded", () => {

    // Header menu actions
    const
        hamburger = document.querySelector(".hamburger"),
        navMenu = document.querySelector(".nav-menu"),
        navMenuLinks = navMenu.querySelectorAll(".nav-menu__list-item");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active");
        navMenu.classList.toggle("nav-menu_active");
    });

    navMenuLinks.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("hamburger_active");
            navMenu.classList.remove("nav-menu_active");
        });
    });

    getResource('http://localhost:3000/pets') // get data and cards render
        .then(data => {
            data.forEach((pet) => {
                new PetCard(pet.src, pet.alt, pet.name, '.splide .splide__list').render();
            });

            const slider = new Splide('.splide', { // slider options
                type: 'loop',
                perPage: 3,
                perMove: 1,
                fixedWidth: '270px',
                gap: '90px',
                breakpoints: {
                    992: {
                        gap: '40px'
                    }
                }
            });
            slider.mount();
        });
});


