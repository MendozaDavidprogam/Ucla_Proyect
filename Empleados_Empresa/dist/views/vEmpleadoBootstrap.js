export default class vEmpleadoBootstrap {
    vista = null;
    inNombre;
    inSexo;
    inSueldo;
    btAceptar;
    btCancelar;
    constructor() {
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inSexo = document.getElementById("empleado_inSexo");
        this.inSueldo = document.getElementById("empleado_inSueldo");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        this.btCancelar = document.getElementById("empleado_btCancelar");
    }
    getModal() {
        if (!this.vista) {
            const el = document.getElementById("empleado");
            if (el && typeof bootstrap !== "undefined") {
                this.vista = new bootstrap.Modal(el);
            }
        }
        return this.vista;
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get sexo() {
        return this.inSexo.value;
    }
    get sueldo() {
        return Number(this.inSueldo.value) || 0;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inSexo.value = "M";
        this.inSueldo.value = "";
        const modal = this.getModal();
        if (modal)
            modal.show();
    }
    ocultar() {
        const modal = this.getModal();
        if (modal)
            modal.hide();
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
//# sourceMappingURL=vEmpleadoBootstrap.js.map