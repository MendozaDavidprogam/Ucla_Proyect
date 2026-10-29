export interface iEmpleado {
  get nombre(): string;
  get sexo(): string;

  mostrar(): void;
  ocultar(): void;

  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
