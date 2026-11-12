import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaPlain implements iEmpresa {
  private lblMontoNomina: HTMLElement;
  private lblBonoFijo:HTMLElement;
  private btNuevoTrabajador: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador") as HTMLButtonElement;
    this.lblMontoNomina = document.getElementById("body_lblMontoNomina") as HTMLElement;
    this.lblBonoFijo = document.getElementById("body_lblBonoFijo") as HTMLElement;
  }

  onNuevoTrabajador(callback: () => void): void {
    this.btNuevoTrabajador.onclick = callback;
  }

  reportar({ montoNomina, bonoFijo }: { montoNomina: number, bonoFijo:number }): void {
    this.lblMontoNomina.textContent = `${montoNomina}`;
    this.lblBonoFijo.textContent = `${bonoFijo}`
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
