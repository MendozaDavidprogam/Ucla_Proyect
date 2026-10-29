import mTrabajador from "./mTrabajador.js";

export default class mEmpresa {
  private acumNomina: number = 0;
  constructor() {
    this.acumNomina = 0;
  }

  procesarTrabajador(mTrabajador: mTrabajador): void {
    this.acumNomina += mTrabajador.calcularSalario(); 
  }
  
  montoNomina(): number {
    return this.acumNomina;
  }
}
