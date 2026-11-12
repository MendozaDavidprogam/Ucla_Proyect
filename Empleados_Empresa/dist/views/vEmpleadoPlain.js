export default class vEmpleadoPlain {
    vista;
    inNombre;
    inSexo;
    btAceptar;
    btCancelar;
    inSueldo;
    constructor() {
        this.vista = document.getElementById("empleado");
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inSexo = document.getElementById("empleado_inSexo");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        this.btCancelar = document.getElementById("empleado_btCancelar");
        this.inSueldo = document.getElementById("empleado_inSueldo");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get sexo() {
        return this.inSexo.value;
    }
    get sueldo() {
        return parseFloat(this.inSueldo.value) || 0;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inSexo.value = "M";
        this.inSueldo.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vEmpleadoPlain.js.map