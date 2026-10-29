export default class mEmpresa {
    contHombres = 0;
    contMujeres = 0;
    constructor() {
        this.contHombres = 0;
        this.contMujeres = 0;
    }
    procesarEmpleado(empleado) {
        if (empleado.devolverSexo() === "M") {
            this.contHombres++;
        }
        else if (empleado.devolverSexo() === "F") {
            this.contMujeres++;
        }
    }
    devolverCantidadHombres() {
        return this.contHombres;
    }
    devolverTotalEmpleados() {
        return this.contHombres + this.contMujeres;
    }
    calcularPorcentajeMujeres() {
        if (this.devolverTotalEmpleados() === 0)
            return 0;
        const porcentaje = (this.contMujeres / this.devolverTotalEmpleados()) * 100;
        return Math.round(porcentaje * 100) / 100;
    }
}
//# sourceMappingURL=mEmpresa.js.map