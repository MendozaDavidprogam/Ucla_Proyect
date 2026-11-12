export interface iEmpresa {
  onNuevoTrabajador(callback: () => void): void;
  reportar({ montoNomina, bonoFijo }: { montoNomina: number,bonoFijo:number }): void;
}
