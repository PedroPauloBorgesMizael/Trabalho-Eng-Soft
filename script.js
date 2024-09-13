document.getElementById('calculadora').addEventListener('click', function () {

    const sistema = document.getElementById('sistemaDeIrrigacao').value;
    const cultura = document.getElementById('tipoDeCultura').value;
    const frequencia = document.getElementById('xVezes').value;
    const pressao = document.getElementById('pressao').value;
    const area = document.getElementById('area').value;
    const custo = document.getElementById('custo').value;

    let litrosAguaPorHectare = 0;
    let fatorCultura = 1;

    // Ajuste do consumo de água com base no sistema de irrigação
    switch (sistema) {
        case 'Gotejamento':
            litrosAguaPorHectare = 5000; 
            break;
        case 'Aspersão':
            litrosAguaPorHectare = 4000; 
            break;
        case 'Microaspersão':
            litrosAguaPorHectare = 2000;
            break;
        case 'Pivo Central':
            litrosAguaPorHectare = 3000; 
            break;
        default:
            alert('Selecione um sistema de irrigação válido.');
            return;
    }

    // Ajuste do fator multiplicador baseado no tipo de cultura
    switch (cultura) {
        case 'Milho':
            fatorCultura = 1.2;
            break;
        case 'Soja':
            fatorCultura = 1.0;
            break;
        case 'Trigo':
            fatorCultura = 0.8;
            break;
        case 'Cafe':
            fatorCultura = 1.5;
            break;
        default:
            alert('Selecione um tipo de cultura válido.');
            return;
    }

    // Cálculo do consumo de água
    const consumoLitros = litrosAguaPorHectare * pressao * area * frequencia * fatorCultura;
    const consumoM3 = consumoLitros / 1000;

    // Cálculo do custo total
    const custoTotal = consumoM3 * custo;

    document.querySelector('tbody').innerHTML = `
        <tr>
            <td>${consumoLitros.toFixed(2)} L</td>
            <td>${consumoM3.toFixed(2)} m³</td>
            <td>R$ ${custoTotal.toFixed(2)}</td>
        </tr>
    `;
});
