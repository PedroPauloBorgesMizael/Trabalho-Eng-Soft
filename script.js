document.getElementById('calculadora').addEventListener('click', function () {

    const sistema = document.getElementById('sistemaDeIrrigacao').value;
    const frequencia = document.getElementById('xVezes').value;
    const pressao = document.getElementById('pressao').value;
    const area = document.getElementById('area').value;
    const custo = document.getElementById('custo').value;

    let litrosAguaPorHectare = 0;

    switch (sistema) {
        case 'Gotejamento':
            litrosAguaPorHectare = 10000; 
            break;
        case 'Aspersão':
            litrosAguaPorHectare = 8000; 
            break;
        case 'Microaspersão':
            litrosAguaPorHectare = 5000;
            break;
        case 'Pivo Central':
            litrosAguaPorHectare = 7000; 
            break;
        default:
            alert('Selecione um sistema de irrigação válido.');
            return;
    }

    const consumoLitros = litrosAguaPorHectare * area * frequencia;
    const consumoM3 = consumoLitros / 1000;

    const custoTotal = consumoM3 * custo;

    document.querySelector('tbody').innerHTML = `
        <tr>
            <td>${consumoLitros.toFixed(2)} L</td>
            <td>${consumoM3.toFixed(2)} m³</td>
            <td>R$ ${custoTotal.toFixed(2)}</td>
        </tr>
    `;
});
