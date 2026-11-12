export default class vEmpresaBootstrap {
    btNuevo;
    lblCantidadHombres;
    lblPorcentajeMujeres;
    lblTotalSueldos;
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoEmpleado");
        this.lblCantidadHombres = document.getElementById("body_lblCantidadHombres");
        this.lblPorcentajeMujeres = document.getElementById("body_lblPorcentajeMujeres");
        this.lblTotalSueldos = document.getElementById("body_lblTotalSueldos");
    }
    onNuevoEmpleado(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ cantidadHombres, porcentajeMujeres, totalSueldos, }) {
        this.lblCantidadHombres.innerHTML = `${cantidadHombres}`;
        this.lblPorcentajeMujeres.innerHTML = `${porcentajeMujeres}`;
        this.lblTotalSueldos.innerHTML = `${totalSueldos}`;
    }
}
//# sourceMappingURL=vEmpresaBootstrap.js.map