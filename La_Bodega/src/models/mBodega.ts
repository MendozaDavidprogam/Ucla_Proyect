
import mArticulo from "./mArticulo.js";

export default class mBodega {
  private gananciaTotal: number;
  private cantidadArticulos: number;

  constructor() {
    this.gananciaTotal = 0;
    this.cantidadArticulos = 0;
  }

  procesarArticulo(articulo: mArticulo): void {
    this.gananciaTotal = this.gananciaTotal + articulo.calcularGanancia();
    this.cantidadArticulos = this.cantidadArticulos + 1;
  }

  obtenerGananciaTotal(): number {
    return this.gananciaTotal;
  }

  obtenerCantidadArticulos(): number {
  return this.cantidadArticulos;
  }
}
