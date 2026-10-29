import { iEmpleado } from "../interfaces/iEmpleado.js";

declare const bootstrap: any; // Bootstrap se carga por CDN en el HTML

export default class vEmpleadoBootstrap implements iEmpleado {
  private vista: any;
  private inNombre: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = new bootstrap.Modal(document.getElementById("empleado") as HTMLElement, {
      backdrop: "static",
      keyboard: false,
    });
    this.inNombre = document.getElementById("empleado_inNombre") as HTMLInputElement;
    this.inSexo = document.getElementById("empleado_inSexo") as HTMLSelectElement;
    this.btAceptar = document.getElementById("empleado_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("empleado_btCancelar") as HTMLButtonElement;
  }

  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get sexo(): string {
    return this.inSexo.value;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inSexo.value = "M";
    this.vista.show();
  }

  ocultar(): void {
    this.vista.hide();
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}
