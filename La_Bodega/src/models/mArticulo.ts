
export default class mArticulo {
  private costo: number;

  constructor(costo: number) {
    this.costo = Number(costo);
  }

  calcularGanancia(): number {
    return this.costo * 0.5;
  }
}
