class Card {
    constructor(frontSource, backSource, type, openHandler) {
        this._isOpened = false;
        this._isClickable = false;
        this._frontSource = this.backgroundUrl(frontSource);
        this._backSource = this.backgroundUrl(backSource);
        this._element = this._createElement();
        this._type = type;
        this._openHandler = openHandler;
    }
    get type() {
        return this._type;
    }
    turnOff() {
        this._isClickable = false;
    }
    turnOn() {
        this._isClickable = true;
    }
    backgroundUrl(url) {
        return `url(${url})`;
    }
    _createElement() {
        const el = document.createElement('div');
        el.className = 'card';
        el.style.backgroundImage = this._backSource;
        el.onclick = this._onclick.bind(this);
        return el;
    }
    _onclick(event) {
        if (this._isOpened || !this._isClickable)
            return;
        this._openHandler(this, this._turnOver.bind(this, this._backSource, this._frontSource), () => { });
    }
    _animate(fromSource, toSource, delay = 1000) {
        this._element.animate([
            {
                transform: 'rotateY(0)',
                backgroundImage: fromSource,
            },
            {
                transform: 'rotateY(360deg)',
                backgroundImage: toSource,
            }
        ], delay);
    }
    close() {
        if (!this._isOpened)
            return;
        this._turnOver(this._frontSource, this._backSource);
    }
    _turnOver(from, to) {
        this._isOpened = !this._isOpened;
        this._animate(from, to);
        this._element.style.backgroundImage = to;
    }
    render(rootEl) {
        rootEl.appendChild(this._element);
    }
    remove(rootEl) {
        rootEl.removeChild(this._element);
    }
}
export default Card;
