export default class vArticuloBootstrap {
    modal;
    inCosto;
    btCancelar;
    btAceptar;
    constructor() {
        const elemento = document.getElementById("articulo");
        this.modal = new bootstrap.Modal(elemento, { backdrop: "static", keyboard: false });
        this.inCosto = document.getElementById("articulo_inCosto");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
    }
    mostrar() {
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
    limpiar() {
        this.inCosto.value = "";
    }
    obtenerCosto() {
        return this.inCosto.value;
    }
    mostrarError(mensaje) {
        alert(mensaje);
    }
    alAceptar(callback) {
        this.btAceptar.addEventListener("click", callback);
    }
    alCancelar(callback) {
        this.btCancelar.addEventListener("click", callback);
    }
}
//# sourceMappingURL=vArticuloBootstrap.js.map