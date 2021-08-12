class Card {
    constructor(frontSource, backSource) {
        this._isOpened = false;
        this._frontSource = this.backgroundUrl(frontSource);
        this._backSource = this.backgroundUrl(backSource);
        this._element = this._createElement();
    }
    backgroundUrl(url) {
        return `url(${url})`;
    }
    _createElement() {
        const el = document.createElement('div');
        el.className = 'card';
        el.style.backgroundImage = this._backSource;
        el.onclick = this._onclick;
        return el;
    }
    _onclick(event) {
        let el = event.target;
        if (this._isOpened)
            return;
        this._isOpened = !this._isOpened;
        this._animate();
        el.style.backgroundImage = this._frontSource;
    }
    _animate() {
        this._element.animate([
            {
                transform: 'rotateY(0)',
                backgroundImage: this._backSource,
            },
            {
                transform: 'rotateY(360deg)',
                backgroundImage: this._frontSource,
            }
        ], 1000);
    }
    render(rootEl) {
        rootEl.appendChild(this._element);
    }
}
export default Card;
