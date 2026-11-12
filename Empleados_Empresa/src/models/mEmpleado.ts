export default class mEmpleado {
  private _nombre: string = "";
  private _sexo: string = "";
  private _sueldo: number = 0;

  constructor({ nombre, sexo, sueldo }: { nombre: string; sexo: string; sueldo: number }) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.sueldo = sueldo;
  }

  set nombre(valor: string) {
    this._nombre = valor.trim();
  }
  get nombre(): string {
    return this._nombre;
  }

  set sexo(valor: string) {
    this._sexo = valor.trim();
  }
  get sexo(): string {
    return this._sexo;
  }

  set sueldo(valor: number) {
    this._sueldo = +valor;
  }
  get sueldo(): number {
    return this._sueldo;
  }

  devolverNombre(): string {
    return this.nombre;
  }

  devolverSexo(): string {
    return this.sexo;
  }

  devolverSueldo(): number {
    return this.sueldo;
  }
}
