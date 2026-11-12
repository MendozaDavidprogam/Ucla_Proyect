export default class mEmpresa {
    contHombres = 0;
    contMujeres = 0;
    acumSueldos = 0;
    constructor() {
        this.contHombres = 0;
        this.contMujeres = 0;
        this.acumSueldos = 0;
    }
    procesarEmpleado(empleado) {
        if (empleado.devolverSexo() === "M") {
            this.contHombres++;
        }
        else if (empleado.devolverSexo() === "F") {
            this.contMujeres++;
        }
        this.acumSueldos += empleado.devolverSueldo();
    }
    devolverCantidadHombres() {
        return this.contHombres;
    }
    devolverTotalEmpleados() {
        return this.contHombres + this.contMujeres;
    }
    devolverTotalSueldos() {
        return Math.round(this.acumSueldos * 100) / 100;
    }
    calcularPorcentajeMujeres() {
        if (this.devolverTotalEmpleados() === 0)
            return 0;
        const porcentaje = (this.contMujeres / this.devolverTotalEmpleados()) * 100;
        return Math.round(porcentaje * 100) / 100;
    }
}
//# sourceMappingURL=mEmpresa.js.map