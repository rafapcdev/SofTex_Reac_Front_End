abstract class Veiculo{
    abstract mover():string;
}
class Carro extends Veiculo {
    mover(): string {
        return "O carro está se movendo…";
    }
}
class Bicicleta extends Veiculo {
    mover(): string {
        return "A bicicleta está se movendo…";
    }
}

const meuCarro = new Carro();
const meuBicicleta = new Bicicleta();

console.log(`O carro: ${meuCarro.mover()}`);
console.log(`A bike: ${meuBicicleta.mover()}`);