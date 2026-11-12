export default class vEmpresaBootstrap {
    lblMontoNomina;
    lblBonoFijo;
    btNuevoTrabajador;
    constructor() {
        this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador");
        this.lblMontoNomina = document.getElementById("body_lblMontoNomina");
        this.lblBonoFijo = document.getElementById("body_lblBonoFijo");
    }
    onNuevoTrabajador(callback) {
        this.btNuevoTrabajador.onclick = callback;
    }
    reportar({ montoNomina, bonoFijo }) {
        const formato = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        });
        this.lblMontoNomina.textContent = formato.format(montoNomina);
        this.lblBonoFijo.textContent = formato.format(bonoFijo);
    }
}
//# sourceMappingURL=vEmpresaBootstrap.js.map