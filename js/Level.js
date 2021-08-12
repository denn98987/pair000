import Card from "./Card.js";
class Level {
    constructor(cardSources, suit, table, countCardinPair = 2) {
        this._openedCards = [];
        this._countOpenedCards = 0;
        this._cards = this._generateCards(cardSources, suit, countCardinPair);
        this._countCardsInPair = countCardinPair;
        this._table = table;
    }
    start() {
        this._cards.forEach((card) => {
            card.render(this._table);
            card.turnOn();
        });
    }
    finish() {
        alert(this._countOpenedCards === this._cards.length ? 'win' : 'lose');
    }
    pause() {
        this._cards.map(card => card.turnOff());
    }
    resume() {
        this._cards.map(card => card.turnOn());
    }
    closeAll() {
        this._cards.forEach((card) => card.close());
    }
    _generateCards(sources, suit, countCardinPair) {
        const cards = [];
        for (let i = 0; i < sources.length; i++) {
            for (let j = 0; j < countCardinPair; j++) {
                cards.push(new Card(sources[i], suit, i.toString(), this._openCardHandler.bind(this)));
            }
        }
        return cards;
    }
    _openCardHandler(card, completeHandler, errorHandler) {
        completeHandler();
        this._openedCards.push(card);
        this._openedCards.map(card => card.turnOff());
        setTimeout(() => {
            if (this._openedCards.length === this._countCardsInPair) {
                if (this._isWinStep()) {
                    this._openedCards.map(card => card.remove(this._table));
                    this._countOpenedCards += this._openedCards.length;
                }
                else {
                    this.closeAll();
                }
                if (this._countOpenedCards === this._cards.length) {
                    alert('win');
                }
                this._openedCards = [];
            }
        }, 2000);
        this._cards.map(card => card.turnOn());
    }
    _isWinStep() {
        const types = this._openedCards.map(card => Number(card.type));
        return !Boolean(types.reduce((acc, curr) => acc ^ curr, types.pop()));
    }
}
export default Level;
