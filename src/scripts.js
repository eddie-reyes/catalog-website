import cards from './data.js';
import { sortByYear, filterType, onSearchBar } from './utils.js';

const cardContainer = document.getElementById('card-container');
const templateCard = document.querySelector('.card');

const sortByYearSelect = document.getElementById('sort');
const filterTypeSelect = document.getElementById('filter');
const searchBar = document.getElementById('search');

function showCards() {
    for (let card of cards) {
        const nextCard = templateCard.cloneNode(true);
        card.setElement(nextCard);
        card.setElementContent();
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener('DOMContentLoaded', showCards);
sortByYearSelect.addEventListener('change', e => sortByYear(e.target.value));
filterTypeSelect.addEventListener('change', e => filterType(e.target.value));
searchBar.addEventListener('input', e => onSearchBar(e.target.value));

export default cardContainer;
