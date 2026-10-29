import mEmpleado from "../models/mEmpleado.js";
export default class cEmpleado {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarEmpleado(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        const instancia = new mEmpleado({
            nombre: this.vista.nombre,
            sexo: this.vista.sexo,
        });
        this.vista.ocultar();
        this.callback(instancia);
    }
    btCancelarOnClick() {
        this.vista.ocultar();
        this.callback(null);
    }
}
//# sourceMappingURL=cEmpleado.js.map