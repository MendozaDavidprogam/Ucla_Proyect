
import iArticulo from "../interfaces/iArticulo.js";

export default class vArticuloPlain implements iArticulo {
  private seccion: HTMLElement;
  private inCosto: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    this.seccion = document.getElementById("articulo") as HTMLElement;
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("articulo_btAceptar") as HTMLButtonElement;
  }

  mostrar(): void {
    this.seccion.hidden = false;
    this.inCosto.focus();
  }

  ocultar(): void {
    this.seccion.hidden = true;
  }

  limpiar(): void {
    this.inCosto.value = "";
  }

  obtenerCosto(): string {
    return this.inCosto.value;
  }

  mostrarError(mensaje: string): void {
    alert(mensaje);
  }

  alAceptar(callback: () => void): void {
    this.btAceptar.addEventListener("click", callback);
  }

  alCancelar(callback: () => void): void {
    this.btCancelar.addEventListener("click", callback);
  }
}
