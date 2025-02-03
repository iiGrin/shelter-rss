import { getResource } from "../services/services";
import PetCard from "./cards";

function pagination(cardsClass, parentSelector, pageNumSelector, buttonPrevSelector, buttonNextSelector, buttonStartSelector, buttonEndSelector) {

        const petsPerPage = 8;
        let currentPage = 1;
        let totalPages = 1;
        let petsData = [];
    
        const sliderList = document.querySelector(parentSelector); // pets container
        const pageNum = document.querySelector(pageNumSelector);
        const prevButton = document.querySelector(buttonPrevSelector);
        const nextButton = document.querySelector(buttonNextSelector);
        const startButton = document.querySelector(buttonStartSelector);
        const endButton = document.querySelector(buttonEndSelector);

    async function renderPug() { // get pets data
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
            new cardsClass(pet.src, pet.alt, pet.name, parentSelector).render();
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

    renderPug();
}

export default pagination;