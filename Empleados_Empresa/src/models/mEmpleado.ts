export default class mEmpleado {
  private _nombre: string = "";
  private _sexo: string = "";

  constructor({ nombre, sexo }: { nombre: string; sexo: string }) {
    this.nombre = nombre;
    this.sexo = sexo;
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

  devolverNombre(): string {
    return this.nombre;
  }

  devolverSexo(): string {
    return this.sexo;
  }
}
