export default class vEmpresaPlain {
    lblMontoNomina;
    lblBonoFijo;
    btNuevoTrabajador;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoTrabajador = document.getElementById("body_btNuevoTrabajador");
        this.lblMontoNomina = document.getElementById("body_lblMontoNomina");
        this.lblBonoFijo = document.getElementById("body_lblBonoFijo");
    }
    onNuevoTrabajador(callback) {
        this.btNuevoTrabajador.onclick = callback;
    }
    reportar({ montoNomina, bonoFijo }) {
        this.lblMontoNomina.textContent = `${montoNomina}`;
        this.lblBonoFijo.textContent = `${bonoFijo}`;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=vEmpresaPlain.js.map