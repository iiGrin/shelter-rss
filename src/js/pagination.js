import { getResource } from "./utils.js";
import PetCard from "./PetCard.js";

document.addEventListener('DOMContentLoaded', () => {

        const petsPerPage = 8;
        let currentPage = 1;
        let totalPages = 1;
        let petsData = [];
    
        const sliderList = document.querySelector('.slider__list'); // pets container
        const pageNum = document.querySelector('.slider__page-num');
        const prevButton = document.querySelector('.button_prev');
        const nextButton = document.querySelector('.button_next');
        const startButton = document.querySelector('.button_start-page');
        const endButton = document.querySelector('.button_end-page');

    async function pagination() { // get pets data
        try {
            petsData = await getResource('http://localhost:3000/pets')
            totalPages = Math.ceil(petsData.length / petsPerPage);
            renderCurrentPage(currentPage); // render pets for currentPage
            updataButtonsState(); // update buttons state for current page
        } catch (error) {
            console.error('Error data fetching:', error);
        }
    }

    function renderCurrentPage(page) {
        const startIndex = (page - 1) * petsPerPage;
        const endIndex = startIndex + petsPerPage;
        const petsToShow = petsData.slice(startIndex, endIndex);

        sliderList.innerHTML = ''; // update data list 
        petsToShow.forEach(pet => {
            new PetCard(pet.src, pet.alt, pet.name, '.slider__list', ).render();
        });
        pageNum.textContent = `${page} / ${totalPages}`; // updata page num
    }

    function updataButtonsState() { // buttons state
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
        startButton.disabled = currentPage === 1;
        endButton.disabled = currentPage === totalPages;
    }

    // buttons action 
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCurrentPage(currentPage);
            updataButtonsState();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderCurrentPage(currentPage);
            updataButtonsState();
        }
    });

    startButton.addEventListener('click', () => {
        currentPage = 1;
        renderCurrentPage(currentPage);
        updataButtonsState();
    });

    endButton.addEventListener('click', () => {
        currentPage = totalPages;
        renderCurrentPage(currentPage);
        updataButtonsState();
    });

    // Инициализация
    pagination();
});