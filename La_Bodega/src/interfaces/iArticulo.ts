
export default interface iArticulo {
  mostrar(): void;
  ocultar(): void;
  limpiar(): void;
  obtenerCosto(): string;
  mostrarError(mensaje: string): void;
  alAceptar(callback: () => void): void;
  alCancelar(callback: () => void): void;
}
