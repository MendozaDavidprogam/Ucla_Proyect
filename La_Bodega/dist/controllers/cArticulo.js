import mArticulo from "../models/mArticulo.js";
export default class cArticulo {
    vista;
    callback = null;
    constructor(vista) {
        this.vista = vista;
        this.vista.alAceptar(() => this.aceptar());
        this.vista.alCancelar(() => this.cancelar());
    }
    solicitarArticulo(callback) {
        this.callback = callback;
        this.vista.limpiar();
        this.vista.mostrar();
    }
    aceptar() {
        const texto = this.vista.obtenerCosto().trim();
        const costo = Number(texto);
        if (texto === "" || isNaN(costo) || costo < 0) {
            this.vista.mostrarError("Ingrese un costo válido (número mayor o igual a 0).");
            return;
        }
        this.finalizar(new mArticulo(costo));
    }
    cancelar() {
        this.finalizar(null);
    }
    finalizar(articulo) {
        this.vista.ocultar();
        const cb = this.callback;
        this.callback = null;
        if (cb)
            cb(articulo);
    }
}
//# sourceMappingURL=cArticulo.js.map