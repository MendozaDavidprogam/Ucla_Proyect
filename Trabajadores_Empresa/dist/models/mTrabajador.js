export default class mTrabajador {
    _nombre = "";
    _hRegular = 0;
    _hExtra = 0;
    _bonoFijo = 0;
    constructor({ nombre, hRegular, hExtra, bonoFijo }) {
        this.nombre = nombre;
        this.hRegular = hRegular;
        this.hExtra = hExtra;
        this.bonoFijo = bonoFijo;
    }
    set bonoFijo(bonoFijo) { this._bonoFijo = +bonoFijo; }
    get bonoFijo() { return this._bonoFijo; }
    set nombre(nombre) { this._nombre = nombre.trim(); }
    get nombre() { return this._nombre; }
    set hRegular(hRegular) { this._hRegular = +hRegular; }
    get hRegular() { return this._hRegular; }
    set hExtra(hExtra) { this._hExtra = +hExtra; }
    get hExtra() { return this._hExtra; }
    regular() {
        return this.hRegular * 10;
    }
    extra() {
        return this.hExtra * 25;
    }
    calcularSalario() {
        return this.regular() + this.extra();
    }
}
//# sourceMappingURL=mTrabajador.js.map