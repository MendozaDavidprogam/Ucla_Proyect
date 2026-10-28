
import iBodega from "../interfaces/iBodega.js";

export default class vBodegaPlain implements iBodega {
  private btNuevoArticulo: HTMLButtonElement;
  private lblGanancia: HTMLSpanElement;

  constructor() {
    this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo") as HTMLButtonElement;
    this.lblGanancia = document.getElementById("body_lblGanancia") as HTMLSpanElement;
  }

  alNuevoArticulo(callback: () => void): void {
    this.btNuevoArticulo.addEventListener("click", callback);
  }

  mostrarGanancia(ganancia: number): void {
    this.lblGanancia.textContent = String(ganancia);
  }
}
