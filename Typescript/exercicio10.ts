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
