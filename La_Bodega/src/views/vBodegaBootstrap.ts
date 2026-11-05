
import iBodega from "../interfaces/iBodega.js";

export default class vBodegaBootstrap implements iBodega {
  private btNuevoArticulo: HTMLButtonElement;
  private lblGanancia: HTMLSpanElement;
  private lblCantidad: HTMLSpanElement;
  
  constructor() {
    this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo") as HTMLButtonElement;
    this.lblGanancia = document.getElementById("body_lblGanancia") as HTMLSpanElement;
    this.lblCantidad = document.getElementById("body_lblCantidad") as HTMLSpanElement;
  }

  listarArticulo(nombre: string, costo: number): void {
   const li = document.createElement("li");
    li.textContent = `${nombre}: Bs. ${costo}`;
    li.className = "list-group-item";
  }

  alNuevoArticulo(callback: () => void): void {
    this.btNuevoArticulo.addEventListener("click", callback);
  }

  mostrarGanancia(ganancia: number): void {
    this.lblGanancia.textContent = String(ganancia);
  }

  mostrarCantidad(cantidad: number): void {
  this.lblCantidad.textContent = String(cantidad);
  }
}
