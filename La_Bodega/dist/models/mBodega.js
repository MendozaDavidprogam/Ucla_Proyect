export default class mBodega {
    gananciaTotal;
    constructor() {
        this.gananciaTotal = 0;
    }
    procesarArticulo(articulo) {
        this.gananciaTotal = this.gananciaTotal + articulo.calcularGanancia();
    }
    obtenerGananciaTotal() {
        return this.gananciaTotal;
    }
}
//# sourceMappingURL=mBodega.js.map