
import mArticulo from "./mArticulo.js";

export default class mBodega {
  private gananciaTotal: number;

  constructor() {
    this.gananciaTotal = 0;
  }

  procesarArticulo(articulo: mArticulo): void {
    this.gananciaTotal = this.gananciaTotal + articulo.calcularGanancia();
  }

  obtenerGananciaTotal(): number {
    return this.gananciaTotal;
  }
}
