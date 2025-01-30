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

    class PetCard {
        constructor(src, alt, name, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.name = name;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
        }

        render() {
            const slide = document.createElement("li");
            if (!this.classes.length) {
                const defaultClass = "splide__slide";
                slide.classList.add(defaultClass);
            } else {
                this.classes.forEach(className => slide.classList.add(className));
            }

            slide.innerHTML =
                `
                    <div class="splide__slide__photo">
                        <img src="${this.src}" alt="${this.alt}">
                    </div>
                    <div class="splide__slide__descr">
                        <h3 class="heading heading_item">${this.name}</h3>
                        <button class="button button_item button_popup">Learn more</button>
                    </div>
            `;
            this.parent.append(slide);
        }
    }

    // get data function
    const getResource = async (url) => {
        try {
            const request = await fetch(url);
            if (!request.ok) {
                throw new Error(`Couldn't fetch ${url}, status: ${request.status}`);
            }
            const response = await request.json();
            return response;
        } catch (error) {
            console.error('Error: ', error);
            throw new Error(error);
        }
    };

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


