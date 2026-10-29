import mEmpleado from "./mEmpleado.js";

export default class mEmpresa {
  private contHombres: number = 0;
  private contMujeres: number = 0;

  constructor() {
    this.contHombres = 0;
    this.contMujeres = 0;
  }

  procesarEmpleado(empleado: mEmpleado): void {
    if (empleado.devolverSexo() === "M") {
      this.contHombres++;
    } else if (empleado.devolverSexo() === "F") {
      this.contMujeres++;
    }
  }

  devolverCantidadHombres(): number {
    return this.contHombres;
  }

  devolverTotalEmpleados(): number {
    return this.contHombres + this.contMujeres;
  }

  calcularPorcentajeMujeres(): number {
    if (this.devolverTotalEmpleados() === 0) return 0;
    const porcentaje = (this.contMujeres / this.devolverTotalEmpleados()) * 100;
    return Math.round(porcentaje * 100) / 100;
  }
}
