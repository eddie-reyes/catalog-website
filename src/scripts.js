import cards from './data.js';
import { sortByYear, filterType, onSearchBar } from './utils.js'; //utility functions

//get html elements
const cardContainer = document.getElementById('card-container');
const templateCard = document.querySelector('.card');

const sortByYearSelect = document.getElementById('sort');
const filterTypeSelect = document.getElementById('filter');
const searchBar = document.getElementById('search');

//init function
function showCards() {
    cards.forEach(card => {
        const nextCard = templateCard.cloneNode(true); //get copy of card element
        card.setElement(nextCard); //setters
        card.setElementContent();
        cardContainer.appendChild(nextCard); // Add new card to the container
    });
}

//event listeners
document.addEventListener('DOMContentLoaded', showCards);
sortByYearSelect.addEventListener('change', e => sortByYear(e.target.value));
filterTypeSelect.addEventListener('change', e => filterType(e.target.value));
searchBar.addEventListener('input', e => onSearchBar(e.target.value));

export default cardContainer;
