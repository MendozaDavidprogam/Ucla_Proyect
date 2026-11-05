export default class vBodegaPlain {
    btNuevoArticulo;
    lblGanancia;
    lstArticulos;
    lblCantidad;
    constructor() {
        this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo");
        this.lblGanancia = document.getElementById("body_lblGanancia");
        this.lstArticulos = document.getElementById("body_lstArticulos");
        this.lblCantidad = document.getElementById("body_lblCantidad");
    }
    listarArticulo(nombre, costo) {
        const li = document.createElement("li");
        li.textContent = `${nombre}: Bs. ${costo}`;
        li.className = "list-group-item";
        this.lstArticulos.appendChild(li);
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
//# sourceMappingURL=vBodegaPlain.js.map