export default class vBodegaBootstrap {
    btNuevoArticulo;
    lblGanancia;
    constructor() {
        this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo");
        this.lblGanancia = document.getElementById("body_lblGanancia");
    }
    alNuevoArticulo(callback) {
        this.btNuevoArticulo.addEventListener("click", callback);
    }
    mostrarGanancia(ganancia) {
        this.lblGanancia.textContent = String(ganancia);
    }
}
//# sourceMappingURL=vBodegaBootstrap.js.map