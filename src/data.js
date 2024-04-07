import Card from './card.js';
import URLS from './urls.js';

//array of card objects represents our data
const cards = [
    new Card(URLS.ERIC_CLAPTON_URL, 'Blackie', {
        owner: 'Eric Clapton',
        type: 'Electric',
        year: 1956,
    }),
    new Card(URLS.PRINCE_URL, 'Cloud', {
        owner: 'Prince',
        type: 'Electric',
        year: 1984,
    }),
    new Card(URLS.JIMMY_PAGE_URL, 'EDS-1275 Doubleneck', {
        owner: 'Jimmy Page',
        type: 'Electric',
        year: 1969,
    }),
    new Card(URLS.EVH_URL, 'Frankenstrat', {
        owner: 'Eddie Van Halen',
        type: 'Electric',
        year: 1977,
    }),
    new Card(URLS.JOHN_LENNON_URL, 'Gibson J-160E', {
        owner: 'John Lennon',
        type: 'Acoustic',
        year: 1954,
    }),
    new Card(URLS.ANGUS_YOUNG_URL, 'Gibson SG', {
        owner: 'Angus Young',
        type: 'Electric',
        year: 1968,
    }),
    new Card(URLS.PAUL_MCCARTNEY_URL, 'Hoffner "Violin" Bass', {
        owner: 'Paul McCartney',
        type: 'Electric',
        year: 1963,
    }),
    new Card(URLS.KING_URL, 'Lucille', {
        owner: 'B.B. King',
        type: 'Electric',
        year: 1949,
    }),
    new Card(URLS.KURT_COBAIN_URL, 'Martin D-18E', {
        owner: 'Kurt Cobain',
        type: 'Acoustic',
        year: 1959,
    }),
    new Card(URLS.CLARENCE_WHITE_URL, 'Martin D-28', {
        owner: 'Clarence White',
        type: 'Acoustic',
        year: 1935,
    }),
    new Card(URLS.SRV_URL, 'Number One', {
        owner: 'Stevie R. Vaughan',
        type: 'Electric',
        year: 1959,
    }),
    new Card(URLS.BRIAN_MAY_URL, 'Red Special', {
        owner: 'Brian May',
        type: 'Electric',
        year: 1963,
    }),
    new Card(URLS.GEORGE_HARRISON_URL, 'Rocky', {
        owner: 'George Harrison',
        type: 'Electric',
        year: 1962,
    }),
    new Card(URLS.JERRY_GARCIA_URL, 'Tiger', {
        owner: 'Jerry Garcia',
        type: 'Electric',
        year: 1979,
    }),
    new Card(URLS.TRIGGER_URL, 'Trigger', {
        owner: 'Willie Nelson',
        type: 'Acoustic',
        year: 1969,
    }),
];

export default cards;
