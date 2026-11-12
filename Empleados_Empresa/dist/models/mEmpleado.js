export default class mEmpleado {
    _nombre = "";
    _sexo = "";
    _sueldo = 0;
    constructor({ nombre, sexo, sueldo }) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.sueldo = sueldo;
    }
    set nombre(valor) {
        this._nombre = valor.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(valor) {
        this._sexo = valor.trim();
    }
    get sexo() {
        return this._sexo;
    }
    set sueldo(valor) {
        this._sueldo = +valor;
    }
    get sueldo() {
        return this._sueldo;
    }
    devolverNombre() {
        return this.nombre;
    }
    devolverSexo() {
        return this.sexo;
    }
    devolverSueldo() {
        return this.sueldo;
    }
}
//# sourceMappingURL=mEmpleado.js.map