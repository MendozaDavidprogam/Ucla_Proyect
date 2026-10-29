export default class mEmpleado {
    _nombre = "";
    _sexo = "";
    constructor({ nombre, sexo }) {
        this.nombre = nombre;
        this.sexo = sexo;
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
    devolverNombre() {
        return this.nombre;
    }
    devolverSexo() {
        return this.sexo;
    }
}
//# sourceMappingURL=mEmpleado.js.map