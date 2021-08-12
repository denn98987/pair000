import Level from "./Level.js";
class Game {
    constructor(sources, countPairsInLevels) {
        this._isPlaying = false;
        this._currentIndexLevel = 0;
        if (countPairsInLevels.sort()[countPairsInLevels.length - 1] > sources.length - 1)
            throw new Error('Not enough sources');
        this._table = this._createEmptyTable();
        this._levels = this._levelGenerate(sources, countPairsInLevels);
        // this._currentLevel = this._levels[0];
        this._startButton = document.getElementById('start');
        this._finishButton = document.getElementById('finish');
        this._pauseButton = document.getElementById('pause');
        this._resumeButton = document.getElementById('resume');
        this._linkHandlers();
    }
    get currentLevel() {
        return this._levels[this._currentIndexLevel];
    }
    set currentIndexLevel(index) {
        if (index > this._levels.length || index < 0)
            throw new Error('Index cannot be greater than count of levels or less than zero.');
        this._currentIndexLevel = index;
    }
    get currentIndexLevel() {
        return this._currentIndexLevel;
    }
    start(rootEl) {
        // this._table = this._createEmptyTable();
        this._isPlaying = true;
        // this._currentLevel.start();
        this.currentLevel.start();
        this.render(rootEl);
    }
    ;
    resume() { }
    ;
    pause() { }
    ;
    finish() {
        this._isPlaying = false;
        // this._currentLevel.finish();
        this.currentLevel.finish();
        // this._removeTable();
    }
    ;
    _levelGenerate(sources, countPairsInLevel) {
        const levels = [];
        for (let numPair of countPairsInLevel) {
            levels.push(new Level(sources.slice(1, numPair + 1), sources[0], this._table));
        }
        return levels;
    }
    _createEmptyTable() {
        if (document.getElementById('table') === undefined) {
            throw new Error('Element with this id already exist');
        }
        const table = document.createElement('div');
        table.className = 'table';
        table.id = 'table';
        return table;
    }
    _removeTable() {
        const table = document.getElementById('table');
        if (table === undefined)
            document.removeChild(table);
    }
    render(rootElement) {
        rootElement.appendChild(this._table);
    }
    _linkHandlers() {
        this._finishButton.disabled = true;
        this._pauseButton.disabled = true;
        this._resumeButton.disabled = true;
        this._startButton.onclick = this._onStartClick.bind(this);
        this._finishButton.onclick = this._onFinishClick.bind(this);
        this._pauseButton.onclick = this._onPauseClick.bind(this);
        this._resumeButton.onclick = this._onResumeClick.bind(this);
    }
    _onStartClick() {
        this.start(document.getElementById('root'));
        this._startButton.disabled = true;
        this._turnOnPlayingControls();
    }
    _onFinishClick() {
        this.finish();
        this._startButton.disabled = false;
        this._turnOffPlayingControls();
        this.currentIndexLevel++;
        // this._currentLevel = this._levels[1];
    }
    _onPauseClick() {
        // this._currentLevel.pause();
        this.currentLevel.pause();
        this._pauseButton.disabled = true;
        this._resumeButton.disabled = false;
    }
    _onResumeClick() {
        // this._currentLevel.resume();
        this.currentLevel.resume();
        this._pauseButton.disabled = false;
        this._resumeButton.disabled = true;
    }
    _turnOnPlayingControls() {
        this._finishButton.disabled = false;
        this._pauseButton.disabled = false;
        // this._resumeButton.disabled = false;
    }
    _turnOffPlayingControls() {
        this._finishButton.disabled = true;
        this._pauseButton.disabled = true;
        this._resumeButton.disabled = true;
    }
}
export default Game;
