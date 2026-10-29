import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaPlain implements iEmpresa {
  private lblMontoNomina: HTMLElement;
  private btNuevoTrabajador: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador") as HTMLButtonElement;
    this.lblMontoNomina = document.getElementById("body_lblMontoNomina") as HTMLElement;
  }

  onNuevoTrabajador(callback: () => void): void {
    this.btNuevoTrabajador.onclick = callback;
  }

  reportar({ montoNomina }: { montoNomina: number }): void {
    this.lblMontoNomina.textContent = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(montoNomina);
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
