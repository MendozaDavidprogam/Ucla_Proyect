export default class vEmpresaBootstrap {
    lblMontoNomina;
    btNuevoTrabajador;
    constructor() {
        this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador");
        this.lblMontoNomina = document.getElementById("body_lblMontoNomina");
    }
    onNuevoTrabajador(callback) {
        this.btNuevoTrabajador.onclick = callback;
    }
    reportar({ montoNomina }) {
        this.lblMontoNomina.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(montoNomina);
    }
}
//# sourceMappingURL=vEmpresaBootstrap.js.map