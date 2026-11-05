export default class vArticuloPlain {
    seccion;
    inCosto;
    //private inNombre: HTMLInputElement;
    btCancelar;
    btAceptar;
    constructor() {
        this.seccion = document.getElementById("articulo");
        this.inCosto = document.getElementById("articulo_inCosto");
        //this.inNombre = document.getElementById("articulo_inNombre") as HTMLInputElement;
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
        //this.inNombre.value = "";
    }
    obtenerCosto() {
        return this.inCosto.value;
    }
    /*obtenerNombre(): string {
      return this.inNombre.value;
    }*/
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