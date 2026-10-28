
export default interface iBodega {
  alNuevoArticulo(callback: () => void): void;
  mostrarGanancia(ganancia: number): void;
}
