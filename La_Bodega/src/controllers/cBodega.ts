
import iBodega from "../interfaces/iBodega.js";
import mBodega from "../models/mBodega.js";
import cArticulo from "./cArticulo.js";

export default class cBodega {
  private vista: iBodega;
  private modelo: mBodega;
  private controladorArticulo: cArticulo;

  constructor(vista: iBodega, controladorArticulo: cArticulo) {
    this.vista = vista;
    this.controladorArticulo = controladorArticulo;
    this.modelo = new mBodega();

    this.vista.alNuevoArticulo(() => this.nuevoArticulo());
    this.vista.mostrarGanancia(this.modelo.obtenerGananciaTotal());
  }

  private nuevoArticulo(): void {
    this.controladorArticulo.solicitarArticulo((articulo) => {
      if (articulo === null) return;
      this.modelo.procesarArticulo(articulo);
      this.vista.mostrarGanancia(this.modelo.obtenerGananciaTotal());
    });
  }
}
