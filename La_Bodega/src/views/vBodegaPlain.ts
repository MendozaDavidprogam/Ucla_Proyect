
import iBodega from "../interfaces/iBodega.js";

export default class vBodegaPlain implements iBodega {
  private btNuevoArticulo: HTMLButtonElement;
  private lblGanancia: HTMLSpanElement;
  private lstArticulos: HTMLOListElement;
  private lblCantidad: HTMLElement;

  constructor() {
    this.btNuevoArticulo = document.getElementById("body_btNuevoArticulo") as HTMLButtonElement;
    this.lblGanancia = document.getElementById("body_lblGanancia") as HTMLSpanElement;
    this.lstArticulos = document.getElementById("body_lstArticulos") as HTMLOListElement;
    this.lblCantidad = document.getElementById("body_lblCantidad") as HTMLSpanElement;
  }

  listarArticulo(nombre: string, costo: number): void {
    const li = document.createElement("li");
    li.textContent = `${nombre}: Bs. ${costo}`;
    li.className = "list-group-item";
    this.lstArticulos.appendChild(li);
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
