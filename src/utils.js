import cardContainer from './scripts.js';
import cards from './data.js';

export function sortByYear(option) {
    switch (option) {
        case 'ascending':
            cards.sort((left, right) => left.info.year - right.info.year);
            break;
        case 'descending':
            cards.sort((left, right) => right.info.year - left.info.year);
            break;
    }

    cards.forEach(card => cardContainer.appendChild(card.element));
}

export function filterType(option) {
    cards.forEach(card => {
        if (card.info.type !== option) {
            card.element.style.display = 'none';
        } else {
            card.element.style.display = 'block';
        }
    });
}

export function onSearchBar(input) {
    cards.forEach(card => {
        let titleLowerCase = card.title.toLowerCase();
        let inputLowerCase = input.toLowerCase();

        if (!titleLowerCase.includes(inputLowerCase)) {
            card.element.style.display = 'none';
        } else {
            card.element.style.display = 'block';
        }
    });
}

function quoteAlert() {
    console.log('Button Clicked!');
    alert('I guess I can kiss heaven goodbye, because it got to be a sin to look this good!');
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
