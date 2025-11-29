interface FormaGeometrica {
    calcularArea(): number;
}
class Quadrado implements FormaGeometrica {
    public lado: number; 

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}
class Circulo implements FormaGeometrica {
    public raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}
const quadrado = new Quadrado(10);
const circulo = new Circulo(5);

console.log("Área do Quadrado:", quadrado.calcularArea().toFixed(2));
console.log("Área do Círculo:", circulo.calcularArea().toFixed(2));