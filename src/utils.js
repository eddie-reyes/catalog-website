import cardContainer from './scripts.js';
import cards from './data.js';

export function sortByYear(option) {
    //sort cards by year
    switch (option) {
        case 'ascending':
            cards.sort((left, right) => left.info.year - right.info.year); //left < right
            break;
        case 'descending':
            cards.sort((left, right) => right.info.year - left.info.year); //right < left
            break;
    }

    cards.forEach(card => cardContainer.appendChild(card.element)); //append cards in container with new order
}

export function filterType(option) {
    if (option === 'default') {
        //show all if default is selected
        cards.forEach(card => (card.element.style.display = 'block'));
        return;
    }

    //filter cards by type of instrument (acoustic, electric)
    cards.forEach(card => {
        if (card.info.type !== option) {
            card.element.style.display = 'none'; //hide card if type is not option
        } else {
            card.element.style.display = 'block'; //show card if type is option
        }
    });
}

export function onSearchBar(input) {
    let inputLowerCase = input.toLowerCase(); //make search not case-sensitive

    cards.forEach(card => {
        let titleLowerCase = card.title.toLowerCase();

        if (!titleLowerCase.includes(inputLowerCase)) {
            card.element.style.display = 'none'; //if select value is not a substr of card title, hide
        } else {
            card.element.style.display = 'block'; //if select value is a substr of card title, show
        }
    });
}
