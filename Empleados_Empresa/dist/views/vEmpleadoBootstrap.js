export default class vEmpleadoBootstrap {
    vista;
    inNombre;
    inSexo;
    btAceptar;
    btCancelar;
    constructor() {
        this.vista = new bootstrap.Modal(document.getElementById("empleado"), {
            backdrop: "static",
            keyboard: false,
        });
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
        this.vista.show();
    }
    ocultar() {
        this.vista.hide();
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vEmpleadoBootstrap.js.map