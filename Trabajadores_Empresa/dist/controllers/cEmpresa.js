import mEmpresa from "../models/mEmpresa.js";
export default class cEmpresa {
    mEmpresa = new mEmpresa();
    vEmpresa;
    cTrabajador;
    constructor(vistaEmpresa, controladorEmpresa) {
        this.vEmpresa = vistaEmpresa;
        this.cTrabajador = controladorEmpresa;
        this.vEmpresa.onNuevoTrabajador(() => this.procesar1Trabajador());
    }
    procesar1Trabajador() {
        this.cTrabajador.solicitarTrabajador((trabajador) => {
            if (trabajador) {
                this.mEmpresa.procesarTrabajador(trabajador);
                this.vEmpresa.reportar({
                    montoNomina: this.mEmpresa.montoNomina(),
                    bonoFijo: this.mEmpresa.bonoAdicional()
                });
            }
        });
    }
}
//# sourceMappingURL=cEmpresa.js.map