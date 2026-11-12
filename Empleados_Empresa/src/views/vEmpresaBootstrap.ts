import { iEmpresa } from "../interfaces/iEmpresa.js";

export default class vEmpresaBootstrap implements iEmpresa {
  private btNuevo: HTMLButtonElement;
  private lblCantidadHombres: HTMLElement;
  private lblPorcentajeMujeres: HTMLElement;
  private lblTotalSueldos: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblCantidadHombres = document.getElementById("body_lblCantidadHombres") as HTMLElement;
    this.lblPorcentajeMujeres = document.getElementById("body_lblPorcentajeMujeres") as HTMLElement;
    this.lblTotalSueldos = document.getElementById("body_lblTotalSueldos") as HTMLElement;
  }

  onNuevoEmpleado(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar({
    cantidadHombres,
    porcentajeMujeres,
    totalSueldos,
  }: {
    cantidadHombres: number;
    porcentajeMujeres: number;
    totalSueldos: number;
  }): void {
    this.lblCantidadHombres.innerHTML = `${cantidadHombres}`;
    this.lblPorcentajeMujeres.innerHTML = `${porcentajeMujeres}`;
    this.lblTotalSueldos.innerHTML = `${totalSueldos}`;
  }
}