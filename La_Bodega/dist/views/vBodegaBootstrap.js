export default class vBodegaBootstrap {
    btNuevoArticulo;
    lblGanancia;
    lblCantidad;
    constructor() {
        this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo");
        this.lblGanancia = document.getElementById("body_lblGanancia");
        this.lblCantidad = document.getElementById("body_lblCantidad");
    }
    listarArticulo(nombre, costo) {
        const li = document.createElement("li");
        li.textContent = `${nombre}: Bs. ${costo}`;
        li.className = "list-group-item";
    }
    alNuevoArticulo(callback) {
        this.btNuevoArticulo.addEventListener("click", callback);
    }
    mostrarGanancia(ganancia) {
        this.lblGanancia.textContent = String(ganancia);
    }
    mostrarCantidad(cantidad) {
        this.lblCantidad.textContent = String(cantidad);
    }
}
//# sourceMappingURL=vBodegaBootstrap.js.map