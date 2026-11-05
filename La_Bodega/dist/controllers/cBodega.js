import mBodega from "../models/mBodega.js";
export default class cBodega {
    vista;
    modelo;
    controladorArticulo;
    constructor(vista, controladorArticulo) {
        this.vista = vista;
        this.controladorArticulo = controladorArticulo;
        this.modelo = new mBodega();
        this.vista.alNuevoArticulo(() => this.nuevoArticulo());
        this.vista.mostrarGanancia(this.modelo.obtenerGananciaTotal());
        this.vista.mostrarCantidad(this.modelo.obtenerCantidadArticulos());
    }
    nuevoArticulo() {
        this.controladorArticulo.solicitarArticulo((articulo) => {
            if (articulo === null)
                return;
            this.modelo.procesarArticulo(articulo);
            this.vista.mostrarGanancia(this.modelo.obtenerGananciaTotal());
            this.vista.mostrarCantidad(this.modelo.obtenerCantidadArticulos());
        });
    }
}
//# sourceMappingURL=cBodega.js.map