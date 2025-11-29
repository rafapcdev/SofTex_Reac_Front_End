var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(name, idade) {
        this.name = name;
        this.idade = idade;
    }
    Pessoa.prototype.toString = function () {
        return "".concat(this.name, ", ").concat(this.idade, " anos");
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Rafael", 29);
console.log(pessoa.toString());
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        if (saldoInicial < 0) {
            console.error("ERRO: O saldo inicial não pode ser negativo.");
            this.saldo = 0;
        }
        else {
            this.saldo = saldoInicial;
        }
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("\u2705 Dep\u00F3sito de R$ ".concat(valor.toFixed(2), "."));
        }
        else {
            console.error("❌ ERRO: Valor de depósito inválido.");
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= 0) {
            console.error("❌ ERRO: Valor de saque inválido.");
            return;
        }
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log("\u2705 Saque de R$ ".concat(valor.toFixed(2), "."));
        }
        else {
            console.error("\u274C ERRO: Saldo insuficiente. Saldo atual: R$ ".concat(this.saldo.toFixed(2), "."));
        }
    };
    ContaBancaria.prototype.verSaldo = function () {
        console.log("\uD83D\uDCB0 Saldo atual: R$ ".concat(this.saldo.toFixed(2)));
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria();
conta.verSaldo();
conta.depositar(150);
conta.sacar(100);
conta.sacar(700);
conta.verSaldo();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        return "Au au!";
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.emitirSom = function () {
        return "Miau!";
    };
    return Gato;
}(Animal));
function emitirSomDoAnimal(animal) {
    console.log("O som emitido \u00E9: ".concat(animal.emitirSom()));
}
var meuCachorro = new Cachorro();
var meuGato = new Gato();
var spike = new Cachorro();
var felix = new Gato();
console.log("O cachorro diz: ".concat(meuCachorro.emitirSom()));
console.log("O gato diz: ".concat(meuGato.emitirSom()));
console.log("Animal 1 (Cachorro):");
emitirSomDoAnimal(spike);
console.log("\nAnimal 2 (Gato):");
emitirSomDoAnimal(felix);
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.mover = function () {
        return "O carro está se movendo…";
    };
    return Carro;
}(Veiculo));
var Bicicleta = /** @class */ (function (_super) {
    __extends(Bicicleta, _super);
    function Bicicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bicicleta.prototype.mover = function () {
        return "A bicicleta está se movendo…";
    };
    return Bicicleta;
}(Veiculo));
var meuCarro = new Carro();
var meuBicicleta = new Bicicleta();
console.log("O carro: ".concat(meuCarro.mover()));
console.log("A bike: ".concat(meuBicicleta.mover()));
var Quadrado = /** @class */ (function () {
    function Quadrado(lado) {
        this.lado = lado;
    }
    Quadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    return Quadrado;
}());
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * this.raio * this.raio;
    };
    return Circulo;
}());
var quadrado = new Quadrado(10);
var circulo = new Circulo(5);
console.log("Área do Quadrado:", quadrado.calcularArea().toFixed(2));
console.log("Área do Círculo:", circulo.calcularArea().toFixed(2));
var Endereco = /** @class */ (function () {
    function Endereco(rua, numero, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }
    Endereco.prototype.toString = function () {
        return "".concat(this.rua, ", ").concat(this.numero, " - ").concat(this.cidade);
    };
    return Endereco;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    Cliente.prototype.exibirInformacoes = function () {
        console.log("--- Informa\u00E7\u00F5es do Cliente ---");
        console.log("Nome: ".concat(this.nome));
        console.log("Endere\u00E7o: ".concat(this.endereco.toString()));
    };
    return Cliente;
}());
var enderecoCliente = new Endereco("Rua das Rosas", 500, "Florianópolis");
var cliente = new Cliente("João da Silva", enderecoCliente);
cliente.exibirInformacoes();
function dividir(a, b) {
    if (b === 0) {
        throw new Error("Erro Personalizado: Divisão por zero não é permitida.");
    }
    return a / b;
}
try {
    var resultado = dividir(10, 2);
    console.log("Sucesso: 10 / 2 = ".concat(resultado));
}
catch (error) {
    console.log("Este bloco não será executado no cenário A.");
}
try {
    console.log("Tentando dividir 10 por 0...");
    var resultado = dividir(10, 0);
    console.log(resultado);
}
catch (error) {
    console.error("\uD83D\uDED1 Falha capturada: ".concat(error.message));
}
console.log("O programa continua rodando após o tratamento do erro.");
function somar(a, b) {
    return a + b;
}
function testeSomar() {
    var resultado = somar(2, 3);
    var esperado = 5;
    if (resultado === esperado) {
        console.log("Teste passou");
    }
    else {
        console.log("Teste falhou: esperado ".concat(esperado, ", recebido ").concat(resultado));
    }
}
testeSomar();
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    return Calculadora;
}());
function testeMultiplicar() {
    var calc = new Calculadora();
    var resultado = calc.multiplicar(3, 4);
    var esperado = 12;
    if (resultado === esperado) {
        console.log("Teste passou");
    }
    else {
        console.log("Teste falhou: esperado ".concat(esperado, ", recebido ").concat(resultado));
    }
}
testeMultiplicar();
