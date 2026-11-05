export default class mBodega {
    gananciaTotal;
    cantidadArticulos;
    constructor() {
        this.gananciaTotal = 0;
        this.cantidadArticulos = 0;
    }
    procesarArticulo(articulo) {
        this.gananciaTotal = this.gananciaTotal + articulo.calcularGanancia();
        this.cantidadArticulos = this.cantidadArticulos + 1;
    }
    obtenerGananciaTotal() {
        return this.gananciaTotal;
    }
    obtenerCantidadArticulos() {
        return this.cantidadArticulos;
    }
}
//# sourceMappingURL=mBodega.js.map