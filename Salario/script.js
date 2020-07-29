function analisar(){


    var salario_anual = document.getElementById('salarioAnual').value
    var piso_s = document.getElementById('piso').value
    var s_mensal = Number(salario_anual)/12
    piso_s > s_mensal ? status="abaixo" : status="acima"


    let resposta = document.getElementById('res')
    resposta.innerHTML = `Seu salário mensal é de R$${s_mensal.toFixed(1)}<br>
    e está <strong>${status}</strong> do piso salarial mensal de R$${piso_s}.`
    
};