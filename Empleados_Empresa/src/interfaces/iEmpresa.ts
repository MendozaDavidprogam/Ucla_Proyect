export interface iEmpresa {
  onNuevoEmpleado(callback: () => void): void;

  reportar({
    cantidadHombres,
    porcentajeMujeres,
    totalSueldos,
  }: {
    cantidadHombres: number;
    porcentajeMujeres: number;
    totalSueldos: number;
  }): void;
}
