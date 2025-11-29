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
