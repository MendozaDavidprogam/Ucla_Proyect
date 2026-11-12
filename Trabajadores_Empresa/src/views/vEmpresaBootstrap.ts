import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaBootstrap implements iEmpresa {
  private lblMontoNomina: HTMLElement;
  private lblBonoFijo: HTMLElement;
  private btNuevoTrabajador: HTMLButtonElement;

  constructor() {
    this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador") as HTMLButtonElement;
    this.lblMontoNomina = document.getElementById("body_lblMontoNomina") as HTMLElement;
    this.lblBonoFijo = document.getElementById("body_lblBonoFijo") as HTMLElement;
  }

  onNuevoTrabajador(callback: () => void): void {
    this.btNuevoTrabajador.onclick = callback;
  }

  reportar({ montoNomina, bonoFijo }: { montoNomina: number; bonoFijo: number }): void {
    const formato = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    this.lblMontoNomina.textContent = formato.format(montoNomina);
    this.lblBonoFijo.textContent = formato.format(bonoFijo);
  }
}
