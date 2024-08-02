'use strict'

window.addEventListener("DOMContentLoaded", () => {

    const pets = [
        {
            name: "Jennifer",
            img: "img/pets/pets-jennifer.png",
            type: "Dog",
            breed: "Labrador",
            description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            age: "2 months",
            inoculations: [
                "none"
            ],
            diseases: [
                "none"
            ],
            parasites: [
                "none"
            ]
        },
        {
            "name": "Sophia",
            "img": "img/pets/pets-sophia.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": [
                "parvovirus"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Woody",
            "img": "img/pets/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": [
                "adenovirus",
                "distemper"
            ],
            "diseases": [
                "right back leg mobility reduced"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Scarlet",
            "img": "img/pets/pets-scarlet.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": [
                "parainfluenza"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Katrine",
            "img": "img/pets/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": [
                "panleukopenia"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Timmy",
            "img": "img/pets/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": [
                "calicivirus",
                "viral rhinotracheitis"
            ],
            "diseases": [
                "kidney stones"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Freddie",
            "img": "img/pets/pets-freddie.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": [
                "rabies"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Charly",
            "img": "img/pets/pets-charly.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": [
                "bordetella bronchiseptica",
                "leptospirosis"
            ],
            "diseases": [
                "deafness",
                "blindness"
            ],
            "parasites": [
                "lice",
                "fleas"
            ]
        }
    ]

    const
        body = document.querySelector("body"),
        hamburger = document.querySelector(".hamburger"),
        navMenu = document.querySelector(".nav-menu"),
        navMenuLinks = document.querySelectorAll(".nav-menu__list"),
        popup = document.querySelector(".popup"),
        petCardContent = popup.querySelector('.pet-card__info'),
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


    // SHOW POPUP
    // petCardContent.innerHTML = `
    //         <img src="img/pets/pets-jennifer.png" alt="" class="pet-card__photo">
    //         <div class="pet-card__info">
    //             <h3 class="heading heading_pet-card">Jennifer</h3>
    //             <div class="pet-card__species">Dog - Labrador</div>
    //             <p class="pet-card__descr">
    //                 Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever
    //                 home.
    //                 This girl really enjoys being able to go outside to run and play, but won't hesitate to play
    //                 up
    //                 a storm in the house if she has all of her favorite toys.
    //             </p>
    //             <ul class="param">
    //                 <li class="age"><span>Age:</span> </li>
    //                 <li class="Inoculation"><span>Inoculation:</span> </li>
    //                 <li class="Diseases"><span>Diseases:</span> </li>
    //                 <li class="Parasites"><span>Parasites:</span> </li>
    //             </ul>
    //         </div>
    // `;

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

    popupClose.addEventListener("click", () => {
        popup.classList.remove("popup_active");
        body.classList.remove("body_lock");
    });

    // SLIDER 
    const
        slides = document.querySelector(".slider__content"),
        prevButton = document.querySelector("#prev"),
        nextButton = document.querySelector("#next");

    let currentSlide = 0;

    //создаем слайд на основе данных из массива объектов
    function createSlide(data) {
        const slide = document.querySelector(".slider__item");
        const imgSrc = data.img;
        const imgAlt = data.name;
        const petName = data.name;

        slide.innerHTML = `
        <div class="slider__item__photo">
            <img src=${imgSrc} alt=${imgAlt}>
        </div>
        <div class="slider__item__descr">
            <h3 class="heading heading_item">${petName}</h3>
            <button class="button button_item button_popup">Learn more</button>
        </div>
    `

        return slide;
    }

    function updateSlider() {

        // Получаем индекс текущего слайда
        const startIndex = currentSlide - 1;
        const endIndex = currentSlide + 1;


        // Создаем слайды
        for (let i = startIndex; i <= endIndex; i++) {
            const index = (i + pets.length) % pets.length;
            const slide = createSlide(pets[index]);
            slide.classList.add('active');
            slides.appendChild(slide);
        }


        // Удаляем лишние слайды, если их больше 3
        // while (slides.children.length > 3) {
        //     // Добавляем класс для анимации удаления
        //     const slideToRemove = slides.firstChild;
        //     slideToRemove.classList.add('remove');
        //     }
    }


    // Обработчики кликов на кнопки
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + pets.length) % pets.length;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % pets.length;
        updateSlider();
    });


    // Инициализация слайдера
    updateSlider();
});


