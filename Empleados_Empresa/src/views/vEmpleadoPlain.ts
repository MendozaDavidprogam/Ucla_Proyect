import { iEmpleado } from "../interfaces/iEmpleado.js";

export default class vEmpleadoPlain implements iEmpleado {
  private vista: HTMLElement;
  private inNombre: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;
  private inSueldo: HTMLInputElement;

  constructor() {
    this.vista = document.getElementById("empleado") as HTMLElement;
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inSexo = document.getElementById("empleado_inSexo") as HTMLSelectElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
    this.inSueldo = document.getElementById("empleado_inSueldo") as HTMLInputElement;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get sexo(): string {
    return this.inSexo.value;
  }
  get sueldo(): number {
    return parseFloat(this.inSueldo.value) || 0;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inSexo.value = "M";
    this.inSueldo.value = "";
    this.vista.hidden = false;
  }

  ocultar(): void {
    this.vista.hidden = true;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}
