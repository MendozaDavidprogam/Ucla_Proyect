export default class mEmpresa {
    acumNomina = 0;
    constructor() {
        this.acumNomina = 0;
    }
    procesarTrabajador(mTrabajador) {
        this.acumNomina += mTrabajador.calcularSalario();
    }
    montoNomina() {
        return this.acumNomina;
    }
}
//# sourceMappingURL=mEmpresa.js.map