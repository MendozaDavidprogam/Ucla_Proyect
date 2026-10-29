import mEmpresa from "../models/mEmpresa.js";
import { iEmpresa } from "../interfaces/iEmpresa.js";
import cEmpleado from "./cEmpleado.js";

export default class cEmpresa {
  private mEmpresa: mEmpresa = new mEmpresa();
  private vEmpresa: iEmpresa;
  private cEmpleado: cEmpleado;

  constructor(vistaEmpresa: iEmpresa, controladorEmpleado: cEmpleado) {
    this.vEmpresa = vistaEmpresa;
    this.cEmpleado = controladorEmpleado;

    this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
  }

  private procesar1Empleado(): void {
    this.cEmpleado.solicitarEmpleado((empleado) => {
      if (empleado !== null) {
        this.mEmpresa.procesarEmpleado(empleado);
        this.vEmpresa.reportar({
          cantidadHombres: this.mEmpresa.devolverCantidadHombres(),
          porcentajeMujeres: this.mEmpresa.calcularPorcentajeMujeres(),
        });
      }
    });
  }
}
