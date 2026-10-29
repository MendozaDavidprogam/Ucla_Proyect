import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaPlain implements iEmpresa {
  private btNuevo: HTMLButtonElement;
  private lblCantidadHombres: HTMLElement;
  private lblPorcentajeMujeres: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblCantidadHombres = document.getElementById("body_lblCantidadHombres") as HTMLElement;
    this.lblPorcentajeMujeres = document.getElementById("body_lblPorcentajeMujeres") as HTMLElement;
  }

  onNuevoEmpleado(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar({
    cantidadHombres,
    porcentajeMujeres,
  }: {
    cantidadHombres: number;
    porcentajeMujeres: number;
  }): void {
    this.lblCantidadHombres.innerHTML = `${cantidadHombres}`;
    this.lblPorcentajeMujeres.innerHTML = `${porcentajeMujeres}`;
  }
}
