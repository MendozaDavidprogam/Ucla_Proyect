import mTrabajador from "./mTrabajador.js";

export default class mEmpresa {
  private acumNomina: number = 0;
  private acumBonoTransporte: number = 0;
  constructor() {
    this.acumNomina = 0;
      this.acumBonoTransporte = 0;
  }

  procesarTrabajador(mTrabajador: mTrabajador): void {
    this.acumNomina += mTrabajador.calcularSalario();
    this.acumBonoTransporte += mTrabajador.bonoFijo 
  }
  
  montoNomina(): number {
    return this.acumNomina;
  }

  bonoAdicional():number{
    return this.acumBonoTransporte
  }
}
