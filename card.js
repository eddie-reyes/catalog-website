class Card {
    constructor(URL, title, info) {
        this.URL = URL;
        this.title = title;
        this.info = info;
    }

    setElement(element) {
        this.element = element;
    }

    setElementContent() {
        this.element.style.display = 'block';

        const cardHeader = this.element.querySelector('h2');
        cardHeader.textContent = this.title;

        const cardImage = this.element.querySelector('img');
        cardImage.src = this.URL;
        cardImage.alt = this.title + ' Display';

        const cardOwner = this.element.querySelector('#owner');
        cardOwner.textContent += this.info.owner;

        const cardYear = this.element.querySelector('#year');
        cardYear.textContent += this.info.year;

        const cardType = this.element.querySelector('#type');
        cardType.textContent += this.info.type;
    }
}

export default Card;
