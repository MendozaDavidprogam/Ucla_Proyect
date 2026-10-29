export interface iEmpresa {
  onNuevoTrabajador(callback: () => void): void;
  reportar({ montoNomina }: { montoNomina: number }): void;
}
