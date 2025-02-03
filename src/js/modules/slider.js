import { getResource } from "../services/services";

function slider(cardsClass, parentSelector) {    
    getResource('http://localhost:3000/pets') // get data and cards render
        .then(data => {
            data.forEach((pet) => {
                new cardsClass(pet.src, pet.alt, pet.name, parentSelector).render();
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
}

export default slider;