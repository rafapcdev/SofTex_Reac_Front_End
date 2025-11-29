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