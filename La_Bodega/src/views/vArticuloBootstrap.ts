
import iArticulo from "../interfaces/iArticulo.js";

declare const bootstrap: any;

export default class vArticuloBootstrap implements iArticulo {
  private modal: any;
  private inCosto: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    const elemento = document.getElementById("articulo") as HTMLElement;
    this.modal = new bootstrap.Modal(elemento, { backdrop: "static", keyboard: false });
    this.inCosto = document.getElementById("articulo_inCosto") as HTMLInputElement;
    this.btCancelar = document.getElementById("articulo_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("articulo_btAceptar") as HTMLButtonElement;
  }

  mostrar(): void {
    this.modal.show();
  }

  ocultar(): void {
    this.modal.hide();
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
