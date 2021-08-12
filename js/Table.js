import Level from "./Level.js";
class Table {
    constructor(sources, countPairsInLevels) {
        this._isPlaying = false;
        if (countPairsInLevels.sort()[countPairsInLevels.length - 1] > sources.length - 1)
            throw new Error('Not enough sources');
        this._levels = this._levelGenerate(sources, countPairsInLevels);
        this._currentLevel = this._levels[0];
    }
    start(rootEl) {
        this._table = this._createEmptyTable();
        this._isPlaying = true;
        this._currentLevel.start(this._table);
        this.render(rootEl);
    }
    ;
    resume() { }
    ;
    pause() { }
    ;
    finish() {
        this._isPlaying = false;
        this._removeTable();
    }
    ;
    _levelGenerate(sources, countPairsInLevel) {
        const levels = [];
        for (let numPair of countPairsInLevel) {
            levels.push(new Level(sources.slice(1, numPair + 1), sources[0]));
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
}
export default Table;
