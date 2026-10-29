import { iEmpleado } from "../interfaces/iEmpleado.js";
import mEmpleado from "../models/mEmpleado.js";

export default class cEmpleado {
  private vista: iEmpleado;
  private callback!: (empleado: mEmpleado | null) => void;

  constructor(vista: iEmpleado) {
    this.vista = vista;
    this.vista.onAceptar(() => this.btAceptarOnClick());
    this.vista.onCancelar(() => this.btCancelarOnClick());
  }

  solicitarEmpleado(callback: (empleado: mEmpleado | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btAceptarOnClick(): void {
    const instancia = new mEmpleado({
      nombre: this.vista.nombre,
      sexo: this.vista.sexo,
    });
    this.vista.ocultar();
    this.callback(instancia);
  }

  private btCancelarOnClick(): void {
    this.vista.ocultar();
    this.callback(null);
  }
}
