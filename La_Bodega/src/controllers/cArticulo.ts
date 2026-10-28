
import iArticulo from "../interfaces/iArticulo.js";
import mArticulo from "../models/mArticulo.js";

export default class cArticulo {
  private vista: iArticulo;
  private callback: ((articulo: mArticulo | null) => void) | null = null;

  constructor(vista: iArticulo) {
    this.vista = vista;
    this.vista.alAceptar(() => this.aceptar());
    this.vista.alCancelar(() => this.cancelar());
  }

  solicitarArticulo(callback: (articulo: mArticulo | null) => void): void {
    this.callback = callback;
    this.vista.limpiar();
    this.vista.mostrar();
  }

  private aceptar(): void {
    const texto = this.vista.obtenerCosto().trim();
    const costo = Number(texto);

    if (texto === "" || isNaN(costo) || costo < 0) {
      this.vista.mostrarError("Ingrese un costo válido (número mayor o igual a 0).");
      return;
    }

    this.finalizar(new mArticulo(costo));
  }

  private cancelar(): void {
    this.finalizar(null);
  }

  private finalizar(articulo: mArticulo | null): void {
    this.vista.ocultar();
    const cb = this.callback;
    this.callback = null;
    if (cb) cb(articulo);
  }
}
