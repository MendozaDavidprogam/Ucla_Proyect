export default class vArticuloPlain {
    seccion;
    inCosto;
    btCancelar;
    btAceptar;
    constructor() {
        this.seccion = document.getElementById("articulo");
        this.inCosto = document.getElementById("articulo_inCosto");
        this.btCancelar = document.getElementById("articulo_btCancelar");
        this.btAceptar = document.getElementById("articulo_btAceptar");
    }
    mostrar() {
        this.seccion.hidden = false;
        this.inCosto.focus();
    }
    ocultar() {
        this.seccion.hidden = true;
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
//# sourceMappingURL=vArticuloPlain.js.map