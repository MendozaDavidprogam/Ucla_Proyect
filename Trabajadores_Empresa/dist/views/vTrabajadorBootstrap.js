export default class vTrabajadorBootstrap {
    inNombre;
    inHRegular;
    inHExtra;
    inBonoFijo;
    btCancelar;
    btAceptar;
    modal;
    reportes;
    constructor() {
        this.inNombre = document.getElementById("trabajador_inNombre");
        this.inHRegular = document.getElementById("trabajador_inHRegular");
        this.inHExtra = document.getElementById("trabajador_inHExtra");
        this.inBonoFijo = document.getElementById("trabajador_inBonoFijo");
        this.btCancelar = document.getElementById("trabajador_btCancelar");
        this.btAceptar = document.getElementById("trabajador_btAceptar");
        const elementoModal = document.getElementById("trabajador");
        this.modal = new bootstrap.Modal(elementoModal);
        this.reportes = document.getElementById("body_reportesTrabajadores");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get hRegular() {
        return this.inHRegular ? +this.inHRegular.value : 0;
    }
    get hExtra() {
        return this.inHExtra ? +this.inHExtra.value : 0;
    }
    get bonoFijo() {
        return this.inBonoFijo ? +this.inBonoFijo.value : 0;
    }
    reportar({ nombre, salario }) {
        const reporte = document.createElement("div");
        const salarioDolares = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(salario);
        reporte.textContent = `El trabajador ${nombre} tiene un salario de ${salarioDolares}`;
        this.reportes.appendChild(reporte);
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inHRegular.value = "";
        this.inHExtra.value = "";
        this.inBonoFijo.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=vTrabajadorBootstrap.js.map