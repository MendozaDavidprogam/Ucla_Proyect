export interface iEmpresa {
  onNuevoEmpleado(callback: () => void): void;

  reportar({
    cantidadHombres,
    porcentajeMujeres,
  }: {
    cantidadHombres: number;
    porcentajeMujeres: number;
  }): void;
}
