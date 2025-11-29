const nome = "Rafael"

console.log(`Olá, ${nome}! Bem-vindo(a) ao curso de React.`);

let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");

const numero1 = parseFloat(n1);
const numero2 = parseFloat(n2);

if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Erro: Pelo menos um dos tipos não é um número válido.");
} else {
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero1 / numero2;

    console.log(`Você digitou: ${numero1} e ${numero2}`);
    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
}

const idade = prompt("Digite sua idade: ")
const idadeN = parseInt(idade);
if (idadeN < 18){
    console.log("Menor de idade")
}else{
    console.log("maior de idade ")
}

for (let i=1; i<=20;++i){
    console.log(i);
}

let somaTotal = 0;
let contador = 1;

while (contador <= 10){
    somaTotal = somaTotal + contador; 
    contador++;
}
console.log(`A soma dos números de 1 a 10 é: ${somaTotal}`);


function converterParaFahrenheit(){
    const celsius = prompt("Digite o valor da temperatura em celsius:");
    const celsiusN= parseFloat(celsius);
    const fahrenheit = celsiusN * 1.8 + 32;
    console.log(`${celsiusN}°C é igual a ${fahrenheit.toFixed(2)}°F`);
    return fahrenheit;
}
converterParaFahrenheit();

function login(){
    const usuario = "admin"
    const senha = "1234"
    while (true){
        let user = prompt("Digite o login:")
        let s = prompt("Digite a senha:")
        
        if (user === usuario && s === senha){
            console.log("Login correto")
            return true;
        }else{
            console.log("usuario ou senha incorreto")
        }
    }
}

login()

function mostrarMenu(){
   console.log("MENU-PRINCIPAL")
   console.log(" 1 - Iniciar jogo\n 2 - Instruções\n 3 - Sair")
   const opcao = prompt(" digite qual opcao deseja:")
   return opcao
}

function executarOpcao(){
    const opcao = mostrarMenu();
    
    if (opcao === "1"){
        console.log("1 →INIciando o jogo…")
    } else if(opcao === "2"){
        console.log("2 ->iniciando Painel de Instruçoes ")
    } else if(opcao === "3"){
        console.log("3-> Saindo do jogo")
    }
}

executarOpcao()
