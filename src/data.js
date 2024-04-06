import Card from './card.js';
import URLS from './urls.js';

const cards = [
    new Card(URLS.KURT_COBAIN_URL, 'Martin D-18E', {
        owner: 'Kurt Cobain',
        type: 'Acoustic',
        year: 1959,
    }),
    new Card(URLS.EVH_URL, 'Frankenstrat', {
        owner: 'Eddie Van Halen',
        type: 'Electric',
        year: 1977,
    }),
    new Card(URLS.TRIGGER_URL, 'Trigger', {
        owner: 'Willie Nelson',
        type: 'Acoustic',
        year: 1969,
    }),
];

export default cards;
