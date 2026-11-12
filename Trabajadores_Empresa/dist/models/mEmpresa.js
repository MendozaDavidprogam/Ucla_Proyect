export default class mEmpresa {
    acumNomina = 0;
    acumBonoTransporte = 0;
    constructor() {
        this.acumNomina = 0;
        this.acumBonoTransporte = 0;
    }
    procesarTrabajador(mTrabajador) {
        this.acumNomina += mTrabajador.calcularSalario();
        this.acumBonoTransporte += mTrabajador.bonoFijo;
    }
    montoNomina() {
        return this.acumNomina;
    }
    bonoAdicional() {
        return this.acumBonoTransporte;
    }
}
//# sourceMappingURL=mEmpresa.js.map