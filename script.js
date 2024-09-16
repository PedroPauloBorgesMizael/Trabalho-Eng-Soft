document.getElementById('calculadora').addEventListener('click', function () {
    
    let frequencia = document.getElementById('frequencia').value; // Verifica a frequência
    const sistema = document.getElementById('sistemaDeIrrigacao').value;
    const cultura = document.getElementById('tipoDeCultura').value;
    const pressao = document.getElementById('pressao').value;
    const area = document.getElementById('area').value;
    const custo = document.getElementById('custo').value;
    const vezesPorPeriodo = parseInt(document.getElementById('frequenciaInput').value);
                                                                                                                 
    let litrosAguaPorHectare = 0;
    let fatorCultura = 1;
    
    // Ajuste do consumo de água com base no sistema de irrigação
    switch (sistema) {
        case 'Gotejamento':
            litrosAguaPorHectare = 800; 
            break;
        case 'Aspersão':
            litrosAguaPorHectare = 2400; 
            break;
        case 'Microaspersão':
            litrosAguaPorHectare = 1200;
            break;
        case 'Pivo Central':
            litrosAguaPorHectare = 4200; 
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

    // Ajusta a frequência de irrigação com base na seleção diária ou semanal
    if (frequencia === 'diario') {
        frequencia = vezesPorPeriodo; // Se for diário, considera o valor de vezesPorPeriodo diretamente
    } else if (frequencia === 'semanal') {
        if (vezesPorPeriodo < 1 || vezesPorPeriodo > 7) {
            alert('Insira uma frequência menor ou igual a 7.');
            return;
        } else {
            frequencia = vezesPorPeriodo / 7; // Se for semanal, considera os dias a serem regados por semana
        }
    } else {
        alert('Selecione uma frequência válida.');
        return;
    }
    
    // Cálculo do consumo de água
    var consumoLitros = pressao * area * frequencia * fatorCultura * 10000;
    const tempodeIrrigação = consumoLitros / litrosAguaPorHectare;
    const consumoM3 = consumoLitros / 1000;

    // Cálculo do custo total
    const custoTotal = consumoM3 * custo;

    document.querySelector('tbody').innerHTML = `
        <tr>
            <td>${consumoLitros.toFixed(2)} L</td>
            <td>${consumoM3.toFixed(2)} m³</td>
            <td>${tempodeIrrigação.toFixed(2)} min</td>
            <td>R$ ${custoTotal.toFixed(2)}</td>
        </tr>
    `;
});
