class Card{
    private readonly _frontSource: string;
    private readonly _backSource: string;
    private readonly _element: HTMLDivElement;
    private _isOpened: boolean = false;
    private readonly _type: string;
    get type(){
        return this._type;
    }

    private _isClickable: boolean = false;
    turnOff(){
        this._isClickable = false;
    }
    turnOn(){
        this._isClickable = true;
    }

    private _openHandler: Function;

    constructor(frontSource: string, backSource: string, type: string, openHandler: Function) {
        this._frontSource = this.backgroundUrl(frontSource);
        this._backSource = this.backgroundUrl(backSource);
        this._element = this._createElement();
        this._type = type;
        this._openHandler = openHandler;
    }

    private backgroundUrl(url: string){
        return `url(${url})`;
    }

    private _createElement(): HTMLDivElement{
        const el = document.createElement('div');
        el.className = 'card';
        el.style.backgroundImage = this._backSource;
        el.onclick = this._onclick.bind(this);
        return el;
    }

    private _onclick(event: MouseEvent){
        if(this._isOpened || !this._isClickable) return;
        this._openHandler(this, this._turnOver.bind(this, this._backSource, this._frontSource), () => {});
    }

    private _animate(fromSource: string, toSource: string, delay: number = 1000){
        this._element.animate([
            { // from
                transform: 'rotateY(0)',
                backgroundImage: fromSource,
            },
            { // to
                transform: 'rotateY(360deg)',
                backgroundImage: toSource,
            }
        ], delay);
    }

    close(){
        if(!this._isOpened) return;
        this._turnOver(this._frontSource, this._backSource);
    }

    private _turnOver(from: string, to: string, ){
        this._isOpened = !this._isOpened;
        this._animate(from, to);
        this._element.style.backgroundImage = to;
    }

    render(rootEl: HTMLElement){
        rootEl.appendChild(this._element);
    }

    remove(rootEl: HTMLElement){
        rootEl.removeChild(this._element);
    }
}

export default Card;
