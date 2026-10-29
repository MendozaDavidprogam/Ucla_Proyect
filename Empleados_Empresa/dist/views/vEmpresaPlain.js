export default class vEmpresaPlain {
    btNuevo;
    lblCantidadHombres;
    lblPorcentajeMujeres;
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoEmpleado");
        this.lblCantidadHombres = document.getElementById("body_lblCantidadHombres");
        this.lblPorcentajeMujeres = document.getElementById("body_lblPorcentajeMujeres");
    }
    onNuevoEmpleado(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ cantidadHombres, porcentajeMujeres, }) {
        this.lblCantidadHombres.innerHTML = `${cantidadHombres}`;
        this.lblPorcentajeMujeres.innerHTML = `${porcentajeMujeres}`;
    }
}
//# sourceMappingURL=vEmpresaPlain.js.map