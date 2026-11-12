import { iEmpleado } from "../interfaces/iEmpleado.js";

declare const bootstrap: any;

export default class vEmpleadoBootstrap implements iEmpleado {
  private vista: any = null;
  private inNombre: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inSueldo: HTMLInputElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inSexo = document.getElementById("empleado_inSexo") as HTMLSelectElement;
    this.inSueldo = document.getElementById("empleado_inSueldo") as HTMLInputElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
  }

  private getModal(): any {
    if (!this.vista) {
      const el = document.getElementById("empleado");
      if (el && typeof bootstrap !== "undefined") {
        this.vista = new bootstrap.Modal(el);
      }
    }
    return this.vista;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get sexo(): string {
    return this.inSexo.value;
  }
  get sueldo(): number {
    return Number(this.inSueldo.value) || 0;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inSexo.value = "M";
    this.inSueldo.value = "";
    const modal = this.getModal();
    if (modal) modal.show();
  }

  ocultar(): void {
    const modal = this.getModal();
    if (modal) modal.hide();
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}