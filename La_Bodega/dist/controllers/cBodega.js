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
    }
    nuevoArticulo() {
        this.controladorArticulo.solicitarArticulo((articulo) => {
            if (articulo === null)
                return;
            this.modelo.procesarArticulo(articulo);
            this.vista.mostrarGanancia(this.modelo.obtenerGananciaTotal());
        });
    }
}
//# sourceMappingURL=cBodega.js.map