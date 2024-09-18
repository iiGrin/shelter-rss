'use strict'

window.addEventListener("DOMContentLoaded", () => {

    const
        body = document.querySelector("body"),
        hamburger = document.querySelector(".hamburger"),
        navMenu = document.querySelector(".nav-menu"),
        navMenuLinks = document.querySelectorAll(".nav-menu__list"),
        popup = document.querySelector(".popup"),
        popupClose = document.querySelector(".close-popup"),
        sliderContent = document.querySelector('.slider'),
        popupButtons = sliderContent.querySelectorAll('button.button_popup');


    // HAMBURGER & MENU ACTION
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

    // Modal
    function showModalContent() {
        popup.classList.add('popup_active');
        body.classList.add('body_lock');
    }

    sliderContent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('button_popup')) {
            popupButtons.forEach((item) => {
                if (target == item) {
                    showModalContent();
                }
            });
        }
    });

    // get slider data item 
    // petCard class
    class PetCard {
        constructor(src, alt, name, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.name = name;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const slide = document.createElement("div");
            if (!this.classes.length) {
                this.slide = "slider__item";
                slide.classList.add(this.slide);
            } else {
                this.classes.forEach(className => slide.classList.add(className))
            }

            slide.innerHTML =
            `
                <div class="slider__item__photo">
                    <img src="${this.src}" alt="${this.alt}">
                </div>
                <div class="slider__item__descr">
                    <h3 class="heading heading_item">${this.name}</h3>
                    <button class="button button_item button_popup">Learn more</button>
                </div>
            `;

            this.parent.append(slide);
        }
    }

    // get data function
    const getResource = async (url) => {
        const result = await fetch(url);
        if (!result.ok) { // error get
            throw new Error(`Couldn't fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    };

    getResource('http://localhost:3000/pets')
    .then(data => {
        data.forEach(({src, alt, name}) => {
            new PetCard(src, alt, name, '.slider .slider__content').render(); // отрисовка карточек по полученным дынным 
        });
    });
});


