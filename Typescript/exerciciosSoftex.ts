class Pessoa {
  name: string;
  idade: number;

  constructor(name: string, idade: number) {
    this.name = name;
    this.idade = idade;
  }
  toString(): string{
    return  `${this.name}, ${this.idade} anos`
  }
}

const pessoa = new Pessoa("Rafael", 29);
console.log(pessoa.toString()); 

class ContaBancaria {
    private saldo: number ;

    constructor (saldoInicial: number = 0){
        if (saldoInicial<0){
            console.error("ERRO: O saldo inicial não pode ser negativo.");
            this.saldo = 0;
        } else {
            this.saldo = saldoInicial;
        }
    }
    depositar (valor: number): void {
        if (valor> 0){
            this.saldo +=valor;
            console.log(`✅ Depósito de R$ ${valor.toFixed(2)}.`);
        } else {
            console.error("❌ ERRO: Valor de depósito inválido.");
        }
    }
    sacar (valor: number): void{
        if (valor <= 0){
            console.error("❌ ERRO: Valor de saque inválido.");
            return
        }

        if (this.saldo >= valor){
            this.saldo -= valor
            console.log(`✅ Saque de R$ ${valor.toFixed(2)}.`);
        } else {
            console.error(`❌ ERRO: Saldo insuficiente. Saldo atual: R$ ${this.saldo.toFixed(2)}.`);
        }
    }

    verSaldo(): void{
        console.log(`💰 Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
         
}

const conta = new ContaBancaria();
conta.verSaldo();     
conta.depositar(150);  
conta.sacar(100);      
conta.sacar(700);      
conta.verSaldo();

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

class Endereco {
    public rua: string;
    public numero: number;
    public cidade: string;

    constructor(rua: string, numero: number, cidade: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }

    toString(): string {
        return `${this.rua}, ${this.numero} - ${this.cidade}`;
    }
}
class Cliente {
    public nome: string;
    public endereco: Endereco;

    constructor(nome: string, endereco: Endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    exibirInformacoes(): void {
        console.log(`--- Informações do Cliente ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco.toString()}`);
    }
}

const enderecoCliente = new Endereco("Rua das Rosas", 500, "Florianópolis");
const cliente = new Cliente("João da Silva", enderecoCliente);
cliente.exibirInformacoes();

function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Erro Personalizado: Divisão por zero não é permitida.");
    }
    return a / b;
}
try {
    const resultado = dividir(10, 2);
    console.log(`Sucesso: 10 / 2 = ${resultado}`);
} catch (error) {
    console.log("Este bloco não será executado no cenário A.");
}

try {
    console.log("Tentando dividir 10 por 0...");
    const resultado = dividir(10, 0); 
    
    console.log(resultado); 

} catch (error) {

    console.error(`🛑 Falha capturada: ${(error as Error).message}`);
}
console.log("O programa continua rodando após o tratamento do erro.");


function somar(a: number, b: number): number {
    return a + b;
}

function testeSomar(): void {
    const resultado = somar(2, 3);
    const esperado = 5;

    if (resultado === esperado) {
        console.log("Teste passou");
    } else {
        console.log(`Teste falhou: esperado ${esperado}, recebido ${resultado}`);
    }
}

testeSomar();

class Calculadora {
    multiplicar(a: number, b: number): number {
        return a * b;
    }
}

function testeMultiplicar(): void {
    const calc = new Calculadora();
    const resultado = calc.multiplicar(3, 4);
    const esperado = 12;

    if (resultado === esperado) {
        console.log("Teste passou");
    } else {
        console.log(`Teste falhou: esperado ${esperado}, recebido ${resultado}`);
    }
}

testeMultiplicar();
