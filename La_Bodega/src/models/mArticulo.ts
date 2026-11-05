
export default class mArticulo {
  private _costo: number = 0;

  constructor(costo: number) {
    this.costo = Number(costo);
  }

  calcularGanancia(): number {
    return this.costo * 0.5;
  }

  
  set costo(v : number) {
    this._costo = Number(v);
  }

  get costo(): number {
    return this._costo;
  }
  
}
