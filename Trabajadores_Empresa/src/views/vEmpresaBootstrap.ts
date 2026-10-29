import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaBootstrap implements iEmpresa {
  private lblMontoNomina: HTMLElement;
  private btNuevoTrabajador: HTMLButtonElement;

  constructor() {
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
}
