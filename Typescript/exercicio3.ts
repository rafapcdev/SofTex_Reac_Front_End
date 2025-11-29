abstract class Animal{
    abstract emitirSom(): string;
}
class Cachorro extends Animal {
    emitirSom(): string {
        return "Au au!";
    }
}

class Gato extends Animal {
    emitirSom(): string {
        return "Miau!";
    }
}
function emitirSomDoAnimal(animal: Animal): void {
    console.log(`O som emitido é: ${animal.emitirSom()}`);
}

const meuCachorro = new Cachorro();
const meuGato = new Gato();
const spike = new Cachorro();
const felix = new Gato();

console.log(`O cachorro diz: ${meuCachorro.emitirSom()}`);
console.log(`O gato diz: ${meuGato.emitirSom()}`);

console.log("Animal 1 (Cachorro):");
emitirSomDoAnimal(spike);
console.log("\nAnimal 2 (Gato):");
emitirSomDoAnimal(felix);