export default class vEmpleadoPlain {
    vista;
    inNombre;
    inSexo;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = document.getElementById("empleado");
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inSexo = document.getElementById("empleado_inSexo");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        this.btCancelar = document.getElementById("empleado_btCancelar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get sexo() {
        return this.inSexo.value;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inSexo.value = "M";
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