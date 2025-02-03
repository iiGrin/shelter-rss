import header from './modules/header';
import PetCard from './modules/cards';
import slider from './modules/slider';
import pagination from './modules/pagination';

window.addEventListener("DOMContentLoaded", () => {
    const page = document.body.getAttribute("data-page");

    if (page === "main-page") {
        header(
            ".hamburger",
            ".nav-menu",
            ".nav-menu__list-item"
        );
        slider(
            PetCard,
            '.splide .splide__list'
        );
    } else if (page === "pets-page") {
        header(
            ".hamburger",
            ".nav-menu",
            ".nav-menu__list-item"
        );
        pagination(
            PetCard,
            '.slider__list',
            '.slider__page-num',
            '.button_prev',
            '.button_next',
            '.button_start-page',
            '.button_end-page'
        );
    }
});


