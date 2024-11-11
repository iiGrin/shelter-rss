window.addEventListener("DOMContentLoaded", () => {

    const
        body = document.querySelector("body"),
        hamburger = document.querySelector(".hamburger"),
        navMenu = document.querySelector(".nav-menu"),
        navMenuLinks = document.querySelectorAll(".nav-menu__list");

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

    // // Modal
    // function showModalContent() {
    //     popup.classList.add('popup_active');
    //     body.classList.add('body_lock');
    //     console.log("modal");
    // }

    // sliderContent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('button_popup')) {
    //         popupButtons.forEach((item) => {
    //             if (target == item) {
    //                 showModalContent();
    //             }
    //         });
    //     }
    // });

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
            const slide = document.createElement("li");
            if (!this.classes.length) {
                this.slide = "splide__slide";
                slide.classList.add(this.slide);
            } else {
                this.classes.forEach(className => slide.classList.add(className))
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

    const
        sliderContent = document.querySelector('.slider__content'),
        sliderItemsWrapper = document.querySelector('.slider__content__items'),
        nextBtn = document.querySelector('#next'),
        prevBtn = document.querySelector('#prev');

    let cards = [], // Массив для хранения карточек
        currentSlide = 0, // Индекс текущего слайда
        cardCount = 0; // Количество карточек

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
            data.forEach((item) => {
                new PetCard(item.src, item.alt, item.name, '.splide .splide__list').render(); // отрисовка карточек по полученным дынным 
            })

            const slider = new Splide('.splide', {
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
        })
});


