import mEmpresa from "../models/mEmpresa.js";
export default class cEmpresa {
    mEmpresa = new mEmpresa();
    vEmpresa;
    cEmpleado;
    constructor(vistaEmpresa, controladorEmpleado) {
        this.vEmpresa = vistaEmpresa;
        this.cEmpleado = controladorEmpleado;
        this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
    }
    procesar1Empleado() {
        this.cEmpleado.solicitarEmpleado((empleado) => {
            if (empleado !== null) {
                this.mEmpresa.procesarEmpleado(empleado);
                this.vEmpresa.reportar({
                    cantidadHombres: this.mEmpresa.devolverCantidadHombres(),
                    porcentajeMujeres: this.mEmpresa.calcularPorcentajeMujeres(),
                });
            }
        });
    }
}
//# sourceMappingURL=cEmpresa.js.map