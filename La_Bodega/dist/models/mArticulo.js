export default class mArticulo {
    _costo = 0;
    constructor(costo) {
        this.costo = Number(costo);
    }
    calcularGanancia() {
        return this.costo * 0.5;
    }
    set costo(v) {
        this._costo = Number(v);
    }
    get costo() {
        return this._costo;
    }
}
//# sourceMappingURL=mArticulo.js.map